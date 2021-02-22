import CenterStyled, { CENTER_MAX_WIDTH } from './styles';

/**
 * @module Center
 * @description
 * A custom element for centering a block-level element horizontally,
 * with a max-width value representing the typographic measure
 * @property {string} max=var(--centerMaxWidth) A CSS `max-width` value
 * @property {boolean} andText=false Center align the text too (`text-align: center`)
 * @property {boolean} gutters=0 The minimum space on either side of the content
 * @property {boolean} intrinsic=false Center child elements based on their content width
 */
export default function Center({
  max,
  andText = false,
  gutters = 0,
  intrinsic = false,
  children,
  ...rest
}) {
  return (
    <CenterStyled
      style={{ [CENTER_MAX_WIDTH]: max }}
      andText={andText}
      gutters={gutters}
      intrinsic={intrinsic}
      {...rest}
    >
      {children}
    </CenterStyled>
  );
}
