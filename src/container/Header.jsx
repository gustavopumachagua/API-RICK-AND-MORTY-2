import SearchBar from "../components/SearchBar";

import PagesSwitch from "../components/PagesSwitch";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-40  bg-bodyLight dark:bg-bodyDark ">
      <SearchBar />
      <PagesSwitch />
    </div>
  );
};

export default Header;
