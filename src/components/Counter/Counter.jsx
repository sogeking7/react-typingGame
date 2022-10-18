import React from "react";
import "./Counter.scss";
import car from './../../img/car.svg'

function Counter({ speed, start, move}) {
  return (
    <div className="flex items-center mb-3">
      <div className="w-full relative">
        <div className={`flex items-end mb-1`} style={{paddingLeft: `${move}px`}}>
          <div className="text-white font-bold w-24 mr-2 text-right">
            <h1 className="w-full">kaiyrkhan</h1>
            <h1 className="w-full">(you)</h1>
          </div>
          <img src={car} alt="car" className="w-16 h-8"/>
        </div>
        <hr className="border-dashed border-t-2 border-zinc-700 w-full"/>
      </div>
      <div className="w-24">
        {speed>0 && <h1 className="text-white w-full text-right text-xs">Done!</h1>}
        <span className=" text-center text-white font-bold flex  justify-end">{`${speed} wpm`}</span>
      </div>
      
    </div>
  );
}

export default Counter;
