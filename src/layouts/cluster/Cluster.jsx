import ClusterStyled, { CLUSTER_SPACING } from './styles';

/**
 * @module cluster-l
 * @description
 * A custom element for grouping items, with control over the margin between them
 * @property {string} justify=center A CSS `justify-content` value
 * @property {string} align=center A CSS `align-items` value
 * @property {string} space=var(--s1) A CSS `margin` value. The minimum space between the clustered child elements.
 */
export default function Cluster({
  justify = 'flex-start',
  align = 'flex-start',
  space = 1,
  customSpacing,
  children,
  style = {},
  ...rest
}) {
  return (
    <ClusterStyled
      {...rest}
      style={{
        [CLUSTER_SPACING]: customSpacing || `var(--s${space})`,
        ...style,
      }}
      justify={justify}
      align={align}
    >
      {children}
    </ClusterStyled>
  );
}
