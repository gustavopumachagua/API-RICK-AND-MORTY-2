import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import Navbar from "../components/Navbar";
import Header from "../container/Header";
import CharacterCard from "../components/CharacterCard";
import PagesSwitch from "../components/PagesSwitch";
import ThemeContext from "../context/ThemeContext";
import Footer from "../components/Footer";

const App = () => {
  const {
    characters,
    isFavorite,
    favorites,
    addFavorite,
    removeFavorite,
    next,
    goToNextPage,
    goToPrevPage,
    currentPage,
    totalPages,
    darkMode,
    handleClick,
    setSearchValue,
    searchValue,
    searchCharacter,
  } = useCharacters();
  const values = {
    darkMode,
    handleClick,
    characters,
    isFavorite,
    favorites,
    addFavorite,
    removeFavorite,
    next,
    goToNextPage,
    goToPrevPage,
    currentPage,
    totalPages,
    setSearchValue,
    searchValue,
    searchCharacter,
  };
  let appClass = `App ${darkMode ? "bg-dark" : ""}`;
  return (
    <ThemeContext.Provider value={values}>
      <div className="">
        <Navbar />
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6 sm:px-14 md:px-24 py-8 bg-bodyLight ">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={isFavorite(character.name)}
              addFavorite={() => addFavorite(character)}
              removeFavorite={() => removeFavorite(character.id)}
            />
          ))}
        </div>

        <div className="">
          <PagesSwitch />
        </div>
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
};

export default App;
