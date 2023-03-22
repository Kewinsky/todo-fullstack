import { StyledInputArea, StyledButton, StyledInput } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import axios from "axios";

export const InputArea = ({ inputText, setInputText, todos, setTodos }) => {
  const loadTodos = async () => {
    const result = await axios.get("http://localhost:8080/todos/allTodos");
    setTodos(result.data);
  };

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
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 100),
      },
    ]);

    setInputText("");

    const todo = { title: inputText, completed: false };

    axios
      .post("http://localhost:8080/todos/addTodo", todo)
      .then(() => loadTodos())
      .then(() => {
        console.log("todo added.");
      });
  };

  useEffect(() => {
    loadTodos();
  }, []);

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
