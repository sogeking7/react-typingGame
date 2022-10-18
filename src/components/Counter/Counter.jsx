import React from "react";
import './Counter.scss'

function Counter({speed, start}) {
  return <div>
    <h1 className="text-white font-bold mx-auto"><span className=""></span>{speed} wpm</h1>
    <h1 className="text-white font-bold mx-auto">Time: {start}</h1>
  </div>
  
}

export default Counter;
