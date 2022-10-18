import Counter from "./Counter/Counter";
import NavBar from "./NavBar/NavBar";
import Wrapper from "./Wrapper/Wrapper";
import Footer from "./Footer/Footer";
import Title from "./Title/Title";
import { useState } from "react";
import { useEffect } from "react";

const data = {
  text: `I know just how to whisper and I know just how to cry. I know just where to find the answers and I know just how to lie. I know just how to fake it and I know just how to scheme. I know just when to face the truth and then I know just when to dream.`,
};
var l = 0;
export default function App() {
  const [done, setDone] = useState(0);
  const [input, setInput] = useState("");
  const [pointer, setPointer] = useState(0);
  const textArray = data.text.split(" ");
  const [warning, setWarning] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [start, setStart] = useState(0);

  function diff_minutes(dt2, dt1) {
    var diff = (dt1.getTime() - dt2.getTime()) / 1000;
    return diff;
  }

  useEffect(() => {
    if (!start) {
      setStart(new Date());
    }
    const cur = textArray[pointer];
    if (pointer + 1 == textArray.length && input == cur) {
      l += cur.length;
      setInput("");
      setDone(1);
    } else if (input.length - 1 === cur.length && input.slice(0, -1) === cur) {
      l += cur.length;
      setInput("");
      setPointer((p) => p + 1);
    }
    var flag = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i] !== cur[i]) {
        flag = 1;
        setWarning(1);
        break;
      }
    }

    if (!flag) {
      setWarning(0);
    }
  }, [input]);

  return (
    <div>
      <NavBar />

      <div className="container mx-auto pt-10">
        <Title />
        <Wrapper
          speed={speed}
          input={input}
          start={start}
          setPointer={setPointer}
          textArray={textArray}
          setInput={setInput}
          text={textArray}
          pointer={pointer}
          warning={warning}
          done={done}
        />
      </div>

      <Footer />
    </div>
  );
}
