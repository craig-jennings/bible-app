import { FlexBox } from '../base/Box';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const PaginationButton = styled.button`
  background-color: transparent;
  border-radius: 0.5rem;
  border: 1px solid var(--selector__border-color);
  color: inherit;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  transition: background-color 0.1s ease-in-out;

  :hover,
  :focus {
    background-color: var(--selector__border-color);
    outline: none;
  }

  ${({ isEnabled }) =>
    !isEnabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;

      :hover,
      :focus {
        background-color: inherit;
        outline: none;
      }
    `}
`;

function Pagination({ pagination, onNextClick, onPrevClick }) {
  const { endRange, hasNextPage, hasPrevPage, startRange, totalResults } = pagination;

  const range = (
    <>
      {startRange} - {endRange} of {totalResults}
    </>
  );

  return (
    <FlexBox justifyContent="space-between">
      <PaginationButton isEnabled={hasPrevPage} onClick={onPrevClick} type="button">
        Previous
      </PaginationButton>

      <div className="range">{totalResults > 0 ? range : ''}</div>

      <PaginationButton isEnabled={hasNextPage} onClick={onNextClick} type="button">
        Next
      </PaginationButton>
    </FlexBox>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.shape({
    endRange: PropTypes.number,
    startRange: PropTypes.number,
    hasNextPage: PropTypes.bool,
    hasPrevPage: PropTypes.bool,
    totalResults: PropTypes.number,
  }).isRequired,

  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func.isRequired,
};

export default Pagination;
