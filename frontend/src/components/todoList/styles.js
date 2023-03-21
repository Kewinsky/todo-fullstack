import styled from "styled-components";

export const StyledTodoList = styled.ul`
  background-color: #333533;
  margin: 1rem 0 1rem 0;
  border-radius: 2rem;
  font-size: 1.5rem;
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.lightGray};
`;
