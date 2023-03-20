import styled from "styled-components";

export const StyledInputArea = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  height: 3rem;
  width: 100%;
  border-radius: 2rem 0 0 2rem;
  padding: 0 1rem;
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.secondary.gray};
  border: none;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.primary.gray};
`;

export const StyledButton = styled.button`
  font-family: "Nunito", sans-serif;
  cursor: pointer;
  height: 3rem;
  width: 5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  border: none;
  border-radius: 0 2rem 2rem 0;
  transition: 300ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.gray};
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;
