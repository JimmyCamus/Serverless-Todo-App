export type Team = {
  uid?: string;
  id: string;
  users: { username: string; photoURL: string }[];
};
