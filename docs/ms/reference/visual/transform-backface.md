# Transform Backface

Kawal keterlihatan bahagian belakang elemen apabila diputar dalam 3D

## Sintaks
```
visual="backface:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `visible` | `backface-visibility: visible` | Belakang kelihatan |
| `hidden` | `backface-visibility: hidden` | Belakang tersembunyi |

## Contoh

```html
<div visual="backface:hidden rotate-y:180">Hidden when flipped</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Keterlihatan Belakang

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backface:hidden"</code> - Tunjukkan atau sembunyikan bahagian belakang apabila diputar 180°</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">visible + rotate-y:180</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:primary text:white rounded:small backface:visible rotate-y:180">👀</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">hidden + rotate-y:180</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:danger text:white rounded:small backface:hidden rotate-y:180">🙈</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">visible + rotate-y:180</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:primary text:white rounded:small backface:visible rotate-y:180">👀</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">hidden + rotate-y:180</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:danger text:white rounded:small backface:hidden rotate-y:180">🙈</div>
    </div>
  </div>
</div>
```

</details>

</div>
