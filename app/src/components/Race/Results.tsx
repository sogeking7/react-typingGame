import { IconCheck, IconKeyboard, IconClockHour9 } from "@tabler/icons-react";

type Props = {
  wpm: number;
  stopwatch: string;
  accuracy: string;
};

export const Results = (props: Props) => {
  return (
    <div className=" rounded-xl p-5 border bg-[#f6fbff] border-gray-300">
      <h1 className="text-[20px] font-semibold">Race Results 🚩</h1>
      <div className="flex mt-4">
        <ul className="flex flex-col gap-3 w-[200px]">
          <li className="flex items-center gap-2">
            <IconKeyboard className="text-[#17B569]" />
            <p className="inline">Your speed:</p>
          </li>
          <li className="flex items-center gap-2">
            <IconClockHour9 className="text-[#17B569]" />
            <p className="inline">Time:</p>
          </li>
          <li className="flex items-center gap-2">
            <IconCheck className="text-[#17B569]" />
            <p className="inline">Accuracy:</p>
          </li>
        </ul>
        <ul className="flex flex-col gap-3 w-[200px] font-bold">
          <li>{props.wpm} wpm</li>
          <li>{props.stopwatch}</li>
          <li>{props.accuracy}%</li>
        </ul>
      </div>
    </div>
  );
};
