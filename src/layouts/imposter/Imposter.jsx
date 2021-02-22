import ImposterStyled from './styles';

/**
 * @module Imposter
 * @description
 * A custom element to be positioned absolutely over any element
 * @property {boolean} breakout=false Whether the element is allowed to break out of the container over which it is positioned
 * @property {string} margin=0 The minimum space between the element and the inside edges of the positioning container over which it is placed (where `breakout` is not applied)
 * @property {boolean} fixed=false Whether to position the element relative to the viewport
 */
export default function Imposter({
  breakout = false,
  margin = '0px',
  fixed = false,
  children,
  ...rest
}) {
  return (
    <ImposterStyled {...rest} breakout={breakout} fixed={fixed} margin={margin}>
      {children}
    </ImposterStyled>
  );
}
