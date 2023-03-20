import styled from "styled-components";

export const StyledMainContent = styled.div`
  background-color: #333533;
  margin: 1rem 0 1rem 0;
  border-radius: 2rem;
  font-size: 1.5rem;
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const StyledTodo = styled.p`
  padding: 1rem 0;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  transition: 500ms;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.yellow};
  }
`;
