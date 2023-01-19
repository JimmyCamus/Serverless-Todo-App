import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";
import { UserContextType } from "../lib/types/user.types";
import {
  firebaseAuth,
  googleAuthProvider,
} from "../lib/config/firebase.config";
import { Dispatch, SetStateAction, useEffect } from "react";
import { NavigateFunction } from "react-router-dom";
import UserAsset from "../assets/user-asset.png";

export const useRegisterWithGoogle = () => handleRegisterWithGoogle;

const handleRegisterWithGoogle = async () => {
  await signInWithRedirect(firebaseAuth, googleAuthProvider);
};

export const useRegisterWithEmailAndPassword = () =>
  handleRegisterWithEmailAndPassword;

const handleRegisterWithEmailAndPassword = async (
  email: string,
  password: string,
  username: string,
  userContext: UserContextType
) => {
  await createUserWithEmailAndPassword(firebaseAuth, email, password);

  if (!firebaseAuth.currentUser) {
    return;
  }

  await updateProfile(firebaseAuth.currentUser, {
    displayName: username,
  });

  const user = firebaseAuth.currentUser;
  userContext.dispatch({
    type: "singin",
    user: {
      email: user.email,
      username: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL ?? UserAsset,
    },
  });
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
          photoURL: user.photoURL ?? UserAsset,
        },
      });
      setIsloading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
