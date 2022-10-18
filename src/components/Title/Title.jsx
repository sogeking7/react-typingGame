import React from "react";
import { FaGithubAlt } from "react-icons/fa";
function Title() {
  return (
    <h1 className="text-yellow-400 text-center text-3xl font-bold mb-5 mx-auto">
      TypeRacer{" "}
      <span className="text-xl text-gray-400">
        by{" "}
        <span className="italic">
          {" "}
          <a href="https://github.com/sogeking7" className="hover:underline">
            <FaGithubAlt className="inline" /> sogeking7{" "}
          </a>
        </span>
      </span>
    </h1>
  );
}

export default Title;
