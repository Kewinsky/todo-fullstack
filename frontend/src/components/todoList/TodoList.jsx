import { StyledSeparator, StyledTodoList } from "../../pages/styles";
import { Todo } from "../todo/Todo";
export const TodoList = ({ setTodos, todos }) => {
  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <>
          <Todo
            setTodos={setTodos}
            todo={todo}
            todos={todos}
            key={todo.id}
            text={todo.text}
            id={todo.id}
          />
          <StyledSeparator />
        </>
      ))}
    </StyledTodoList>
  );
};
