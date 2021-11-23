interface OrbitSpinnerAttributes {
  color: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'orbit-spinner': OrbitSpinnerAttributes;
    }
  }
}
