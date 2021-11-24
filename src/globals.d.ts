interface OrbitSpinnerAttributes extends JSX.IntrinsicElements['div'] {
  color: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    'orbit-spinner': OrbitSpinnerAttributes;
  }
}

interface OnlyChildren {
  children?: ReactNode | undefined;
}
