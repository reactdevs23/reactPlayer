import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav className="navMinHeight flex justify-around	items-center">
      <h1 className="text-blackColor text-2xl font-sans font-bold">Wave</h1>
      <button
        onClick={() => setLibraryStatus(!libraryStatus)}
        className="z-10 flex items-center bg-transparent text-sm  cursor-pointer font-bold font-sans p-2 ease-in transition-all duration-300 border-solid border-2 border-navButtonBorderColor hover:bg-navButtonBorderColor hover:text-white"
      >
        Library
        <FontAwesomeIcon
          icon={faMusic}
          className="w-3 mt-1  hover:text-white"
        />
      </button>
    </nav>
  );
};

export default Nav;
