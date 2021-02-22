import styled, { css } from 'styled-components';

/** The margin given between each items within the stack. */
export const STACK_SPACING = '--stack-spacing';

const StackStyled = styled.div`
  /* Reset styles (This could be done globally too.) */
  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${({ recursive }) => {
    const selector = recursive ? `` : `>`;

    return css`
      ${selector} * + * {
        margin-top: var(${STACK_SPACING});
      }
    `;
  }}

  ${({ splitAfter }) =>
    splitAfter
      ? css`
          :only-child {
            height: 100%;
          }

          > :nth-child(${splitAfter}) {
            margin-bottom: auto;
          }
        `
      : ''}
`;

export default StackStyled;
