export type Action = { type: "singin" | "singout"; user: any | null };

export type UserContextType = {
  user: User | null;
  dispatch: React.Dispatch<Action>;
};

export type User = {
  uid: string;
  username: string;
  email: string;
  photoURL: string;
};
