import styled from "styled-components";
import { css } from "styled-components";

export const CustomTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.mainBg};
  `}
`;
