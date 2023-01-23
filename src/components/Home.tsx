import CreateTodoContainer from "../containers/CreateTodoContainer";
import CreateTodoSection from "./todos/CreateTodoSection";

const Home = () => {
  return (
    <>
      <CreateTodoContainer>
        <CreateTodoSection />
      </CreateTodoContainer>
    </>
  );
};

export default Home;
