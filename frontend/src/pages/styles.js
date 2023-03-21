import styled from "styled-components";

export const StyledTodoList = styled.ul`
  background-color: #333533;
  margin: 1rem 0 1rem 0;
  border-radius: 2rem;
  font-size: 1.5rem;
  padding: 0 1rem 0rem 1rem;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const StyledTodo = styled.li`
  padding: 1rem 0;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  transition: 500ms;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.yellow};
  }
`;

export const StyledInfo = styled.li`
  text-align: center;
  padding: 1rem;
  opacity: 0.5;
  font-family: "Nunito", sans-serif;
`;

export const StyledSeparator = styled.hr`
  border: 0;
  margin: 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.primary.gray};
`;
