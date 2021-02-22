import styled, { css } from 'styled-components';

// The space between each child element, and between the child elements and the scrollbar
export const REEL_SPACING = '--reel-spacing';

// The width of each child element
export const REEL_ITEM_WIDTH = '--reel-item-width';

const ReelStyled = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  /* Todo make these props */
  scrollbar-color: var(--color-light) var(--color-dark);

  * {
    flex: 0 0 var(${REEL_ITEM_WIDTH});
  }

  > * + * {
    margin-left: var(${REEL_SPACING});
  }

  > img {
    height: 100%;
    flex-basis: auto;
    width: auto;
  }

  ::-webkit-scrollbar {
    height: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--color-dark);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-dark);
    background-image: linear-gradient(
      var(--color-dark) 0,
      var(--color-dark) 0.25rem,
      var(--color-light) 0.25rem,
      var(--color-light) 0.75rem,
      var(--color-dark) 0.75rem
    );
  }

  ${({ overflowing, noBar }) =>
    overflowing && !noBar
      ? css`
          padding-bottom: var(${REEL_SPACING});
        `
      : ''}

  ${({ noBar }) =>
    !noBar &&
    css`
      scrollbar-width: none;
      ::-webkit-scrollbar {
        display: none;
      }
    `}
`;

export default ReelStyled;
