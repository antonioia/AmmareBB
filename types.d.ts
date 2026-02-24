
import 'react';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        inert?: string | boolean | undefined;
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'slideshow-stack': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
