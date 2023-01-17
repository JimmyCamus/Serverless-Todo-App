import { signInWithPopup } from "firebase/auth";
import { UserContextType } from "../lib/types/user.types";
import {
  firebaseAuth,
  googleAuthProvider,
} from "../lib/config/firebase.config";

export const useRegisterWithGoogle = () => handleRegisterWithGoogle;

const handleRegisterWithGoogle = async (userContext: UserContextType) => {
  try {
    const response = await signInWithPopup(firebaseAuth, googleAuthProvider);
    const { displayName, email, photoURL, uid } = response.user;
    userContext.dispatch({
      type: "singin",
      user: { displayName, email, photoURL, uid },
    });
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};
