import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireStore } from "../lib/config/firebase.config";
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
