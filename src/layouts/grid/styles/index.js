import styled from 'styled-components';

// The grid gap applied to the grid
export const GRID_GAP = '--cover-spacing';

// The minimum value for the min() function
export const GRID_COLUMN_MIN = '--grid-column-min';

const GridStyled = styled.div`
  display: grid;
  grid-gap: var(${GRID_GAP});

  @supports (width: min(var(${GRID_COLUMN_MIN}), 100%)) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(var(${GRID_COLUMN_MIN}), 100%), 1fr)
    );
  }
`;

export default GridStyled;
