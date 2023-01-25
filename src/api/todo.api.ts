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
    where("enabled", "==", true)
  );
  const querySnapshot = await getDocs(q);

  const todos: Todo[] = querySnapshot.docs.map((doc) => ({
    uid: doc.id,
    createdAt: new Date(doc.data().createdAt.seconds * 1000),
    enabled: doc.data().enabled,
    title: doc.data().title,
    user: { email: doc.data().user.email, username: doc.data().user.username },
    completed: doc.data().completed,
  }));

  return todos;
};

export const EditTodo = async (uid: string, editValue: any) => {
  const docRef = doc(fireStore, "todos", uid);
  await updateDoc(docRef, editValue);
};

export const CreateTodoByTeam = async (
  title: string,
  user: User,
  teamId: number
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

  const todos: Todo[] = querySnapshot.docs.map((doc) => ({
    uid: doc.id,
    createdAt: new Date(doc.data().createdAt.seconds * 1000),
    enabled: doc.data().enabled,
    title: doc.data().title,
    user: { email: doc.data().user.email, username: doc.data().user.username },
    completed: doc.data().completed,
    teamId: doc.data().teamId,
  }));

  return todos;
};
