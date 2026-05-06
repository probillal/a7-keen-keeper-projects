import { CiHome } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="container mx-auto navbar ">
        <div className="flex-1">
          <h3 className="text-xl font-bold">
            Keen<span className="text-green-800">Keeper</span>
          </h3>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `mr-2 font-semibold ${isActive ? "bg-green-800 text-white" : ""} `
                }
              >
                <CiHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `mr-2 font-semibold ${isActive ? "bg-green-800 text-white" : ""} `
                }
              >
                <RiTimeLine />
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  `mr-2 font-semibold ${isActive ? "bg-green-800 text-white" : ""} `
                }
              >
                {" "}
                <ImStatsDots />
                Stats
              </NavLink>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
