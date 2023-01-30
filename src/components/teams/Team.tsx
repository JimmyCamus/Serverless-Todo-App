import CreateTodoContainer from "../../containers/CreateTodoContainer";
import { useGetTodosByTeam } from "../../hooks/todo.hooks";
import { Team as TeamType } from "../../lib/types/team.types";
import CreateTodoSection from "../todos/CreateTodoSection";
import TodoList from "../todos/TodoList";

const Team = ({ team }: { team: TeamType }) => {
  const { todos } = useGetTodosByTeam(team);
  return (
    <>
      <CreateTodoContainer activeTab={2}>
        <CreateTodoSection teamId={team.id} />
      </CreateTodoContainer>
      <TodoList todos={todos} />
    </>
  );
};

export default Team;
