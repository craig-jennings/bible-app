import display from './mixins/display';
import flex from './mixins/flex';
import position from './mixins/position';
import spacing from './mixins/spacing';
import styled from 'styled-components';

const Box = styled.div`
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
