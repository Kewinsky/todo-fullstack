import styled from "styled-components";

export const StyledSeparator = styled.hr`
  border: 0;
  margin: 1rem 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.secondary.gray};
`;
