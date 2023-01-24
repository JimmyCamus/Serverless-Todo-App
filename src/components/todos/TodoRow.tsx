import { useState } from "react";
import { Todo } from "../../lib/types/todo.types";
import CheckBox from "../atoms/CheckBox";
import TrashIcon from "../icons/TrashIcon";

const TodoRow = ({ todo }: { todo: Todo }) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.completed);
  return (
    <div
      className={`
        transition-colors duration-300 ease-in-out card w-full 
        ${isCompleted ? "bg-primary text-white" : "bg-base-100"}
        shadow-xl
        `}
    >
      <div className="card-body">
        <div className="card-title justify-between">
          <div className="flex flex-row">
            <CheckBox onClick={() => setIsCompleted(!isCompleted)} />{" "}
            <h2
              className={`mx-9 ${
                isCompleted ? "line-through decoration-2" : null
              }`}
            >
              {todo.title}
            </h2>
          </div>
          <div className="hidden lg:block">
            <span className="text-sm font-normal">
              Created by {todo.user.username}
            </span>
          </div>
        </div>
        <div className="lg:hidden mt-4">
          <span className="text-sm font-normal">
            Created by {todo.user.username}
          </span>
        </div>
        <div className="card-actions justify-end mt-8">
          <p>
            Created at {todo.createdAt.getDate()}/
            {todo.createdAt.getMonth() + 1}/{todo.createdAt.getFullYear()}
          </p>
          <button className={`${isCompleted ? "text-white" : "text-red-600"}`}>
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoRow;
