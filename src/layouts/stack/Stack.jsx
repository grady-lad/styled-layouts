import StackStyled, { STACK_SPACING } from './styles';

/**
 * @module Stack
 * @description
 * A custom element for injecting white space (margin) between flow
 * (block) elements along a vertical axis.
 * @property {number} space= A number which corresponds the application spacing vars.
 * @property {boolean} recursive=false Whether the spaces apply recursively (i.e. regardless of nesting level)
 * @property {number} splitAfter=null The element after which to _split_ the stack with an auto margin
 * @property {string} customSpacing=Custom spacing value which will be used as the margin between the items within the stack.
 */
export default function Stack({
  children,
  recursive,
  space = 1,
  customSpacing,
  splitAfter,
  style = {},
  ...rest
}) {
  return (
    <StackStyled
      {...rest}
      style={{ ...style, [STACK_SPACING]: customSpacing || `var(--s${space})` }}
      recursive={recursive}
      splitAfter={splitAfter}
    >
      {typeof children === 'function'
        ? children({
            stackSpace: (spaceOveride) => ({
              [STACK_SPACING]: spaceOveride,
            }),
          })
        : children}
    </StackStyled>
  );
}
