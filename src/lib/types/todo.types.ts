export type Todo = {
  createdAt: Date;
  enabled: true;
  title: string;
  user: { email: string; username: string };
  completed: boolean;
};
