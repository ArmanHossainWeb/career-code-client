import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import jobBox from "../assets/image/jobBox-logo.svg"

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        console.log("sign out successfully");
      })
      .catch((error) => {
        console.log("there is a error", error);
      });
  };
  const links = (
    <div className="space-x-3">
      <NavLink to={"/"}>Home</NavLink>
      {/* for applicant links. check rols as well  */}
      {user && (
        <>
          <NavLink to={"/myApplication"}>My Application</NavLink>
        </>
      )}
      {/* for recurter. check role as well  */}
      {user && (
        <>
          <NavLink to={"/addJob"}>Add Job</NavLink>
          <NavLink to={"/myPostedJobs"}>My Posted Jobs</NavLink>
        </>
      )}
    </div>
  );
 
  return (
    <div className="bg-[#F2F6FD]">
      <div className="navbar w-11/12 x-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={jobBox} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button className="btn bg-primary hover:bg-secondary text-white" onClick={handleSignOut}>
            sign out
          </button>
        ) : (
          <NavLink className={"btn bg-primary hover:bg-secondary text-white"} to={"/register"}>
            Register
          </NavLink>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
