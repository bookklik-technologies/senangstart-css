/** Minimal stand-in for @vue/runtime-dom's HTMLAttributes. */
declare module '@vue/runtime-dom' {
  export interface HTMLAttributes {
    class?: unknown;
    id?: string;
  }
  export interface SVGAttributes {
    class?: unknown;
  }
}
