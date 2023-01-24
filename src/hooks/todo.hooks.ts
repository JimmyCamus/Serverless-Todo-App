import { collection, onSnapshot, query, where } from "firebase/firestore";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CreateTodo, EditTodo, GetTodosByUser } from "../api/todo.api.ts";
import { fireStore } from "../lib/config/firebase.config";
import { useUser } from "../lib/contexts/user.context";
import { Todo } from "../lib/types/todo.types";
import { User } from "../lib/types/user.types";

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

export const useGetTodosByUser = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { user } = useUser();
  useEffect(() => {
    const handleGetTodos = async () => {
      const data = await GetTodosByUser(user);
      setTodos(data);
    };
    handleGetTodos();
    firebaseListener(setTodos, user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { todos, user };
};

const firebaseListener = (
  setTodo: Dispatch<SetStateAction<Todo[]>>,
  user: User
) => {
  const q = query(
    collection(fireStore, "todos"),
    where("user.email", "==", user.email),
    where("enabled", "==", true)
  );
  onSnapshot(q, (querySnapshot) => {
    const todos = querySnapshot.docs.map((doc) => ({
      uid: doc.id,
      createdAt: new Date(doc.data().createdAt.seconds * 1000),
      enabled: doc.data().enabled,
      title: doc.data().title,
      user: {
        email: doc.data().user.email,
        username: doc.data().user.username,
      },
      completed: doc.data().completed,
    }));
    const sortedTodos = todos.sort((a, b) =>
      a.createdAt.getTime() < b.createdAt.getTime() ? -1 : 1
    );
    setTodo(sortedTodos);
  });
};

export const useEditTodo = (todo: Todo) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.completed);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleEditTodo = async (type: "edit" | "completed" | "delte") => {
    setIsLoading(true);
    switch (type) {
      case "completed":
        await EditTodo(todo.uid as string, { completed: !isCompleted });
        setIsCompleted(!isCompleted);
        break;

      default:
        break;
    }
    setIsLoading(false);
  };

  return { isCompleted, isLoading, handleEditTodo };
};
