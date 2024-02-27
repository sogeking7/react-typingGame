import { IconCheck, IconKeyboard, IconClockHour9 } from "@tabler/icons-react";

type Props = {
  wpm: number;
  stopwatch: string;
  accuracy: string;
};

export const Results = (props: Props) => {
  return (
    <div className="font-mono rounded-xl border bg-gray-300">
      <h1 className="text-[20px] p-[.5rem_1rem] rounded-xl bg-gray-300">
        Race Results
      </h1>
      <div className="flex p-4">
        <ul className="flex flex-col gap-3 w-[200px]">
          <li className="flex items-center">
            <IconKeyboard />
            <p className="inline">Your speed:</p>
          </li>
          <li className="flex items-center">
            <IconClockHour9 />
            <p className="inline">Time:</p>
          </li>
          <li className="flex items-center">
            <IconCheck />
            <p className="inline">Accuracy:</p>
          </li>
        </ul>
        <ul className="flex flex-col gap-5 w-[200px] font-bold">
          <li>{props.wpm} wpm</li>
          <li>{props.stopwatch}</li>
          <li>{props.accuracy}%</li>
        </ul>
      </div>
    </div>
  );
};
