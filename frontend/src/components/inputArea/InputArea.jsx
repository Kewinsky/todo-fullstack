import { StyledInputArea, StyledButton, StyledInput } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const InputArea = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return false;
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <StyledInputArea>
      <StyledInput
        required="required"
        maxLength={18}
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
