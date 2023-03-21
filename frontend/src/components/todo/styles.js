import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.yellow};
  }
`;

export const StyledTodo = styled.li`
  padding: 0.75rem 0;
  font-family: "Nunito", sans-serif;
  transition: 500ms;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.yellow};
  }
`;

export const StyledButton = styled.button`
  font-family: "Nunito", sans-serif;
  cursor: pointer;
  height: 3rem;
  width: 3.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.lightgray};
  background-color: ${({ theme }) => theme.colors.secondary.gray};
  border: none;
  border-radius: 2rem;
  transition: 300ms;
  display: block;
  position: absolute;
  right: 0px;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.yellow};
  }
`;
