import ThemeContext from "../context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { darkMode, handleClick } = useContext(ThemeContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  let navbarClass = `navbar ${darkMode ? "navbar-dark" : ""}`;
  let itemClass = `${
    darkMode ? "navbar__links-item dark" : "navbar__links-item"
  }`;

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="bg-bodyLight flex flex-row px-2 py-4 space-x-12 lg:space-x-80 md:space-x-20 xl:space-x-96 xl:py-8 ">
      <div className="text-xl font-bold flex flex-row sm:space-x-12 xl:space-x-96 xl:text-2xl xl:px-4">
        <h1>Rick and Morty</h1>

        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            onClick={handleClick}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <ul className="hidden md:flex md:space-x-10 text-xl font-medium xl:space-x-20 ">
        <li className="hover:text-gray-400">
          <Link to="/favorites">Favorites</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div className="md:hidden  flex relative   ">
        <GiHamburgerMenu fontSize={27} onClick={handleToggleMenu} />

        {toggleMenu && (
          <div className=" bg-gray-800 fixed z-10 top-0 left-0 right-0 bottom-0 ">
            <div className="flex flex-row-reverse px-4 py-2 ">
              <MdOutlineClose
                className="text-4xl"
                fontSize={27}
                style={{ color: "white" }}
                onClick={handleToggleMenu}
              />
            </div>
            <ul className="flex flex-col space-y-10 text-center py-20 text-4xl text-slate-300 font-semibold">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/favorites">Favorites</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
