import { useContext } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import ThemeContext from "../context/ThemeContext";

const PagesSwitch = () => {
  const { darkMode, goToNextPage, goToPrevPage, currentPage, totalPages } =
    useContext(ThemeContext);

  let pagesClass = `pages-container ${darkMode ? "pages-switch-dark" : ""}`;

  return (
    <div className="flex justify-center py-8 space-x-4 bg-bodyLight">
      <button
        className="bg-gray-500 text-white px-2 rounded-lg text-lg py-2"
        onClick={() => goToPrevPage()}
      >
        <MdNavigateBefore />
      </button>
      <p className="py-2 text-lg font-semibold">
        {currentPage} - {totalPages}
      </p>
      <button
        className="bg-gray-500 text-white px-2 rounded-lg text-xl py-2"
        onClick={() => goToNextPage()}
      >
        <MdNavigateNext />
      </button>
    </div>
  );
};

export default PagesSwitch;
