import styled, { css } from "styled-components";

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacings.medium};
  `}
`;

export const BurguerItem = styled.li`
  ${({ theme }) => css`
    img {
      width: 100%;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: ${theme.spacings.medium} 0;

      strong,
      span {
        color: ${theme.colors.primary};
      }

      strong {
        font-size: ${theme.fonts.sizes.large};
      }
    }
  `}
`;
