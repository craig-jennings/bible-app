type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';

function positionMixin({ position }: { position?: Position }) {
  return position && { position };
}

export default positionMixin;
export { Position };
