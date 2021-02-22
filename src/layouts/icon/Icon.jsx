import IconStyled, { ICON_SPACE } from './styles';

/**
 * @module icon-l
 * @description
 * A custom element for inline icon insertion
 * @property {string} space=null The space between the text and the icon. If null, natural word spacing is preserved
 * @property {string} label=null Turns the element into an image in assistive technologies and adds an aria-label of the value
 */
export default function Icon({
  space = null,
  label = null,
  children,
  style,
  ...rest
}) {
  return (
    <IconStyled
      {...rest}
      {...(label ? { 'aria-label': label, role: 'img' } : {})}
      style={{ ...style, [ICON_SPACE]: space }}
    >
      {children}
    </IconStyled>
  );
}
