import {
  collection,
  DocumentData,
  onSnapshot,
  Query,
  query,
  where,
} from "firebase/firestore";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CreateTodo, EditTodo, GetTodosByUser } from "../api/todo.api";
import { fireStore } from "../lib/config/firebase.config";
import { useUser } from "../lib/contexts/user.context";
import { Team } from "../lib/types/team.types";
import { Todo } from "../lib/types/todo.types";

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
    const q = query(
      collection(fireStore, "todos"),
      where("user.email", "==", user.email),
      where("enabled", "==", true)
    );
    firebaseListener(setTodos, q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { todos, user };
};

export const useGetTodosByTeam = (team: Team) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { user } = useUser();
  useEffect(() => {
    const handleGetTodos = async () => {
      const data = await GetTodosByUser(user);
      setTodos(data);
    };
    handleGetTodos();
    const q = query(
      collection(fireStore, "teams"),
      where("users", "array-contains", {
        username: user.username,
        photoURL: user.photoURL,
      })
    );
    firebaseListener(setTodos, q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { todos, user };
};

const firebaseListener = (
  setTodo: Dispatch<SetStateAction<Todo[]>>,
  query: Query<DocumentData>
) => {
  onSnapshot(query, (querySnapshot) => {
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
      teamId: doc.data().teamId,
    }));
    const sortedTodos = todos.sort((a, b) =>
      a.createdAt.getTime() < b.createdAt.getTime() ? -1 : 1
    );
    setTodo(sortedTodos);
  });
};

export const useEditTodo = (todo: Todo) => {
  const [todoTitle, setTodoTitle] = useState<string>(todo.title);
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.completed);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleEditTodo = async (type: "edit" | "completed" | "delete") => {
    setIsLoading(true);
    switch (type) {
      case "completed":
        await EditTodo(todo.uid as string, { completed: !isCompleted });
        setIsCompleted(!isCompleted);
        break;

      case "delete":
        setIsCompleted(false);
        await EditTodo(todo.uid as string, { enabled: false });
        break;

      case "edit":
        if (todoTitle === todo.title) {
          break;
        }
        await EditTodo(todo.uid as string, { title: todoTitle });
        break;

      default:
        break;
    }
    setIsLoading(false);
  };

  return { todoTitle, setTodoTitle, isCompleted, isLoading, handleEditTodo };
};
