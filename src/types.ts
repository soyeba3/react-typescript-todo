export type TodoType = {
  id: number;
  name: string;
};

export type TodosType = {
  todos: TodoType[];
  handleDeleteTodo: (id: number) => void;
};

export type SingleTodoType = {
  todo: TodoType;
  handleDeleteTodo: (id: number) => void;
};

export type AddNewTodoType = {
  addNewTodo: (newtodo: TodoType) => void;
};
