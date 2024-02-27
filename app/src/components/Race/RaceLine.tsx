import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";

interface Props {
  timer: string;
  wpm: number;
  start: number | null;
  index: number;
  textLength: number;
}

export const RaceLine = ({ index, timer, wpm, start, textLength }: Props) => {
  const [car, setCar] = useState(0);
  const [ref, bounds] = useMeasure();

  useEffect(() => {
    const position = Number(
      ((index * (bounds.width - 160 + 12)) / textLength).toFixed(2)
    );
    setCar(position);
  }, [bounds, index]);

  return (
    <div className="w-full m-[0_auto_1rem_auto] overflow-x-hidden">
      <div className="mb-[3rem] text-end font-bold">
        {start !== -1 ? timer : <pre> </pre>}
      </div>
      <div className="flex relative">
        <div
          style={{
            left: car + "px",
          }}
          className="flex bottom-[5px] absolute gap-[.2rem] h-[45px] w-[160px]"
        >
          <div className="text-sm text-end font-bold flex justify-center flex-col">
            <span>sogeking7</span>
            <span>(you)</span>
          </div>
          <div className="flex items-end">
            <img className="h-[30px]" src="car.svg" alt="car" />
          </div>
        </div>
        <div
          ref={ref}
          className="w-full border-b border-dashed border-orange-500 overflow-x-hidden mr-4"
        ></div>
        <div className="w-[85px] overflow-hidden font-bold text-start">
          {wpm} wpm
        </div>
      </div>
    </div>
  );
};
