import {
  StyledSeparator,
  StyledTodoList,
  StyledInfo,
} from "../../pages/styles";
import { Todo } from "../todo/Todo";
export const TodoList = ({ setTodos, todos }) => {
  return (
    <StyledTodoList>
      <StyledInfo className={`${todos.length === 0 ? "" : "disable"}`}>
        free_time!
      </StyledInfo>

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
