import styled, { css } from 'styled-components';

/** A CSS width value (representing the 'container breakpoint') */
export const SWITCHER_PARENT_WIDTH = '--switcher-parent-width';

/** A CSS margin value (Flex gap before it is implemented) */
export const SWITCHER_SPACE = '--switcher-space';

const SwitcherStyled = styled.div`
  display: block;

  > * {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: calc((var(${SWITCHER_SPACE}) / 2) * -1);
  }

  > * > * {
    /* When the content wraps it will grow to length of the screen for the single column/row. */
    flex-grow: 1;
    flex-basis: calc(
      (var(${SWITCHER_PARENT_WIDTH}) - (100% - var(${SWITCHER_SPACE}))) * 999
    );
    margin: calc(var(${SWITCHER_SPACE}) / 2);
  }

  /** When the limit is reached then the wrapping will kick in (Single column/row layout) */
  ${({ limit }) =>
    limit &&
    css`
      > * > :nth-last-child(n + ${limit}),
      > * > :nth-last-child(n + ${limit}) ~ * {
        flex-basis: 100%;
      }
    `}
`;

export default SwitcherStyled;
