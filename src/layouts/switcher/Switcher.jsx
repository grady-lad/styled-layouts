import SwitcherStyled, {
  SWITCHER_PARENT_WIDTH,
  SWITCHER_SPACE,
} from './styles';

/**
 * @module Switcher
 * @description Switch directly between horizontal and vertical layouts at a given (container width-based) breakpoint or 'threshold'
 * @property {string} threshold=var(--measure) A CSS `width` value (representing the 'container breakpoint')
 * @property {string} space=var(--s1) A CSS `margin` value
 * @property {integer} limit=4 A number representing the maximum number of items permitted for a horizontal layout
 *
 * First child needs to be a div so that we can apply spacing properly (We could avoid this with flex gap).
 */
export default function Sidebar({
  children,
  threshold,
  space = 1,
  customSpacing,
  limit,
  style = {},
  ...rest
}) {
  return (
    <SwitcherStyled
      style={{
        [SWITCHER_PARENT_WIDTH]: threshold,
        [SWITCHER_SPACE]: customSpacing || `var(--s${space})`,
        ...style,
      }}
      limit={limit}
      {...rest}
    >
      {children}
    </SwitcherStyled>
  );
}
