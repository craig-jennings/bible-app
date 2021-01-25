import display, { Display } from './mixins/display';
import flex, { FlexProperties } from './mixins/flex';
import position, { Position } from './mixins/position';
import spacing, { SpacingKeys, SpacingValues } from './mixins/spacing';
import styled from 'styled-components';

type BoxProps = {
  [x in SpacingKeys]?: string | SpacingValues;
} & {
  displayRaw?: Display;
  position?: Position;
} & FlexProperties;

const Box = styled.div<BoxProps>`
  ${display}
  ${flex}
  ${position}
  ${spacing}
`;

const FlexBox = styled(Box)`
  display: flex;
`;
const InlineBox = styled(Box)`
  display: inline-block;
`;
const InlineFlexBox = styled(Box)`
  display: inline-flex;
`;

const CenterBox = styled(FlexBox)`
  align-items: center;
  justify-content: center;
`;

export { Box, CenterBox, FlexBox, InlineBox, InlineFlexBox };
