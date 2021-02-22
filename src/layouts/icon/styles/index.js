import styled from 'styled-components';

// The space between the text and the icon. If null, natural word spacing is preserved
export const ICON_SPACE = '--icon-space';

const IconStyled = styled.div`
  display: inline-flex;
  align-items: baseline;

  > svg {
    margin-inline-end: var(${ICON_SPACE});
  }
`;

export default IconStyled;
