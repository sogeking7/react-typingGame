import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import { cn } from "@/lib/utils";

interface Props {
  timer: string;
  wpm: number;
  start: number | null;
  index: number;
  textLength: number;
}

export const RaceLine = (props: Props) => {
  const [car, setCar] = useState(0),
    [ref, bounds] = useMeasure();

  useEffect(() => {
    setCar((props.index * (bounds.width - 160 + 12)) / props.textLength);
  }, [bounds, props.index]);

  return (
    <div className="max-w-lg m-[0_auto_1rem_auto] overflow-x-hidden">
      <div className="mb-[3rem] text-end font-bold">
        {props.start !== -1 ? props.timer : <pre> </pre>}
      </div>
      <div className="flex relative">
        {" "}
        <div
          className={cn(
            "flex bottom-[5px] absolute gap-[.2rem] h-[45px] w-[160px]",
            `left-[${car}px]`
          )}
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
          className="w-full border-b-1 border-dashed bottom-orange-500 overflow-x-hidden mr-4"
        ></div>
        <div className="w-[85px] overflow-hidden font-bold text-start">
          {props.wpm} wpm
        </div>
      </div>
    </div>
  );
};
