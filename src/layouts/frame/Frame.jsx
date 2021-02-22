import { useEffect, useState } from 'react';
import FrameStyled, { FRAME_RATIO_WIDTH, FRAME_RATIO_HEIGHT } from './styles';

/**
 * @module Frame
 * @description
 * A custom element for augmenting image ratios
 * @property {string} ratio=16:9 The element's aspect ratio
 */

export default function Frame({ ratio = '16:9', style, children, ...rest }) {
  const [{ width, height }, setFrameRatio] = useState(() => {
    const [ratioWidth, ratioHeight] = ratio.split(':');

    return { width: ratioWidth, height: ratioHeight };
  });

  useEffect(() => {
    const [ratioWidth, ratioHeight] = ratio.split(':');

    if (width !== ratioWidth || ratioHeight !== height) {
      setFrameRatio({ width, ratioWidth, height, ratioHeight });
    }
  }, [ratio, width, height]);
  return (
    <FrameStyled
      {...rest}
      style={{
        [FRAME_RATIO_HEIGHT]: height,
        [FRAME_RATIO_WIDTH]: width,

        ...style,
      }}
    >
      {children}
    </FrameStyled>
  );
}
