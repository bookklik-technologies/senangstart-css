# Keterlihatan Belakang

Kawal sama ada muka belakang elemen kelihatan apabila diputar.

## Sintaks
```
visual="backface:visible | backface:hidden"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `backface:visible` | `backface-visibility: visible` |
| `backface:hidden` | `backface-visibility: hidden` |

## Contoh

```html
<div visual="backface:visible">...</div> <!-- Muka belakang kelihatan -->
<div visual="backface:hidden">...</div>  <!-- Muka belakang tersembunyi -->
```

## Contoh Kad Terbalik

```html
<div 
  layout="relative" 
  visual="perspective:medium" 
  space="w:[256px] h:[160px]"
>
  <div 
    layout="absolute inset:0" 
    visual="transition duration:slow transform-style:preserve-3d hover:rotate:[180deg]"
  >
    <!-- Depan -->
    <div 
      layout="absolute inset:0" 
      visual="backface:hidden bg:blue-500 rounded:big"
      space="p:medium"
    >
      Bahagian Depan
    </div>
    
    <!-- Belakang -->
    <div 
      layout="absolute inset:0" 
      visual="backface:hidden bg:green-500 rounded:big rotate:[180deg]"
      space="p:medium"
    >
      Bahagian Belakang
    </div>
  </div>
</div>
```
