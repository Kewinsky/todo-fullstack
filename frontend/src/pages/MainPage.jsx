import { InputArea } from "../components/inputArea/InputArea";
import { useState } from "react";
import { TodoList } from "../components/todoList/TodoList";

export const MainPage = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
      <InputArea
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
};
