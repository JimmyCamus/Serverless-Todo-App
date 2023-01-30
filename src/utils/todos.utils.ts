import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Todo } from "../lib/types/todo.types";

export const parseTodoData = (
  doc: QueryDocumentSnapshot<DocumentData>
): Todo => ({
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
});
