# Rujukan visual

Atribusi `visual` mengawal warna, tekstur, dan penampilan.

## Latar Belakang

| Property | Output CSS |
|----------|------------|
| `bg:white` | `background-color: var(--c-white)` |
| `bg:primary` | `background-color: var(--c-primary)` |
| `bg:[#hex]` | `background-color: #hex` |

```html
<div visual="bg:white">Latar belakang putih</div>
<div visual="bg:primary">Warna primary</div>
<div visual="bg:[#FF5733]">Hex tersuai</div>
<div visual="bg:[rgba(0,0,0,0.5)]">Separa lutsinar</div>
```

## Warna Teks

| Property | Output CSS |
|----------|------------|
| `text:dark` | `color: var(--c-dark)` |
| `text:grey` | `color: var(--c-grey)` |
| `text:primary` | `color: var(--c-primary)` |

```html
<span visual="text:dark">Teks gelap</span>
<span visual="text:grey">Teks kelabu</span>
<span visual="text:primary">Teks primary</span>
```

## Saiz Teks

| Property | Output CSS |
|----------|------------|
| `text-size:tiny` | `font-size: 12px` |
| `text-size:small` | `font-size: 14px` |
| `text-size:medium` | `font-size: 16px` |
| `text-size:big` | `font-size: 20px` |
| `text-size:giant` | `font-size: 32px` |
| `text-size:vast` | `font-size: 48px` |

```html
<span visual="text-size:small">Teks kecil</span>
<h1 visual="text-size:giant">Tajuk giant</h1>
```

## Berat Fon

| Property | Output CSS |
|----------|------------|
| `font:normal` | `font-weight: 400` |
| `font:medium` | `font-weight: 500` |
| `font:bold` | `font-weight: 700` |

```html
<span visual="font:normal">Berat normal</span>
<span visual="font:bold">Teks tebal</span>
```

## Penjajaran Teks

| Property | Output CSS |
|----------|------------|
| `text:left` | `text-align: left` |
| `text:center` | `text-align: center` |
| `text:right` | `text-align: right` |

```html
<p visual="text:center">Teks di tengah</p>
```

## Radius Sempadan

| Property | Output CSS |
|----------|------------|
| `rounded:none` | `border-radius: 0` |
| `rounded:small` | `border-radius: 4px` |
| `rounded:medium` | `border-radius: 8px` |
| `rounded:big` | `border-radius: 16px` |
| `rounded:round` | `border-radius: 9999px` |

```html
<div visual="rounded:small">Pembulatan halus</div>
<div visual="rounded:big">Pembulatan jelas</div>
<button visual="rounded:round">Butang pill</button>
```

## Bayang Kotak

| Property | Output CSS |
|----------|------------|
| `shadow:none` | `box-shadow: none` |
| `shadow:small` | `box-shadow: 0 1px 2px rgba(0,0,0,0.05)` |
| `shadow:medium` | `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` |
| `shadow:big` | `box-shadow: 0 10px 15px rgba(0,0,0,0.15)` |
| `shadow:giant` | `box-shadow: 0 25px 50px rgba(0,0,0,0.25)` |

```html
<div visual="shadow:small">Bayang halus</div>
<div visual="shadow:big">Bayang ketara</div>
```

## Sempadan

| Property | Output CSS |
|----------|------------|
| `border:grey` | `border-color: var(--c-grey); border-style: solid` |
| `border-w:[2px]` | `border-width: 2px; border-style: solid` |

```html
<div visual="border:grey border-w:[1px]">Elemen bersempadan</div>
```

## Kelegapan

```html
<div visual="opacity:[0.5]">50% kelegapan</div>
<div visual="opacity:[0.8]">80% kelegapan</div>
```

## Palet Warna

| Kunci | Nilai Lalai |
|-------|-------------|
| `white` | #FFFFFF |
| `black` | #000000 |
| `grey` | #6B7280 |
| `dark` | #1F2937 |
| `light` | #F3F4F6 |
| `primary` | #3B82F6 |
| `success` | #10B981 |
| `warning` | #F59E0B |
| `danger` | #EF4444 |

## Prefiks Keadaan

Gabungkan dengan `hover:`, `focus:`, `active:`, `disabled:`:

```html
<button visual="bg:primary hover:bg:[#2563EB]">
  Kesan hover
</button>

<a visual="text:grey hover:text:primary">
  Hover pautan
</a>

<input visual="border:grey focus:border:primary" />
```

## Menggabungkan Sari Diri

```html
<div visual="bg:white rounded:big shadow:medium text:dark">
  Kad dengan pelbagai visual properties
</div>
```
