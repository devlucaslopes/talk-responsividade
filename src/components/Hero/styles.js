import styled, { css } from "styled-components";

import * as ContainerStyles from "../Container/styles";

export const Background = styled.main`
  ${({ theme }) => css`
    height: 80rem;
    background: url("./imgs/bg-hero.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: rgba(15, 14, 14, 0.6);
    }

    ${ContainerStyles.Content} {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 1;
      position: relative;
    }
  `}
`;

export const Headline = styled.div`
  ${({ theme }) => css`
    max-width: 60rem;

    h1 {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.sizes.huge};
      text-transform: uppercase;
    }

    p {
      margin-top: ${theme.spacings.medium};
      font-size: ${theme.fonts.sizes.large};
    }
  `}
`;
