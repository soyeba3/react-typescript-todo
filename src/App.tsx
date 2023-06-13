import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { todosData } from "./dummyData";
import { TodoType } from "./types";

function App() {
  const [todos, setTodos] = useState(todosData);

  const handleDeleteTodo = (id: number | string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const addNewTodo = (newTodo: TodoType) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <h3 className="p-3 text-lg font-bold">Todo App</h3>
      <div className=" flex flex-col items-center">
        <AddTodo addNewTodo={addNewTodo} />
        <Todos handleDeleteTodo={handleDeleteTodo} todos={todos} />
      </div>
    </>
  );
}

export default App;
