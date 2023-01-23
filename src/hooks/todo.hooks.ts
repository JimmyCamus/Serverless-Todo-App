import { FormEvent, useState } from "react";
import { CreateTodo } from "../api/todo.api.ts";
import { useUser } from "../lib/contexts/user.context";

export const useCreateTodo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>("");
  const userContext = useUser();
  const handleCreateTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await CreateTodo(todoTitle, userContext.user);
    setIsLoading(false);
  };

  return { isLoading, setTodoTitle, handleCreateTodo };
};
