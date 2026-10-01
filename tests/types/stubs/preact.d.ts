/** Minimal stand-in for preact's JSX namespace. */
declare module 'preact' {
  namespace JSX {
    interface HTMLAttributes<RefType extends EventTarget = EventTarget> { class?: string; id?: string }
    interface SVGAttributes<Target extends EventTarget = SVGElement> extends HTMLAttributes<Target> {}
  }
}
