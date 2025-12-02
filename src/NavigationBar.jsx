import { NavLink } from "react-router";
// import logo from "../public/logo.png";
export default function NavigationBar() {
  return (
    <div className="navigationBar noto-sans  w-full fixed top-0 left-0 z-1 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex px-2 items-center flex-col  justify-between lg:flex-row   ">
        <a className=" p-4 flex-shrink-0" href="#">
          <img className="w-6" src='/logo.png' alt="logo" />
        </a>
        <div className="max-w-full lg:pr-4 ">
          <ul className="flex gap-6 whitespace-nowrap scrollbar-hide overflow-auto mx-auto ">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "active" : ""
                  } inline-block py-1  border-b-2 border-transparent  hover:border-b-2 hover:border-[#ff5722] lg:py-4`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="inline-block py-1 border-b-2 border-transparent  hover:border-b-2 hover:border-[#ff5722] lg:py-4"
                to="/sports"
              >
                Sports
              </NavLink>
            </li>
            <li>
              <NavLink
                className="inline-block py-1 border-b-2 border-transparent  hover:border-b-2 hover:border-[#ff5722] lg:py-4"
                to="/entertainment"
              >
                Entertainment
              </NavLink>
            </li>   
            <li>
              <NavLink
                className="inline-block py-1 border-b-2 border-transparent  hover:border-b-2 hover:border-[#ff5722] lg:py-4"
                to="/c"
              >
                Admin
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className="inline-block py-1 border-b-2 border-transparent  hover:border-b-2 hover:border-[#ff5722] lg:py-4"
                to="/d"
              >
                The Latest
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                className="inline-block py-1 border-b-2 border-transparent  hover:border-b-2 hover:border-[#ff5722] lg:py-4"
                to="/e"
              >
                The Reel
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                className="inline-block py-1 border-b-2 border-transparent  hover:border-b-2 hover:border-[#ff5722] lg:py-4"
                to="/magazine"
              >
                Magazine
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                className="inline-block py-1 border-b-2 border-transparent  hover:border-b-2 hover:border-[#ff5722] lg:py-4"
                to="/g"
              >
                Video
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                className="inline-block py-1 border-b-2 border-transparent  hover:border-b-2 hover:border-[#ff5722] lg:py-4"
                to="/trending"
              >
                Trending
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                className="inline-block py-1 border-b-2 border-transparent  hover:border-b-2 hover:border-[#ff5722] lg:py-4"
                to="/i"
              >
                Sections
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
