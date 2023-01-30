import TeamNavigation from "./TeamNavigation";
import TeamFigure from "../../assets/team-figure.svg";
import Button from "../atoms/Button";
import { useCreateTeam, useJoinTeam } from "../../hooks/team.hooks";
import { Team } from "../../lib/types/team.types";
import Input from "../atoms/Input";
import { useState } from "react";

const NoTeam = ({
  setTeam,
}: {
  setTeam: React.Dispatch<React.SetStateAction<Team | undefined>>;
}) => {
  const [teamId, setTeamId] = useState<string>("");
  const { handleCreateTeam } = useCreateTeam(setTeam);
  const { handleJoinTeam } = useJoinTeam();
  return (
    <>
      <div className="card w-full bg-[#fafafa] mt-8 shadow-lg">
        <div className="card-body">
          <div className="card-title justify-center">
            <TeamNavigation activeTab={2} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-5">
        <img
          src={TeamFigure}
          className="lg:max-w-lg"
          alt="landing page of todo app"
        />
        <p className="text-center text-3xl mt-8 font-bold">You don't have a team!</p>
        <Button className="btn-primary mt-8 w-1/2" onClick={handleCreateTeam}>
          Create Team
        </Button>
        <label htmlFor="my-modal-3" className="btn btn-secondary w-1/2 mt-4">
          Join Team!
        </label>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleJoinTeam(teamId);
              }}
            >
              <Input
                className="input-primary w-full my-3"
                placeholder="Enter team code"
                type="text"
                onChange={(e) => setTeamId(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoTeam;
