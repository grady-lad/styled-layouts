import styled, { css } from 'styled-components';

/** Gutter spacing for the sidebar. */
export const SIDEBAR_SPACING = '--sidebar-spacing';

const baseStyles = css`
  /* Need to comment this */
  overflow: hidden;
`;

const sideBarWrapperBaseStyles = css`
  display: flex;
  flex-wrap: wrap;
  height: inherit;

  ${({ noStrech }) =>
    noStrech &&
    css`
      align-items: flex-start;
    `};
`;

const sidebarBaseStyles = css`
  flex-grow: 1;
  /** Apply side width of the sidebar. (Remember that basis is the recommened width and is not fixed).*/
  ${({ sideWidth }) =>
    sideWidth &&
    css`
      flex-basis: ${sideWidth};
    `}
`;

const mainContentStyles = css`
  /** Override flex basis set within the sidebarBaseStyles. */
  flex-basis: 0;
  /** Here we are telling the browser that this content should take up space as possible (999px) */
  flex-grow: 999;
  /** This decides when to start wrapping. So if contentMin is < 50% a wrap will occur. */
  ${({ contentMin }) =>
    css`
      min-width: calc(${contentMin});
    `}
`;

export const SidebarStyled = styled.div`
  ${baseStyles}
  ${sideBarWrapperBaseStyles}

  > * {
    ${sidebarBaseStyles}
  }

  /* Determines if the sidebar appear left or right. */
  > ${({ side }) => (side !== 'left' ? ':first-child' : ':last-child')} {
    ${mainContentStyles}
  }
`;

export const SidebarWithGuttersStyled = styled.div`
  ${baseStyles}

  > * {
    ${sideBarWrapperBaseStyles}

    /* Apply negative marins to allow spacing between items */
    margin: calc(var(${SIDEBAR_SPACING})) / 2 * -1);
  }

  > * > * {
    ${sidebarBaseStyles}
    /* Apply negative marins to allow spacing between items */
    margin: calc(var(${SIDEBAR_SPACING}) / 2);
  }

  /* Determines if the sidebar appear left or right. */
  > * > ${({ side }) => (side !== 'left' ? ':first-child' : ':last-child')} {
    ${mainContentStyles}
    /* Take the negative margin into consideration if spacing is applied */
    ${({ contentMin }) =>
      css`
        min-width: calc(${contentMin} - var(${SIDEBAR_SPACING}));
      `}
  }
`;
