import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100">
        <li>
          <Link to="">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
