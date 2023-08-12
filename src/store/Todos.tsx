/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode, createContext, useContext, useState } from "react";

export type TodosProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  compleated: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddToDo: (task: string) => void;
};

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddToDo = (task: string) => {
    setTodos(prev => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          compleated: false,
          createdAt: new Date()
        },
        ...prev
      ];
      console.log("my previous data is :" + prev);
      console.log(newTodos);
      return newTodos;
    });
  };

  return;
  <todosContext.Provider value={{ todos, handleAddToDo }}>
    {children}
  </todosContext.Provider>;
};

//Consumer

export const useTodos = () => {
  const todoConsumer = useContext(todosContext);
  if (!todoConsumer) {
    throw new Error("main.tsx me jake App ko todosConsumer me dalde bhai");
  }
  return todoConsumer;
};
