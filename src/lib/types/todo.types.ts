export type Todo = {
  uid: string | number;
  createdAt: Date;
  enabled: true;
  title: string;
  user: { email: string; username: string };
  completed: boolean;
  teamId?: string | number
};
