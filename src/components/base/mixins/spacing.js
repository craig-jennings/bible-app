// Inspired by https://github.com/mui-org/material-ui
const spacings = {
  0: '0',
  1: '.25rem',
  2: '.5rem',
  3: '1rem',
  4: '1.5rem',
};

const spacingKeys = {
  m: 'margin',
  mb: 'margin-bottom',
  ml: 'margin-left',
  mr: 'margin-right',
  mt: 'margin-top',
  mx: ['margin-left', 'margin-right'],
  my: ['margin-bottom', 'margin-top'],
  p: 'padding',
  pb: 'padding-bottom',
  pl: 'padding-left',
  pr: 'padding-right',
  pt: 'padding-top',
  px: ['padding-left', 'padding-right'],
  py: ['padding-bottom', 'padding-top'],
};

function spacing(props) {
  return Object.entries(props)
    .map(([prop, value]) => {
      const spacingProp = spacingKeys[prop];

      if (!spacingProp) {
        return null;
      }

      const cssProperties = Array.isArray(spacingProp) ? spacingProp : [spacingProp];

      return cssProperties.reduce((acc, cssProp) => {
        const val = typeof value === 'number' ? spacings[value] : value;

        acc[cssProp] = val;

        return acc;
      }, {});
    })
    .reduce(
      (acc, currentValue) => ({
        ...acc,
        ...currentValue,
      }),
      {},
    );
}

export default spacing;
