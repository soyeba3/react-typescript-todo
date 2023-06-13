import { SingleTodoType } from "../types";

const Todo = ({ todo, handleDeleteTodo }: SingleTodoType) => {
  const deleteTodo = (id: number) => {
    handleDeleteTodo(id);
  };

  return (
    <div className="bg-gray-300 flex justify-between m-2 px-2 py-1">
      <div>{todo.name}</div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-400 px-2 rounded-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
