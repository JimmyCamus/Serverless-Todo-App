import { Dispatch, ReactNode, useContext, useReducer } from "react";
import { createContext } from "react";
import { userReducer } from "../reducers/user.reducer";
import { Action, User } from "../types/user.types";

export const UserContext = createContext({
  user: null as unknown as User,
  dispatch: (() => undefined) as Dispatch<Action>,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(userReducer, null);
  const value = { user, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useAuth must be used WITHIN an AuthProvider");
  }
  return context;
};
