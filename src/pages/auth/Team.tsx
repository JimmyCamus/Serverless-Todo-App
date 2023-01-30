import LoadingBar from "../../components/atoms/LoadingBar";
import NoTeam from "../../components/teams/NoTeam";
import Team from "../../components/teams/Team";
import { useTeam } from "../../hooks/team.hooks";

const TeamPage = () => {
  const { isLoading, team, setTeam } = useTeam();

  if (isLoading && !team) {
    return <LoadingBar />;
  }

  if (team) {
    return <Team team={team} />;
  }

  return <NoTeam setTeam={setTeam} />;
};

export default TeamPage;
