function display({ displayRaw }) {
  if (!displayRaw) return null;

  return { display: displayRaw };
}

export default display;
