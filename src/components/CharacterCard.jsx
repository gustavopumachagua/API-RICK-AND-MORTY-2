import React, { useContext, useState } from "react";

//Icons
import { FaGenderless } from "react-icons/fa";
import { VscWorkspaceUnknown } from "react-icons/vsc";
import { BsGenderMale, BsGenderFemale, BsCircleFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

//Custom Imports
import ThemeContext from "../context/ThemeContext";

const CharacterCard = (props) => {
  const { darkMode } = useContext(ThemeContext);
  const character = props.character;
  const [favorite, setFavorite] = useState(props.isFavorite);

  const characterStatus = (status) => {
    if (status === "Alive") {
      return <BsCircleFill className="text-green-500" />;
    } else if (status === "Dead") {
      return <BsCircleFill className="text-red-600" />;
    } else {
      return <VscWorkspaceUnknown />;
    }
  };

  const characterGender = (gender) => {
    if (gender === "Female") {
      return <BsGenderFemale />;
    } else if (gender === "Male") {
      return <BsGenderMale />;
    } else if (gender === "Genderless") {
      return <FaGenderless />;
    } else {
      return <VscWorkspaceUnknown />;
    }
  };

  let cardClass = `character-card ${darkMode ? "card-dark" : ""}`;
  let cardInfoClass = `character-card-info ${darkMode ? "info-dark" : ""}`;
  let favIconClass = `text-white text-2xl absolute right-2 top-2 bg-red-400 rounded-full border-8 border-red-400 hover:bg-red-600 hover:border-red-600 cursor-pointer ${
    favorite ? "text-red-200 " : ""
  }`;

  const handleClick = () => {
    setFavorite(!favorite);
    if (favorite) {
      props.removeFavorite();
    } else {
      props.addFavorite();
    }
  };

  return (
    <div className=" relative bg-slate-300 rounded-xl border-2 border-white dark:bg-bodyDark w-auto h-auto">
      <div className={favIconClass}>
        <AiFillHeart onClick={handleClick} />
      </div>
      <img src={character.image} alt="character img" className=" rounded-xl" />
      <h2 className="text-center font-semibold py-1 text-xl">
        {character.name}
      </h2>
      <div className="flex justify-center space-x-8 sm:space-x-10 md:space-x-3 lg:space-x-8 bg-cardLight py-2 rounded-xl font-semibold">
        <div className="flex flex-col space-y-2">
          <p className="text-lg">{character.status}</p>
          <div className="flex justify-center">
            {characterStatus(character.status)}
          </div>
        </div>
        <div className="border-r-4 border-indigo-500" />
        <div className=" flex flex-col space-y-2">
          <p className="text-lg flex justify-center">{character.gender}</p>
          <div className="flex justify-center">
            {characterGender(character.gender)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
