import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CreateTeam, EditTeam, GetTeam } from "../api/team.api";
import { useUser } from "../lib/contexts/user.context";
import { Team } from "../lib/types/team.types";

export const useTeam = () => {
  const [team, setTeam] = useState<Team>();
  const { user } = useUser();
  useEffect(() => {
    const handleGetTeam = async () => {
      const team = await GetTeam(user);
      setTeam(team);
    };
    handleGetTeam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { team, setTeam };
};

export const useCreateTeam = (
  setTeam: Dispatch<SetStateAction<Team | undefined>>
) => {
  const { user } = useUser();
  const handleCreateTeam = async () => {
    await CreateTeam(user);
    const team = await GetTeam(user);
    setTeam(team);
  };
  return { handleCreateTeam };
};

export const useJoinTeam = (team: Team) => {
  const { user } = useUser();
  const handleJoinTeam = async () => {
    await EditTeam(team.id, {
      users: [
        ...team.users,
        { username: user.username, photoURL: user.photoURL },
      ],
    });
  };
  return { handleJoinTeam };
};
