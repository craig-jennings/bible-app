const spacings: { [x: number]: string } = {
  0: '0',
  1: '.25rem',
  2: '.5rem',
  3: '1rem',
  4: '1.5rem',
};

const spacingKeys: { [x: string]: string | string[] } = {
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

function spacing(props: any) {
  return Object.entries(props)
    .map(([prop, value]: [string, unknown]) => {
      const spacingProp = spacingKeys[prop];

      if (!spacingProp) {
        return null;
      }

      const cssProperties = Array.isArray(spacingProp) ? spacingProp : [spacingProp];

      return cssProperties.reduce<{ [x: string]: string }>((acc, cssProp) => {
        const val = typeof value === 'number' ? spacings[value] : value;

        acc[cssProp] = val as string;

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

type SpacingValues = 0 | 1 | 2 | 3 | 4;

type SpacingKeys = 'm' | 'mb' | 'ml' | 'mr' | 'mt' | 'mx' | 'my' | 'p' | 'pb' | 'pl' | 'pr' | 'pt' | 'px' | 'py';

export default spacing;
export { SpacingKeys, SpacingValues };
