declare module 'react/jsx-runtime' {
  export namespace JSX {
    interface Element {}
    interface ElementChildrenAttribute { children: {} }
    interface IntrinsicElements {
      div: import('react').HTMLAttributes<HTMLDivElement> & { key?: string | number };
      span: import('react').HTMLAttributes<HTMLSpanElement> & { key?: string | number };
      h1: import('react').HTMLAttributes<HTMLHeadingElement> & { key?: string | number };
      p: import('react').HTMLAttributes<HTMLParagraphElement> & { key?: string | number };
      button: import('react').HTMLAttributes<HTMLButtonElement> & { key?: string | number };
      svg: import('react').SVGAttributes<SVGSVGElement> & { key?: string | number };
    }
  }
  export function jsx(type: unknown, props: unknown, key?: unknown): JSX.Element;
  export function jsxs(type: unknown, props: unknown, key?: unknown): JSX.Element;
  export const Fragment: unique symbol;
}
