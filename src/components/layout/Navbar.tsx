import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }: { children: ReactNode }) => {
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
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            <li>
              <Link to="">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
