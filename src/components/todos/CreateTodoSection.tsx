import { useCreateTodo } from "../../hooks/todo.hooks";
import Input from "../atoms/Input";
import CreateTodoIcon from "../icons/CreateTodoIcon";

const CreateTodoSection = () => {
  const { isLoading, handleCreateTodo, setTodoTitle } = useCreateTodo();
  return (
    <>
      {isLoading ? (
        <progress className="progress progress-primary w-full"></progress>
      ) : (
        <form
          className="flex flex-row items-center justify-evenly"
          onSubmit={handleCreateTodo}
        >
          <Input
            className="input-bordered input-primary input-sm w-full mx-1 lg:mx-3"
            placeholder="Add To Do"
            type="text"
            onChange={(e) => setTodoTitle(e.target.value)}
            required
          />
          <div className="mx-1 lg:mx-3">
            <button type="submit" className="flex items-center">
              <CreateTodoIcon />
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default CreateTodoSection;
