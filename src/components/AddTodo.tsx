/* eslint-disable react-hooks/rules-of-hooks */
import { FormEvent, useState } from "react";
import { useTodos } from "../store/Todos";

const addTodo = (): JSX.Element => {
  const [todo, setTodo] = useState<string>("");
  const {handleAddToDo} = useTodos();

  const handelFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={handelFormSubmit}>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default addTodo;
