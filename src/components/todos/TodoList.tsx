import TodoListContainer from "../../containers/TodoListContainer";
import { Todo } from "../../lib/types/todo.types";
import TodoRow from "./TodoRow";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <TodoListContainer>
      {todos.map((todo, index) => (
        <div className="flex flex-row justify-between my-5" key={index}>
          <TodoRow todo={todo} />
        </div>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
