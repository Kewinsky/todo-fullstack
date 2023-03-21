import { StyledTodo, StyledButton, StyledWrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <StyledWrapper>
      <StyledTodo
        onClick={completeHandler}
        className={`${todo.completed ? "complete" : ""}`}
      >
        {text}
      </StyledTodo>
      <StyledButton onClick={deleteHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </StyledButton>
    </StyledWrapper>
  );
};
