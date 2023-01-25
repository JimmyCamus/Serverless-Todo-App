import {
  doc,
  DocumentData,
  getDocs,
  Query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { fireStore } from "../lib/config/firebase.config";
import { Team } from "../lib/types/team.types";
import { User } from "../lib/types/user.types";

export const CreateTeam = async (user: User) => {
  const teamId = Math.floor(
    Math.random() * (10000000000 - 1 + 1) + 1
  ).toString();
  const teamData: Team = {
    id: teamId,
    users: [{ username: user.username, photoURL: user.photoURL }],
  };
  try {
    const docRef = doc(fireStore, "teams", teamId.toString());
    await setDoc(docRef, teamData);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const GetTeam = async (q: Query<DocumentData>) => {
  const querySnapshot = await getDocs(q);

  if (querySnapshot.docs.length === 0) {
    return;
  }
  const doc = querySnapshot.docs[0];
  const team: Team = {
    uid: doc.id,
    id: doc.data()?.id,
    users: doc.data()?.users,
  };

  return team;
};

export const EditTeam = async (uid: string, editValue: any) => {
  const docRef = doc(fireStore, "teams", uid);
  await updateDoc(docRef, editValue);
};
