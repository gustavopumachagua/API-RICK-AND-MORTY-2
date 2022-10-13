import { useContext } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import ThemeContext from "../context/ThemeContext";

const PagesSwitch = () => {
  const { goToNextPage, goToPrevPage, currentPage, totalPages } =
    useContext(ThemeContext);

  return (
    <div className="flex justify-center py-8 space-x-4 bg-bodyLight dark:bg-bodyDark">
      <button
        className="bg-cardLight dark:bg-cardDark  px-2 rounded-lg text-lg py-2"
        onClick={() => goToPrevPage()}
      >
        <MdNavigateBefore className="text-primary dark:text-secondary" />
      </button>
      <p className="py-2 text-primary dark:text-secondary text-lg font-semibold">
        {currentPage} - {totalPages}
      </p>
      <button
        className="bg-cardLight dark:bg-cardDark px-2 rounded-lg text-xl py-2"
        onClick={() => goToNextPage()}
      >
        <MdNavigateNext className="text-primary dark:text-secondary" />
      </button>
    </div>
  );
};

export default PagesSwitch;
