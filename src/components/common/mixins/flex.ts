type GlobalValues = 'inherit' | 'initial' | 'unset';

type AlignContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'normal'
  | 'baseline'
  /* Distributed alignment */
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | GlobalValues;

type AlignItems =
  | 'normal'
  | 'stretch'
  /* Positional alignment */
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | GlobalValues;

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | GlobalValues;

type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | GlobalValues;

type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  /* Distributed alignment */
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | GlobalValues;

interface FlexProperties {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  flex?: string;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
}

const flexKeys = ['alignContent', 'alignItems', 'flex', 'flexDirection', 'flexWrap', 'justifyContent'];

function flex(props: any): { [x: string]: any } | null {
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
export { FlexProperties };
