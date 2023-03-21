import styled from "styled-components";

export const StyledInputArea = styled.form`
  display: flex;
  position: relative;
`;

export const StyledInput = styled.input`
  height: 3rem;
  width: 100%;
  border-radius: 2rem;
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
  width: 3.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  border: none;
  border-radius: 2rem;
  transition: 300ms;
  display: block;
  position: absolute;
  right: 0px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.gray};
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;
