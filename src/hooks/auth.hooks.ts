import { getRedirectResult, signInWithRedirect, signOut } from "firebase/auth";
import { UserContextType } from "../lib/types/user.types";
import {
  firebaseAuth,
  googleAuthProvider,
} from "../lib/config/firebase.config";
import { Dispatch, SetStateAction, useEffect } from "react";
import { NavigateFunction } from "react-router-dom";

export const useRegisterWithGoogle = () => handleRegisterWithGoogle;

const handleRegisterWithGoogle = async (
  userContext: UserContextType,
  navigate: NavigateFunction
) => {
  try {
    await signInWithRedirect(firebaseAuth, googleAuthProvider);
  } catch (err: any) {}
};

export const useLogout = () => useHandleLogout;

const useHandleLogout = async (userContext: UserContextType) => {
  await signOut(firebaseAuth);
  userContext.dispatch({ type: "singout", user: null });
};

export const useAuth = (
  userContext: UserContextType,
  navigate: NavigateFunction,
  setIsloading: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    const getRedirect = async () => {
      const userCred = await getRedirectResult(firebaseAuth);
      if (!userCred) {
        return;
      }
      navigate("/");
      setIsloading(false);
    };
    getRedirect();
    firebaseAuth.onAuthStateChanged((user) => {
      if (!user) {
        setIsloading(false);
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
      setIsloading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
