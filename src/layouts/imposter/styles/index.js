import styled, { css } from 'styled-components';

const ImposterStyled = styled.div`
  position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ breakout, margin }) =>
    breakout
      ? css`
          max-width: calc(100% - (${margin} * 2));
          max-height: calc(100% - (${margin} * 2));
          overflow: auto;
        `
      : ''}
`;

export default ImposterStyled;
