# Animation Iteration

Tetapkan bilangan ulangan animasi

## Sintaks
```
visual="animation-iteration:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `1` | `animation-iteration-count: 1` | Sekali |
| `infinite` | `animation-iteration-count: infinite` | Selamanya |

## Contoh

```html
<div visual="animate:bounce animation-iteration:1">Bounce once</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Ulangan Animasi

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-iteration:infinite"</code> - Kawal bilangan gelung</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:1">once</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:infinite">infinite</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:1">once</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:infinite">infinite</div>
</div>
```

</details>

</div>
