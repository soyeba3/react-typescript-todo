import { TodosType } from "../types";
import Todo from "./Todo";

const Todos = ({ todos, handleDeleteTodo }: TodosType) => {
  return (
    <div className="w-2/3 bg-gray-100 p-5 sm:w-1/3">
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
      ))}
    </div>
  );
};

export default Todos;
