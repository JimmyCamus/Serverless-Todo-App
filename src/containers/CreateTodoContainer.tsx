import { ReactNode } from "react";
import TeamNavigation from "../components/teams/TeamNavigation";

const CreateTodoContainer = ({
  activeTab,
  children,
}: {
  activeTab: 1 | 2;
  children: ReactNode;
}) => {
  return (
    <>
      <div className="card w-full bg-[#fafafa] mt-8 shadow-lg">
        <div className="card-body">
          <div className="card-title justify-center">
            <TeamNavigation activeTab={activeTab} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default CreateTodoContainer;
