import styled, { css } from "styled-components";

import * as ContainerStyles from "../Container/styles";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.xlarge} 0;

    ${ContainerStyles.Content} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `}
`;

export const Logo = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xlarge};
    font-weight: 700;
    color: ${theme.colors.primary};
  `}
`;

export const Navigation = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
  `}
`;

export const NavigationMobile = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
  `}
`;
