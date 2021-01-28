import { FlexBox } from '@common/Box';
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

  ${({ disabled }) =>
    disabled &&
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

interface PaginationProps {
  pagination: {
    endRange: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    startRange: number;
    totalResults: number;
  };

  onNextClick: () => void;
  onPrevClick: () => void;
}

function Pagination({ pagination, onNextClick, onPrevClick }: PaginationProps) {
  const { endRange, hasNextPage, hasPrevPage, startRange, totalResults } = pagination;

  const range = (
    <>
      {startRange} - {endRange} of {totalResults}
    </>
  );

  const handlePrevClick = () => {
    if (!hasPrevPage) return;

    onPrevClick();
  };

  const handleNextClick = () => {
    if (!hasNextPage) return;

    onNextClick();
  };

  return (
    <FlexBox data-testid="pagination" justifyContent="space-between">
      <PaginationButton
        data-testid="prev-btn"
        disabled={!hasPrevPage}
        onClick={handlePrevClick}
        type="button"
      >
        Previous
      </PaginationButton>

      <div data-testid="range">{totalResults > 0 ? range : ''}</div>

      <PaginationButton
        data-testid="next-btn"
        disabled={!hasNextPage}
        onClick={handleNextClick}
        type="button"
      >
        Next
      </PaginationButton>
    </FlexBox>
  );
}

export default Pagination;
