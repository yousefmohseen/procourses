import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [shownav, setShownav] = useState(true)

  return (
    <nav className="fixed w-full bg-white shadow-md px-6 md:px-16 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-800">
        procourse
      </h1>

      <ul className={(shownav ? "max-md:hidden" : "max-md:flex-col max-md:h-sp1 max-md:bg-white max-md:fixed max-md:top-15 max-md:right-0 max-md:px-4 max-md:shadow-md") + " flex gap-6 items-center"}>
        <li>
          <NavLink
            to="/procourse/home"
            className={({ isActive }) =>
              isActive ? "text-purple-800 font-semibold" : "text-gray-600"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/procourse/courses"
            className={({ isActive }) =>
              isActive ? "text-purple-800 font-semibold" : "text-gray-600"
            }
          >
            Courses
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/procourse/cart"
            className={({ isActive }) =>
              isActive ? "text-purple-800 font-semibold" : "text-gray-600"
            }
          >
            Cart
          </NavLink>
        </li>

        <li>
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="text-red-500 font-medium cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/procourse/login"
              className={({ isActive }) =>
                isActive ? "text-purple-800 font-semibold" : "text-gray-600"
              }
            >Login</NavLink>
          )}
        </li>
      </ul>

      <button className='block md:hidden cursor-pointer'>
        <span onClick={() => setShownav(false)} className={shownav ? "block" : "hidden"}>
          <i className="fa-solid fa-bars">s</i>
        </span>
        <span onClick={() => setShownav(true)} className={!shownav ? "block" : "hidden"}>
          <i className="fa-solid fa-close">h</i>
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
