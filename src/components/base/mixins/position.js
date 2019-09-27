function positionMixin({ position }) {
  if (!position) return null;

  return { position };
}

export default positionMixin;
