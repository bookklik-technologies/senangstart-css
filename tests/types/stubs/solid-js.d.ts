/** Minimal stand-in for solid-js JSX namespace. */
declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> { class?: string; id?: string }
    interface SVGAttributes<T> { class?: string }
  }
}
