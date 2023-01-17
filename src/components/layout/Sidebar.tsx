import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/auth.hooks";
import { useUser } from "../../lib/contexts/user.context";

const Sidebar = () => {
  const userContext = useUser();
  const handleLogout = useLogout();
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      {userContext.user ? (
        <ul className="menu p-4 w-80 bg-base-100">
          <div className="flex flex-row justify-center items-center mb-2">
            <h2 className="mx-4">{userContext.user.username}</h2>
            <img
              className="rounded-full w-10"
              src={userContext.user.photoURL}
              alt="User profile"
              referrerPolicy="no-referrer"
            />
          </div>
          <li>
            <button
              onClick={() => {
                handleLogout(userContext);
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className="menu p-4 w-80 bg-base-100">
          <li>
            <Link to="">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
