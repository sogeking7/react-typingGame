"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { RaceLine } from "./RaceLine";
import { Results } from "./Results";
import { useUserStore } from "@/stores/user";

const getRandomRace = async () =>
  await axios.get(`${process.env.NEXT_PUBLIC_API}/races/random`);

export const Race = (): React.ReactNode => {
  const { user } = useUserStore();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<null | {
    id: number;
    title: string;
    author: string;
    text: string;
  }>(null);

  useEffect(() => {
    setLoading(true);
    getRandomRace().then(({ data }) => {
      setData(data);
    });
    setLoading(false);
  }, []);

  const text = data?.text + " ";
  const textArr = text.split(" ");

  const [input, setInput] = useState("");

  const [wpm, setWpm] = useState(0);
  const [start, setStart] = useState<number | null>(null); // not started = 0, started = 1, finished = -1
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [pointer, setPointer] = useState(0);
  const [redList, setRedList] = useState<number[]>([]);
  const [greenList, setGreenList] = useState<number[]>([]);
  const [timeElapsed, setTimeElapsed] = useState(180);
  const [timerInterval, setTimerInterval] = useState<any>(null);

  const startTimer = () =>
    setTimerInterval(
      setInterval(() => {
        return setTimeElapsed((p) => p - 1);
      }, 1000)
    );
  const stopTimer = () => clearInterval(timerInterval);

  const reset = () => {
    stopTimer();
    setWpm(0);
    setStart(null);
    setIndex(0);
    setLength(0);
    setPointer(0);
    setRedList([]);
    setGreenList([]);
    setTimeElapsed(180);
    setInput("");
  };

  const startNewRace = () => {
    reset();
    setLoading(true);
    getRandomRace().then(({ data }) => {
      setData(data);
    });
    setLoading(false);
  };

  useEffect(() => {
    if (!user) return;
    if (start === -1) {
      const values: any = {
        wpm: wpm,
        accuracy: accuracy,
        userId: user?._id || "",
      };
      const addAttempt = async (values) =>
        await axios.post(`${process.env.NEXT_PUBLIC_API}/attempt`, values);

      addAttempt(values).then(({ data }) => {
        console.log(data);
      });
    }
  }, [start]);

  useEffect(() => {
    const t = 180 - timeElapsed;
    if (t) setWpm(Math.round(((length + input.length) * 12) / t));
  }, [timeElapsed]);

  const curString = textArr[index] + " ";
  const curIndex = length + input.length - 1;
  const k =
    input.length > curString.length ? input.length - curString.length : 0;
  const accuracy = (100 - (redList.length * 100) / (text.length - 1)).toFixed(
    1
  );
  const s1 = (180 - timeElapsed) % 60;
  const s2 = timeElapsed % 60;
  const timer = `${Math.floor(timeElapsed / 60)}:${
    s2 < 10 ? `0${s2}` : `${s2}`
  }`;
  const stopwatch = `${Math.floor((180 - timeElapsed) / 60)}:${
    s1 < 10 ? `0${s1}` : `${s1}`
  }`;

  if (pointer + 1 == input.length) {
    if (
      text[curIndex] == input.slice(-1) &&
      greenList.indexOf(curIndex) + redList.indexOf(curIndex) == -2
    ) {
      setGreenList([...greenList, curIndex]);
    } else if (greenList.indexOf(curIndex) + redList.indexOf(curIndex) == -2) {
      setRedList([...redList, curIndex]);
    }
  }

  if (input.slice(-1) == curString[pointer] && input.length == pointer + 1) {
    setPointer((p) => p + 1);
    if (index == textArr.length - 2 && pointer == curString.length - 2) {
      setInput("");
      setLength((p) => p + curString.length);
      setIndex((p) => p + 1);
      setStart(-1);
      stopTimer();
    }
    if (input.slice(-1) == " ") {
      setInput("");
      setPointer(0);
      setLength((p) => p + curString.length);
      setIndex((p) => p + 1);
    }
  } else if (input.length < pointer) {
    setPointer(input.length);
  }

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="border px-6 relative overflow-hidden py-8  rounded-xl overflow-x-hidden">
      <RaceLine
        timer={timer}
        wpm={wpm}
        start={start}
        index={index}
        textLength={textArr.length - 1}
      />
      {start !== -1 && (
        <div className="border bg-[#f6fbff] border-gray-300 p-4 mb-4 rounded-xl font-mono">
          {text.length == 4 ? (
            <div> Loading...</div>
          ) : (
            <div className="mb-8  text-[20px] leading-[1.7rem] ">
              <p className="inline text-[#99cc00]">{text.slice(0, length)}</p>
              <p className="underline inline text-[#99cc00]">
                {curString.slice(0, pointer)}
              </p>
              <p className="inline text-black bg-red-300 underline">
                {curString.slice(
                  pointer,
                  input.length >= curString.length
                    ? input.length - k - 1
                    : input.length - k
                )}
              </p>
              <p className="inline text-black bg-red-300 underline">
                {curString.slice(
                  input.length >= curString.length
                    ? input.length - k - 1
                    : input.length - k,
                  input.length >= curString.length
                    ? input.length - k
                    : input.length - k
                )}
              </p>
              <p className="inline underline text-black">
                {curString.slice(input.length, curString.length - 1)}
              </p>
              <p className="inline">
                {curString.slice(curString.length - 1, curString.length)}
              </p>
              <p className="inline text-black bg-red-300">
                {text.slice(
                  length + curString.length,
                  length + curString.length + k
                )}
              </p>
              <p className="inline text-black">
                {text.slice(length + curString.length + k, text.length)}
              </p>
            </div>
          )}
          <input
            value={input}
            className={cn(
              "w-full outline mb-4 text-[20px] px-[0.2rem]",
              input.length > pointer ? "bg-red-300" : "bg-white",
              input.length > pointer ? "text-black" : "text-gray-800"
            )}
            placeholder="Type the above text"
            onChange={(i) => {
              if (!start) {
                setStart(1);
                startTimer();
              }
              if (start == -1) return;
              setInput(i.target.value);
            }}
          />
        </div>
      )}
      <div className="flex mb-4 justify-end">
        <Button onClick={startNewRace}>New race</Button>
      </div>

      {start == -1 && (
        <Results stopwatch={stopwatch} wpm={wpm} accuracy={accuracy} />
      )}
    </div>
  );
};
