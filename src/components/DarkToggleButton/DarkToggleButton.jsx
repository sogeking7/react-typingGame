import React from "react";
import { MdDarkMode } from "react-icons/md";
import { SiDarkreader } from "react-icons/si";

function DarkToggleButton() {
  return (
    <button className="bg-violet-600 w-72 h-14 text-lg font-bold flex items-center justify-center relative rounded-sm hover:bg-violet-500">
      <span>Change Theme</span>
      <span className="absolute right-10">
        <SiDarkreader size={"25px"} />
      </span>
    </button>
  );
}

export default DarkToggleButton;
