import { signInWithPopup, signOut } from "firebase/auth";
import { UserContextType } from "../lib/types/user.types";
import {
  firebaseAuth,
  googleAuthProvider,
} from "../lib/config/firebase.config";
import { useEffect } from "react";
import { NavigateFunction } from "react-router-dom";

export const useRegisterWithGoogle = () => handleRegisterWithGoogle;

const handleRegisterWithGoogle = async (
  userContext: UserContextType,
  navigate: NavigateFunction
) => {
  try {
    const response = await signInWithPopup(firebaseAuth, googleAuthProvider);
    const { displayName, email, photoURL, uid } = response.user;
    userContext.dispatch({
      type: "singin",
      user: { username: displayName, email, photoURL, uid },
    });
    navigate("/");
  } catch (err: any) {
    console.error(err);
  }
};

export const useLogout = () => useHandleLogout;

const useHandleLogout = async (userContext: UserContextType) => {
  await signOut(firebaseAuth);
  userContext.dispatch({ type: "singout", user: null });
};

export const useAuth = (userContext: UserContextType) => {
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      userContext.dispatch({
        type: "singin",
        user: {
          email: user.email,
          username: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL ?? "https://icons8.com/icon/98957/user",
        },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
