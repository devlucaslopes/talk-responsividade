import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;
  `}
`;

export const Heading = styled.div`
  ${({ theme }) => css`
    h2,
    p {
      text-align: center;
    }

    h2 {
      font-size: ${theme.fonts.sizes.xlarge};
      color: ${theme.colors.primary};
    }

    p {
      margin: ${theme.spacings.small} 0 ${theme.spacings.medium} 0;
    }
  `}
`;
