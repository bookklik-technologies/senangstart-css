# Ketepuan

Laras ketepuan elemen.

## Sintaks
```
visual="saturate:none | saturate:low | saturate:normal | saturate:high | saturate:vivid"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `saturate:none` | `filter: saturate(0)` |
| `saturate:low` | `filter: saturate(0.5)` |
| `saturate:normal` | `filter: saturate(1)` |
| `saturate:high` | `filter: saturate(1.5)` |
| `saturate:vivid` | `filter: saturate(2)` |

## Contoh

```html
<img visual="saturate:none" />   <!-- Tiada ketepuan (kelabu) -->
<img visual="saturate:normal" /> <!-- 100% ketepuan -->
<img visual="saturate:vivid" />  <!-- 200% ketepuan -->
```
