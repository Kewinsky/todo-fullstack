import styled from "styled-components";

export const StyledHeader = styled.h1`
  text-align: center;
  margin-top: 2rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary.yellow};
  font-family: "Nunito", sans-serif;
`;
