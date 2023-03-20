import { StyledInputArea, StyledButton, StyledInput } from "./styles";

export const InputArea = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <StyledInputArea>
      <StyledInput placeholder="cook dinner 🍜" />
      <StyledButton onClick={handleButtonClick}>Add</StyledButton>
    </StyledInputArea>
  );
};
