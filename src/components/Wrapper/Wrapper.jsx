import React from "react";
import { useEffect } from "react";
import Counter from "../Counter/Counter";
import RaceLine from "../RaceLine/RaceLine";
import "./Wrapper.scss";

function Wrapper({
  speed,
  input,
  setPointer,
  start,
  setInput,
  text,
  pointer,
  textArray,
  warning,
  done,
  move,
}) {
  return (
    <div id="wrapper" className="mx-auto">
      <Counter speed={speed} start={start} move={move} />
      <div
        id="wrapper"
        className="bg-zinc-800 text-white px-5 py-6 rounded-lg mx-auto"
      >
        <p className="mb-7 text-xl leading-6 font-sans">
          {pointer + 1 == text.length && done
            ? text.map((word, index) => (
                <span key={index}>
                  <span className="text-lime-500">
                    {word}
                    {""}
                  </span>{" "}
                </span>
              ))
            : text.map((word, index) => (
                <span key={index}>
                  <span
                    className={`${index < pointer ? "text-lime-500" : ""}
                          ${index == pointer ? "underline" : ""}`}
                  >
                    {word}
                    {""}
                  </span>{" "}
                </span>
              ))}
        </p>

        <input
          className={` ${
            warning ? "bg-red-300 text-black" : ""
          } mb-5 w-full bg-zinc-900 py-1 placeholder:text-gray-300 text-xl `}
          type="text"
          value={input}
          spellCheck="false"
          placeholder="Type the above text here when the race begins"
          onChange={(i) => setInput(i.target.value)}
        />
      </div>
    </div>
  );
}

export default Wrapper;
