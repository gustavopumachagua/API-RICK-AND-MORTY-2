import ThemeContext from "../context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "./darkMode";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="bg-bodyLight dark:bg-bodyDark text-primary dark:text-secondary flex flex-row px-2 py-4 space-x-12 lg:space-x-80 md:space-x-20 xl:space-x-96 xl:py-8 ">
      <div className="text-xl font-bold flex flex-row sm:space-x-12 xl:space-x-96 xl:text-2xl xl:px-4">
        <h1>Rick and Morty</h1>

        <DarkMode />
      </div>
      <ul className="hidden md:flex md:space-x-10 text-xl font-medium xl:space-x-20 ">
        <li className="hover:text-gray-400">
          <Link to="/favorites">Favorites</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div className="md:hidden z-20 flex relative   ">
        <GiHamburgerMenu fontSize={27} onClick={handleToggleMenu} />

        {toggleMenu && (
          <div className=" bg-bodyLight dark:bg-bodyDark text-primary dark:text-secondary fixed z-10 top-0 left-0 right-0 bottom-0 ">
            <div className="flex flex-row-reverse px-4 py-2 ">
              <MdOutlineClose
                className="text-4xl bg-bodyDark"
                fontSize={27}
                style={{ color: "white" }}
                onClick={handleToggleMenu}
              />
            </div>
            <ul className="flex flex-col space-y-10 text-center py-20 text-4xl  font-semibold">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
