import { ReactNode } from "react";

const TodoListContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[90%] lg:w-3/4 mt-10">{children}</div>
    </div>
  );
};

export default TodoListContainer;
