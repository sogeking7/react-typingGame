import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const Hero = ({ children }: any) => {
  const router = useRouter();
  return (
    <div className="flex w-full justify-center py-20">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-slate-800">
          Welcome to the Typing Game
        </h1>
        <h2 className="text-2xl font-semibold text-gray-500 mt-4">
          {" "}
          Train your fingers, improve your speed, and conquer the keyboard
          challenges ahead.
        </h2>
        <div>{children}</div>
      </div>
    </div>
  );
};
