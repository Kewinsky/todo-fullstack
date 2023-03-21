import { StyledInputArea, StyledButton, StyledInput } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const InputArea = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <StyledInputArea>
      <StyledInput
        value={inputText}
        onChange={inputTextHandler}
        placeholder="cook dinner 🍜"
      />
      <StyledButton onClick={submitTodoHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </StyledButton>
    </StyledInputArea>
  );
};
