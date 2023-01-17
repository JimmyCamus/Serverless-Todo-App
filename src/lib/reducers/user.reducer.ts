import { Action } from "../types/user.types";

export const userReducer = (user: any | null, action: Action) => {
  switch (action.type) {
    case "singin": {
      return action.user;
    }
    case "singout": {
      return null;
    }
    default: {
      throw new Error(`Unhandle action type ${action.type}`);
    }
  }
};
