import CoverStyled, { COVER_SPACING } from './styles';

/**
 * @module Cover
 * @description
 * A custom element for covering a block-level element horizontally,
 * with a max-width value representing the typographic measure
 * @property {string} centeredSelector=h1 A simple selector such an element or class selector, representing the centered (main) element in the cover
 * @property {string} space=var(--s1) The minimum space between and around all of the child elements
 * @property {string} minHeight=100vh The minimum height for the **Cover**
 * @property {boolean} hasPadding=Whether or not padding should be applied. This will take the space val if tuee
 */
export default function Cover({
  centeredSelector,
  minHeight,
  space = 1,
  customSpacing,
  hasPadding = false,
  style,
  children,
  ...rest
}) {
  return (
    <CoverStyled
      style={{
        [COVER_SPACING]: customSpacing || `var(--s${space})`,
        ...style,
      }}
      centeredSelector={centeredSelector}
      hasPadding={hasPadding}
      minHeight={minHeight}
      {...rest}
    >
      {children}
    </CoverStyled>
  );
}
