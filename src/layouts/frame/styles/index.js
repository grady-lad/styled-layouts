import styled from 'styled-components';

// The aspect ratio height of the frame.
export const FRAME_RATIO_HEIGHT = '--frame-ratio-heigth';

// The aspect ratio width of the frame.
export const FRAME_RATIO_WIDTH = '--frame-ratio-width';

const FrameStyled = styled.div`
  padding-bottom: calc(
    var(${FRAME_RATIO_HEIGHT}) / var(${FRAME_RATIO_WIDTH}) * 100%
  );
  position: relative;

  > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > img,
  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default FrameStyled;
