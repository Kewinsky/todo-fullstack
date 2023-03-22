import { StyledTodo, StyledButton, StyledWrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const Todo = ({ todo, todos, setTodos }) => {
  const loadTodos = async () => {
    const result = await axios.get("http://localhost:8080/todos/allTodos");
    setTodos(result.data);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8080/todos/deleteTodoById/${id}`);
    loadTodos();
  };

  const completeHandler = async (id) => {
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

    // await axios.put(`http://localhost:8080/todos/updateTodoById/${id}`, todo);
    // loadTodos();

    // axios
    //   .put(`http://localhost:8080/todos/updateTodoById/${id}`, todo)
    //   .then(() => loadTodos())
    //   .then(() => {
    //     console.log("todo updated.");
    //   });
  };
  return (
    <StyledWrapper>
      <StyledTodo
        onClick={completeHandler}
        className={`${todo.completed ? "complete" : ""}`}
      >
        {todo.title}
      </StyledTodo>
      <StyledButton onClick={() => deleteTodo(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </StyledButton>
    </StyledWrapper>
  );
};
