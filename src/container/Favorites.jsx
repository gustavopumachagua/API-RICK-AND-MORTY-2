import ThemeContext from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import CharacterCard from "../components/CharacterCard";
import Footer from "../components/Footer";

import { useCharacters } from "../hooks/useCharacters";

const Favorites = () => {
  const {
    darkMode,
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    handleClick,
  } = useCharacters();

  let appClass = `App ${darkMode ? "bg-dark" : ""}`;

  return (
    <ThemeContext.Provider value={{ darkMode, handleClick }}>
      <div className="">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6 sm:px-14 md:px-24 py-8 bg-bodyLight">
          {favorites.map((favorite) => (
            <CharacterCard
              key={favorite.id}
              character={favorite}
              isFavorite={isFavorite(favorite.name)}
              addFavorite={() => addFavorite(favorite)}
              removeFavorite={() => removeFavorite(favorite.id)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
};

export default Favorites;
