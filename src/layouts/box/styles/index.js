import styled, { css } from 'styled-components';

/** The amount of padding applied to the box */
export const BOX_PADDING = '--box-padding';

/** The width of the border applied to the box. */
export const BOX_BORDER_WIDTH = '--box-border-width';

/** The border/outline color applied to the box.. */
export const BOX_BORDER_COLOR = '--box-border-color';

const BoxStyled = styled.div`
  display: block;
  padding: var(${BOX_PADDING});
  outline: var(${BOX_BORDER_WIDTH}) solid var(${BOX_BORDER_COLOR});
  ${({ isFullBox }) =>
    isFullBox &&
    css`
      outline-offset: calc(var(${BOX_BORDER_WIDTH}) * -1);
    `}
`;

export default BoxStyled;
