import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/auth.hooks";
import { useUser } from "../../lib/contexts/user.context";

const Navbar = ({ children }: { children: ReactNode }) => {
  const userContext = useUser();
  const handleLogout = useLogout();
  return (
    <>
      <div className="w-full navbar bg-primary text-base-100">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2 text-2xl">
          <Link to={"/"}>To Do App</Link>
        </div>
        <div className="flex-none hidden lg:block mr-4">
          {userContext.user ? (
            <div className="flex flex-row items-center">
              <h2 className="mx-4">{userContext.user.username}</h2>
              <div className="dropdown dropdown-left dropdown-hover">
                <label tabIndex={0} className="">
                  <img
                    className="rounded-full w-10"
                    src={userContext.user.photoURL}
                    alt="User profile"
                    referrerPolicy="no-referrer"
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32 text-black"
                >
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
              </div>
            </div>
          ) : (
            <ul className="menu menu-horizontal">
              <li>
                <Link to="">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
