import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/alltoys">All Toys</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/mytoys">My Toys</Link>
          </li>
          <li>
            <Link to="/addtoys">Add Toys</Link>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-[12px] md:text-xl"
        >
          Animal Toys
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="mr-3 hidden md:block">
            {user.photoURL ? (
              <img
                className="w-14 rounded-full"
                title={user?.displayName}
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <FaUserCircle title={user?.displayName} className="text-2xl" />
            )}
          </div>
        )}
        {user ? (
          <button onClick={handleLogOut} className="btn btn-secondary">
            Logout
          </button>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn btn-info">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
