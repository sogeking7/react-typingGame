import React from "react";
import "./Counter.scss";

function Counter({ speed, start }) {
  return (
    <div className="flex justify-between">
      <span className="text-white font-bold">
      {`Time: ${start}`}
      </span>
      <span className="text-white font-bold">{`${speed} wpm`}</span>
    </div>
  );
}

export default Counter;
