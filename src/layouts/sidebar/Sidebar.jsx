import {
  SidebarStyled,
  SidebarWithGuttersStyled,
  SIDEBAR_SPACING,
} from './styles';

/**
 * @module Sidebar
 * @description
 * A custom element for placing two elements side-by-side. If space permits, the sidebar element has a set width, and the companion takes up the rest of the available horizontal space. If not, the elements are collapsed into a single column, each taking up 100% of the horizontal space.
 * @property {string} side=left Which element to treat as the sidebar (all values but "left" are considered "right")
 * @property {string} sideWidth Represents the width of the sidebar _when_ adjacent. If not set (`null`) it defaults to the sidebar's content width
 * @property {string} contentMin=50% A CSS **percentage** value. The minimum width of the content element in the horizontal configuration
 * @property {string} space=var(--s1) A CSS margin value representing the space between the two elements
 * @property {boolean} noStretch=false Make the adjacent elements adopt their natural height
 *
 * The first child of this component needs to be div so that we support gutter spacing. (Todo add prop for this.)
 */
export default function Sidebar({
  side = 'left',
  sideWidth = null,
  contentMin = '50%',
  space,
  customSpacing,
  noStretch = false,
  children,
  style = {},
  ...rest
}) {
  if (!contentMin && !contentMin.includes('%')) {
    console.warn(
      'The value for each <sidebar-l> `contentMin` property should be a percentage. Otherwise overflow is likely to occur'
    );
  }

  return space || customSpacing ? (
    <SidebarWithGuttersStyled
      space={space}
      customSpacing={customSpacing}
      contentMin={contentMin}
      noStretch={noStretch}
      side={side}
      sideWidth={sideWidth}
      style={{
        ...style,
        [SIDEBAR_SPACING]: space ? `var(--s${space})` : customSpacing,
      }}
      {...rest}
    />
  ) : (
    <SidebarStyled
      contentMin={contentMin}
      noStretch={noStretch}
      side={side}
      sideWidth={sideWidth}
      style={style}
      {...rest}
    >
      {children}
    </SidebarStyled>
  );
}
