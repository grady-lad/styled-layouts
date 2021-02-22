import BoxStyled, {
  BOX_PADDING,
  BOX_BORDER_WIDTH,
  BOX_BORDER_COLOR,
} from './styles';

/**
 * @module Box
 * @description
 * A custom element for generic boxes/containers
 * @property {number} padding=var(--s1) A CSS `padding` value
 * @property {string} borderWidth=var(--border-thin) A CSS `border-width` value
 * @property {string} customPadding=Override the spacing within the application to apply custom padding.
 */
export default function Box({
  children,
  borderColor = 'transparent',
  borderWidth = '1px',
  padding = 1,
  customPadding,
  isFullBox = true,
  style = {},
  ...rest
}) {
  return (
    <BoxStyled
      {...rest}
      style={{
        [BOX_PADDING]: customPadding || `var(--s${padding})`,
        [BOX_BORDER_WIDTH]: borderWidth || `var(--s-1)`,
        [BOX_BORDER_COLOR]: borderColor,
        ...style,
      }}
      isFullBox={isFullBox}
    >
      {children}
    </BoxStyled>
  );
}
