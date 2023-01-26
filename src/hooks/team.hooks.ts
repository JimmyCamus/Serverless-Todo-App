import { collection, query, where } from "firebase/firestore";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CreateTeam, EditTeam, GetTeam } from "../api/team.api";
import { fireStore } from "../lib/config/firebase.config";
import { useUser } from "../lib/contexts/user.context";
import { Team } from "../lib/types/team.types";

export const useTeam = () => {
  const [team, setTeam] = useState<Team>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useUser();
  useEffect(() => {
    setIsLoading(true);
    const handleGetTeam = async () => {
      const q = query(
        collection(fireStore, "teams"),
        where("users", "array-contains", {
          username: user.username,
          photoURL: user.photoURL,
        })
      );
      const team = await GetTeam(q);
      setTeam(team);
      setIsLoading(false);
    };
    handleGetTeam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, team, setTeam };
};

export const useCreateTeam = (
  setTeam: Dispatch<SetStateAction<Team | undefined>>
) => {
  const { user } = useUser();
  const handleCreateTeam = async () => {
    await CreateTeam(user);
    const q = query(
      collection(fireStore, "teams"),
      where("users", "array-contains", {
        username: user.username,
        photoURL: user.photoURL,
      })
    );
    const team = await GetTeam(q);
    setTeam(team);
  };
  return { handleCreateTeam };
};

export const useJoinTeam = () => {
  const { user } = useUser();

  const handleJoinTeam = async (teamId: string) => {
    console.log(teamId);
    const q = query(collection(fireStore, "teams"), where("id", "==", teamId));
    const team = await GetTeam(q);
    if (!team) {
      return;
    }
    await EditTeam(team.uid as string, {
      users: [
        ...team.users,
        { username: user.username, photoURL: user.photoURL },
      ],
    });
  };
  return { handleJoinTeam };
};
