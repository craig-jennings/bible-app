import { CloseIcon } from '../base/Icons';
import { FlexBox } from '../base/Box';
import { IconButton } from '../base/Buttons';
import { UnstyledButton } from '../base/Unstyled';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RefreshButton = styled(UnstyledButton)`
  border-radius: 0.5rem;
  border: 1px solid transparent;
  font-size: 0.75rem;
  line-height: 1.5rem;
  margin-right: 1rem;
  padding: 0.25rem 0.75rem;
  transition: background-color 0.1s ease-in-out;

  :focus,
  :hover {
    border-color: var(--notification__button__bg-color--hover);
  }
`;

function SWUpdate({ onDismiss }) {
  const handleRefreshClick = () => window.location.reload();

  return (
    <FlexBox alignItems="center" justifyContent="space-between">
      <div>Update Available</div>

      <FlexBox alignItems="center">
        <RefreshButton onClick={handleRefreshClick}>Refresh?</RefreshButton>

        <IconButton onClick={onDismiss}>
          <CloseIcon />
        </IconButton>
      </FlexBox>
    </FlexBox>
  );
}

SWUpdate.propTypes = {
  onDismiss: PropTypes.func.isRequired,
};

export default SWUpdate;
