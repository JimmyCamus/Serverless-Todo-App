import CreateTodoContainer from "../containers/CreateTodoContainer";
import { useGetTodosByUser } from "../hooks/todo.hooks";
import CreateTodoSection from "./todos/CreateTodoSection";
import TodoList from "./todos/TodoList";

const Home = () => {
  const { todos } = useGetTodosByUser();
  return (
    <>
      <CreateTodoContainer activeTab={1}>
        <CreateTodoSection />
      </CreateTodoContainer>
      <TodoList todos={todos} />
    </>
  );
};

export default Home;
