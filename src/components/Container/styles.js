import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.layout.container};
    margin: 0 auto;
  `}
`;
