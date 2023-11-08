import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import HeadRoom from "react-headroom";
import { AuthContext } from "../../../providers/AuthProviders";
import DarkMode from "./Darkmode";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  // const email = user.email;
  const link = (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-7 font-medium">
        <div>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#2ECA7F] font-semibold border-b-4 border-[#FBB04B] text-base "
                : "text-base font-semibold text-[#1A2D62]"
            }
          >
            Home
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/add-Book"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#2ECA7F] font-semibold border-b-4 border-[#FBB04B] text-base "
                : "text-base font-semibold text-[#1A2D62]"
            }
          >
            Add Book
          </NavLink>
        </div>

        <div>
          <NavLink
            to={`/all-Books`}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#2ECA7F] font-semibold border-b-4 border-[#FBB04B] text-base "
                : "text-base font-semibold text-[#1A2D62]"
            }
          >
            All Books
          </NavLink>
        </div>
        <div>
          <NavLink
            to={`/borrowed-Books`}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#2ECA7F] font-semibold border-b-4 border-[#FBB04B] text-base "
                : "text-base font-semibold text-[#1A2D62]"
            }
          >
            Borrowed Books
          </NavLink>
        </div>
      </div>
    </>
  );

  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        console.log("successful logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <HeadRoom>
      <div className=" bg-white drop-shadow-md  py-2 visible ">
        <div className="navbar max-w-screen-xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="w-52 menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box ">
                {link}
              </ul>
            </div>

            <a className="flex items-center gap-4">
              <span>
                <img className="w-14 h-10 md:w-24 md:h-20" src="https://i.ibb.co/Tr8BRhn/logo.png" alt="" />
              </span>
              {/* <div className="text-xl md:text-3xl font-bold ">
                <span className="text-[#FF6A25] font-extrabold">Auto</span>
                <span className="">WheelsToday</span>
              </div> */}
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="navbar-end">
            <DarkMode></DarkMode>
            {user ? (
              <div className="dropdown dropdown-end z-50 ml-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-14 rounded-full border-2 border-[#FBB04B]">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="text-xl font-semibold mb-0">{user?.displayName}</a>
                  </li>
                  <li>
                    <a className="text-gray-700 mt-0">{user?.email}</a>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button onClick={handleSignOut} className="text-[#FF6A25] text-lg font-medium">
                        Logout
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}

            <div>
              {user ? (
                ""
              ) : (
                <button className="rounded-[100px] bg-[#2ECA7F] normal-case text-white px-7 text-base font-medium py-3 hover:bg-white hover:border-2 hover:border-[#2ECA7F] hover:text-[#2ECA7F] ml-5">
                  <Link to={"/login"}>Login</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeadRoom>
  );
};

export default Navbar;
