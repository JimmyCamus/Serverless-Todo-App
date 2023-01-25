import NoTeam from "../../components/teams/NoTeam";
import { useTeam } from "../../hooks/team.hooks";

const TeamPage = () => {
  const { team, setTeam } = useTeam();

  if (team) {
    return (
      <div>
        <h1>Yor team Id {team.id}</h1>
        {team.users.map((user, index) => (
          <div key={index}>{user.username }</div>
        ))}
      </div>
    );
  }

  return <NoTeam setTeam={setTeam} />;
};

export default TeamPage;
