import Counter from "./Counter/Counter";
import NavBar from "./NavBar/NavBar";
import Wrapper from "./Wrapper/Wrapper";
import Footer from "./Footer/Footer";
import Title from "./Title/Title";
import { useState } from "react";
import { useEffect } from "react";
import RaceLine from "./RaceLine/RaceLine";

const data = {
  text: `If a man's wearing his pants on his head or if he says his words backwards from time to time, you know it's all laid out there for you. But if he's friendly to strangers and keeps his home spick-and-span, more often than not he's done something even his own ma couldn't forgive.`,

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
  
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [timer, setTimer] = useState(0);
  const [move, setMove] = useState(0)
  
  console.log(move)
  function diff_minutes(dt2, dt1) {
    var diff = (dt1.getTime() - dt2.getTime()) / 1000;
    return diff / 60;
  }

  useEffect(() => {
    var po = false;
    const cur = textArray[pointer];
    if (pointer + 1 == textArray.length && input == cur) {
      l += cur.length;
      setInput("", 5000);
      po = true;
      setDone(1);
      setMove(prev => prev + 378.28/textArray.length + (168/textArray.length))
      setSpeed(Math.round((l / 5) / diff_minutes(start, new Date)))
    } else if (input.length - 1 === cur.length && input.slice(0, -1) === cur) {
      l += cur.length;
      setInput("");
      po = true;
      setPointer((p) => p + 1);
      setMove(prev => prev + 378.28/textArray.length + (168/textArray.length))
      console.log(move)
    }
    var flag = 0;
    for (var i = 0; i < input.length; i++) {
      if (!start) {
        setStart(new Date());
      }
      if (input[i] != cur[i]) {

        flag = 1;
        break;
      }
    }
    if (po || done) flag = 0;
    setWarning(flag);
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
          move={move}
        />
      </div>

      <Footer />
    </div>
  );
}
