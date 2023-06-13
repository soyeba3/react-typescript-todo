import { ChangeEvent, FormEvent, useState } from "react";
import { AddNewTodoType } from "../types";

const AddTodo = ({ addNewTodo }: AddNewTodoType) => {
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      name: input,
    };
    addNewTodo(newTodo);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="m-3 flex justify-center gap-2">
      <input
        onChange={handleChange}
        className="border-gray-400 w-1/2 sm:w-full border-[1px] outline-none rounded-sm px-2"
        type="text"
        value={input}
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-1 rounded-sm"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
