import { Link } from "react-router-dom";

const TeamNavigation = ({ activeTab }: { activeTab: 1 | 2 }) => {
  return (
    <div className="tabs">
      <Link to="/" className={`tab ${activeTab === 1 ? "tab-active" : null}`}>
        Tab 1
      </Link>
      <Link
        to="/teams"
        className={`tab ${activeTab === 2 ? "tab-active" : null}`}
      >
        Tab 2
      </Link>
    </div>
  );
};

export default TeamNavigation;
