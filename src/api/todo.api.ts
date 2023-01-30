import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { fireStore } from "../lib/config/firebase.config";
import { Team } from "../lib/types/team.types";
import { Todo } from "../lib/types/todo.types";
import { User } from "../lib/types/user.types";
import { parseTodoData } from "../utils/todos.utils";

export const CreateTodo = async (
  title: string,
  user: User
): Promise<boolean> => {
  const todoData = {
    title,
    createdAt: Timestamp.fromDate(new Date()),
    user: {
      username: user.username,
      email: user.email,
    },
    enabled: true,
    completed: false,
    teamId: "",
  };

  try {
    const collectionRef = collection(fireStore, "todos");
    await addDoc(collectionRef, todoData);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const GetTodosByUser = async (user: User) => {
  const q = query(
    collection(fireStore, "todos"),
    where("user.email", "==", user.email),
    where("enabled", "==", true),
    where("teamId", "==", "")
  );
  const querySnapshot = await getDocs(q);

  const todos: Todo[] = querySnapshot.docs.map(parseTodoData);

  return todos;
};

export const EditTodo = async (uid: string, editValue: any) => {
  const docRef = doc(fireStore, "todos", uid);
  await updateDoc(docRef, editValue);
};

export const CreateTodoByTeam = async (
  title: string,
  user: User,
  teamId: string
): Promise<boolean> => {
  const todoData = {
    title,
    createdAt: Timestamp.fromDate(new Date()),
    user: {
      username: user.username,
      email: user.email,
    },
    enabled: true,
    completed: false,
    teamId,
  };

  try {
    const collectionRef = collection(fireStore, "todos");
    await addDoc(collectionRef, todoData);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const GetTodosByTeam = async (team: Team) => {
  const q = query(
    collection(fireStore, "todos"),
    where("teamId", "==", team.id),
    where("enabled", "==", true)
  );
  const querySnapshot = await getDocs(q);

  const todos: Todo[] = querySnapshot.docs.map(parseTodoData);

  return todos;
};
