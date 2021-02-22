import styled, { css } from 'styled-components';

/** The margin given between each items within the stack. */
export const CLUSTER_SPACING = '--cluster-spacing';

const ClusterStyled = styled.div`
  /* ↓ Suppress horizontal scrolling caused by
  the negative margin in some circumstances */
  overflow: hidden;

  > * {
    display: flex;
    flex-wrap: wrap;
    ${({ justify, align }) => css`
      justify-content: ${justify};
      align-items: ${align};
    `}
    /* ↓ multiply by -1 to negate the halved value */
    margin: calc(var(${CLUSTER_SPACING}) / 2 * -1);
  }

  > * > * {
    /* ↓ half the value, because of the 'doubling up' */
    margin: calc(var(${CLUSTER_SPACING}) / 2);
  }
`;

export default ClusterStyled;
