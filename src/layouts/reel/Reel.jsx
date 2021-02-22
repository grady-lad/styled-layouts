import ReelStyled, { REEL_SPACING, REEL_ITEM_WIDTH } from './styles';

/**
 * @module reel-l
 * @description
 * A custom element for creating a responsive grid using the CSS Grid module
 * @property {string} itemWidth=auto The width of each item (child element) in the Reel
 * @property {string} space=var(--s0) The space between Reel items (child elements)
 * @property {string} height=auto The height of the Reel itself
 * @property {boolean} noBar=false Whether to display the scrollbar
 */
export default function Reel({
  itemWidth = 'auto',
  space = 1,
  customSpacing,
  height = 'auto',
  noBar,
  style = {},
  children,
  ...rest
}) {
  return (
    <ReelStyled
      {...rest}
      style={{
        ...style,
        height,
        [REEL_SPACING]: customSpacing || `var(--s${space})`,
        [REEL_ITEM_WIDTH]: itemWidth,
      }}
      height={height}
    >
      {children}
    </ReelStyled>
  );
}
