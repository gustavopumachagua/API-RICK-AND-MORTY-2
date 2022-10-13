import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";

const SearchBar = () => {
  const { setSearchValue, searchCharacter } = useContext(ThemeContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    searchCharacter();
  };

  return (
    <div className="py-8  flex justify-center bg-bodyLight dark:bg-bodyDark">
      <input
        className="bg-cardLight dark:bg-cardDark outline-none rounded-l-lg  sm:px-8 lg:px-36 text-primary dark:text-secondary"
        type="text"
        placeholder="Search a character"
        onChange={onSearchValueChange}
      />
      <button className="bg-cardLight dark:bg-cardDark px-2 rounded-r-lg">
        <FaSearch className="text-primary dark:text-secondary" />
      </button>
    </div>
  );
};

export default SearchBar;
