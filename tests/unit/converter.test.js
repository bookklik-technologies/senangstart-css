/**
 * Merged Tailwind converter (src/converter): variants, modifiers, HTML rewriting.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { convertClass, convertClasses, convertHTML, rewriteClassAttributes } from '../../src/converter/index.js';
import { compileSource } from '../../src/index.js';

const one = (cls, o) => { const r = convertClass(cls, o); return r ? r.filter(x => x.cat !== 'meta').map(x => `${x.cat}=${x.val}`).join(' ') : null; };

describe('converter: variants and modifiers', () => {
  const cases = [
    ['md:dark:hover:bg-blue-600', 'visual=tw-md:dark:hover:bg:blue-600'],
    ['!p-4', 'space=!p:medium'], ['p-4!', 'space=!p:medium'], ['hover:!p-4', 'space=!hover:p:medium'],
    ['max-md:hidden', 'layout=max-tw-md:hidden'], ['@md:p-4', 'space=@tw-md:p:medium'], ['@md/card:p-4', 'space=@tw-md/card:p:medium'],
    ['first:mt-0', 'space=first:m-t:none'], ['before:content-[\'\']', 'visual=before:content:[\'\']'],
    ['aria-checked:bg-red-500', 'visual=aria-checked:bg:red-500'], ['data-[state=open]:p-4', 'space=data-[state=open]:p:medium'],
    ['has-[img]:p-4', 'space=has-[img]:p:medium'], ['not-first:mt-2', 'space=not-first:m-t:small'],
    ['motion-reduce:animate-none', 'visual=motion-reduce:animate:none'], ['print:hidden', 'layout=print:hidden'],
    ['group-hover:text-white', 'visual=hover:text:white'], ['peer-checked:bg-green-500', 'visual=checked:bg:green-500 listens=peer'],
    ['rotate-45', 'visual=rotate:45'], ['-rotate-45', 'visual=rotate:-45'], ['scale-95', 'visual=scale:95'], ['skew-x-6', 'visual=skew-x:6'],
    ['text-[14px]', 'visual=text-size:[14px]'], ['text-[#123]', 'visual=text:[#123]'], ['bg-[url(x.png)]', 'visual=bg-image:[url(x.png)]'],
    ['[mask-type:luminance]', 'visual=[mask-type:luminance]'], ['w-full', 'space=w:full'], ['w-1/2', 'space=w:half'],
    ['rounded-t-lg', 'visual=rounded-t:medium'], ['sm:max-w-[40rem]', 'space=tw-sm:max-w:[40rem]'],
    ['*:p-4', null], ['supports-[display:grid]:grid', null], ['bogus-class', null],
  ];
  for (const [cls, expected] of cases) test(cls, () => assert.equal(one(cls), expected));

  test('exact mode keeps the Tailwind scale', () => {
    assert.equal(one('p-4', { exact: true }), 'space=p:tw-4');
    assert.equal(one('md:rounded-lg', { exact: true }), 'visual=tw-md:rounded:tw-lg');
  });

  test('every converted token compiles without diagnostics', () => {
    const classes = cases.filter(([, e]) => e).map(([c]) => c).join(' ');
    const r = convertClasses(classes);
    const html = `<div class="group"></div><div layout="${r.layout.join(' ')}" space="${r.space.join(' ')}" visual="${r.visual.join(' ')}" listens="${r.listens.join(' ')}"></div>`;
    const out = compileSource(html, { preflight: false });
    assert.deepEqual(out.errors || [], []);
  });
});

describe('converter: HTML rewriting', () => {
  test('rewrites class attributes, merges existing attributes, keeps unknown classes', () => {
    const html = convertHTML('<div class="flex p-4 custom" layout="relative">x</div>');
    assert.equal(html, '<div layout="relative flex" space="p:medium" class="custom">x</div>');
  });
  test('apostrophes, data-class, comments, scripts and dynamic bindings are untouched', () => {
    const src = `<!-- class="p-4" --><p class="it's p-2" data-class="p-4">a</p><script>var s="class='p-4'"</script><a :class="x" class={cls}>y</a><style>.class{}</style>`;
    const out = convertHTML(src);
    assert.ok(out.startsWith('<!-- class="p-4" -->'));
    assert.ok(out.includes('<p space="p:small" class="it\'s" data-class="p-4">'));
    assert.ok(out.includes(`<script>var s="class='p-4'"</script>`));
    assert.ok(out.includes('<a :class="x" class={cls}>'));
    assert.ok(out.includes('<style>.class{}</style>'));
  });
  test('JSX className string literals and self-closing tags', () => {
    assert.equal(convertHTML('<Btn className={"p-4 bg-blue-500"} />'), '<Btn space="p:medium" visual="bg:blue-500" />');
    assert.equal(convertHTML('<img class="w-full" />'), '<img space="w:full" />');
  });
  test('single-quoted class values are converted and emitted double-quoted; embedded quotes escaped', () => {
    assert.equal(convertHTML(`<i class='p-2 say-"hi"'>`), `<i space="p:small" class="say-&quot;hi&quot;">`);
  });
  test('prefix option and keepClass', () => {
    assert.equal(convertHTML('<b class="flex">', { prefix: 'ss', keepClass: true }), '<b ss-layout="flex" class="flex">');
  });
  test('rewriteClassAttributes reports counts and unknown classes', () => {
    const r = rewriteClassAttributes('<a class="flex foo"></a><b class="foo bar"></b>');
    assert.equal(r.converted, 2);
    assert.deepEqual([...r.unknown.entries()], [['foo', 2], ['bar', 1]]);
  });
  test('5 MB of markup converts in linear time', () => {
    const chunk = '<div class="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg"><span class="text-sm text-gray-500">x</span></div>\n';
    const big = chunk.repeat(Math.ceil(5e6 / chunk.length));
    const t = performance.now();
    convertHTML(big);
    assert.ok(performance.now() - t < 4000);
  });
});
