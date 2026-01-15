# Transform Style

Kekalkan ruang 3D untuk elemen transformasi bersarang

## Sintaks
```
visual="transform-style:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `flat` | `transform-style: flat` | Ratakan anak 3D |
| `preserve-3d` | `transform-style: preserve-3d` | Kekalkan kedalaman 3D |

## Contoh

```html
<div visual="transform-style:preserve-3d">Nested 3D transforms preserved</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gaya Transformasi

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="transform-style:preserve-3d"</code> - Rata atau kekalkan 3D untuk transformasi bersarang</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">flat</span>
    <div space="p:medium" visual="perspective:normal transform-style:flat rotate-x:20">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:45">flat</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">preserve-3d</span>
    <div space="p:medium" visual="perspective:normal transform-style:preserve-3d rotate-x:20">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">flat</span>
    <div space="p:medium" visual="perspective:normal transform-style:flat rotate-x:20">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:45">flat</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">preserve-3d</span>
    <div space="p:medium" visual="perspective:normal transform-style:preserve-3d rotate-x:20">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
</div>
```

</details>

</div>
