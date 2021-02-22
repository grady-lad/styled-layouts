import styled, { css } from 'styled-components';

// The minimum space between and around the child elements
export const COVER_SPACING = '--cover-spacing';

const CoverStyled = styled.div`
  display: flex;
  flex-direction: column;
  ${({ minHeight }) =>
    css`
      min-height: ${minHeight};
    `}
  ${({ hasPadding }) =>
    hasPadding &&
    css`
      padding: var(${COVER_SPACING});
    `}

  /* Apply equal spacing to all child elements. */
   > * {
    margin-top: var(${COVER_SPACING});
    margin-bottom: var(${COVER_SPACING});
  }

  /** BONUS TIP: We are only setting margin top/bottom rather than the shorthand "margin: 1rem 0;"
       By making the horizontal margins 0, we might be unduly undoing styles applied or inherited by an ancestor component.
      Only set what you need to set.
    */
  ${({ centeredSelector }) =>
    /** Use cascading functionality to reset the margins on the top and bottom elements. */
    centeredSelector &&
    css`
      > :first-child:not(${centeredSelector}) {
        margin-top: 0;
      }

      > :last-child:not(${centeredSelector}) {
        margin-bottom: 0;
      }

      /* This will push the elements above and below the centered element so that
         the centeredSelector element will become centered.
         */
      > ${centeredSelector} {
        margin-top: auto;
        margin-bottom: auto;
      }
    `}
`;

export default CoverStyled;
