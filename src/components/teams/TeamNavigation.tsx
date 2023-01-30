import { Link } from "react-router-dom";
import PersonalIcon from "../icons/PersonalIcon";
import TeamIcon from "../icons/TeamIcon";

const TeamNavigation = ({ activeTab }: { activeTab: 1 | 2 }) => {
  return (
    <div className="tabs">
      <Link to="/" className={`tab ${activeTab === 1 ? "tab-active" : null}`}>
        <PersonalIcon />
        <span>Personal</span>
      </Link>
      <Link
        to="/teams"
        className={`tab ${activeTab === 2 ? "tab-active" : null}`}
      >
        <TeamIcon />
        Team
      </Link>
    </div>
  );
};

export default TeamNavigation;
