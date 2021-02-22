import GridStyled, { GRID_GAP, GRID_COLUMN_MIN } from './styles';

/**
 * @module Grid
 * @description
 * A custom element for creating a responsive grid using the CSS Grid module
 * @property {string} min=250px A CSS length value representing x in `minmax(min(x, 100%), 1fr)`
 * @property {string} space=var(--s1) The space between grid cells
 */
export default function Grid({
  min = '250px',
  space = 1,
  customSpacing,
  children,
  style = {},
  ...rest
}) {
  return (
    <GridStyled
      style={{
        [GRID_GAP]: customSpacing || `var(--s${space})`,
        [GRID_COLUMN_MIN]: min,
        ...style,
      }}
      {...rest}
    >
      {children}
    </GridStyled>
  );
}
