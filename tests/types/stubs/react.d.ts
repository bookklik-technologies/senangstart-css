/**
 * Minimal stand-in for @types/react (not a dependency of this repo).
 * Only the surface the augmentation in types/react.d.ts touches; the JSX
 * namespace lives in ./react-jsx-runtime.d.ts (jsx: react-jsx).
 */
declare module 'react' {
  interface HTMLAttributes<T> {
    className?: string;
    id?: string;
    children?: unknown;
  }
  interface SVGAttributes<T> {
    className?: string;
    children?: unknown;
  }
}
