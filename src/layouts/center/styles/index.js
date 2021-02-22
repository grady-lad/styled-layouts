import styled, { css } from 'styled-components';

/** Defines the max with of the centered layout */
export const CENTER_MAX_WIDTH = '--centerMaxWidth';

const CenterStyled = styled.div`
  display: block;
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  max-width: var(${CENTER_MAX_WIDTH});
  ${({ gutters }) =>
    gutters
      ? css`
          padding-left: ${gutters};
          padding-right: ${gutters};
        `
      : ''}
  ${({ andText }) =>
    andText
      ? css`
          text-align: center;
        `
      : ''}
  ${({ intrinsic }) =>
    intrinsic
      ? css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `
      : ''}
`;

export default CenterStyled;
