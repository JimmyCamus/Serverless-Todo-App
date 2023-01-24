import { useState } from "react";
import { Todo } from "../../lib/types/todo.types";
import CheckBox from "../atoms/CheckBox";
import TrashIcon from "../icons/TrashIcon";

const TodoRow = ({ todo }: { todo: Todo }) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.completed);
  return (
    <>
      <div className="flex flex-row">
        <CheckBox onClick={() => setIsCompleted(!isCompleted)} />
        <p
          className={`text-lg mx-9 ${
            isCompleted ? "line-through decoration-2" : null
          }`}
        >
          {todo.title}
        </p>
      </div>
      <button className="text-red-600">
        <TrashIcon />
      </button>
    </>
  );
};

export default TodoRow;
