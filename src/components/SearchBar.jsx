import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";

const SearchBar = () => {
  const { darkMode, setSearchValue, searchCharacter } =
    useContext(ThemeContext);
  let searchbarClass = `searchbar ${darkMode ? "searchbar-dark" : ""}`;

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    searchCharacter();
  };

  return (
    <div className="py-8  flex justify-center bg-bodyLight">
      <input
        className="bg-gray-500 outline-none rounded-l-lg  sm:px-8 lg:px-36 text-white"
        type="text"
        placeholder="Search a character"
        onChange={onSearchValueChange}
      />
      <button className="bg-gray-700 px-2 rounded-r-lg">
        <FaSearch className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
