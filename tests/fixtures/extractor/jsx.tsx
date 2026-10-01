// Extractor fixture: JSX / TSX (also representative of Astro & Solid)
import React from 'react';
import clsx from 'clsx';
import { cn } from '@/lib/utils';

// --- false-positive traps ---------------------------------------------------
const layout = computeLayout();            // plain JS assignment, not an attribute
const visual = 'bg:trap-const';            // string in JS, not inside a tag
const config = { layout: 'trap-object', space: 'p:trap' };
type Props<T> = { layout?: string; space?: T };
const cmp = (a: number, b: number) => a < b && b > a;
/* <div layout="trap-block-comment"> */

export function Card({ isOpen, dir, size, items }: Props<string>) {
  return (
    <section layout="flex col" space="p:medium g:small" visual="bg:white shadow:medium">
      {/* JSX comment: <div layout="trap-jsx-comment"> */}
      <header layout={"flex between"} visual={'bg:primary text:white'} />
      <div layout={`grid ${isOpen ? 'grid-cols:2' : 'grid-cols:1'} bg-${size}`} />
      <div layout={isOpen ? 'flex row' : 'hidden'} space={size === 'big' ? 'p:big' : 'p:small'} />
      <div visual={clsx('rounded:medium', { 'shadow:small': !isOpen, 'hover:shadow:big': isOpen }, isOpen && 'bg:success')} />
      <div space={cn('m:small', ['g:medium', 'tab:g:big'])} />
      <div layout={classNames({ wrap: true, center: isOpen })} />
      <div visual={'bg-' + size + ' text:big'} />
      <Widget data-layout="trap-data" playout="trap-prefix" x-layout="trap-x" layoutMode="trap-suffix" />
      <div layout={layout} space={props.space} visual={styles.card} />
      {items.map((item) => (
        <Item key={item.id} layout="flex" visual="bg:light" onClick={() => item.count > 1} />
      ))}
      <input disabled layout='inline-block' />
      <div layout={`${isOpen ? 'block' : 'inline'} relative`} />
      <p>The prose says space = big and layout=flex but it is text.</p>
    </section>
  );
}
