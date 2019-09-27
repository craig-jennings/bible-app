const flexKeys = [
  'alignContent',
  'alignItems',
  'flex',
  'flexDirection',
  'flexWrap',
  'justifyContent',
];

function flex(props) {
  return Object.entries(props)
    .map(([prop, value]) => (flexKeys.indexOf(prop) > -1 ? { [prop]: value } : null))
    .reduce(
      (acc, currentValue) => ({
        ...acc,
        ...currentValue,
      }),
      {},
    );
}

export default flex;
