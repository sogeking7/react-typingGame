import NavBar from "./NavBar/NavBar";
import Wrapper from "./Wrapper/Wrapper";
import Footer from "./Footer/Footer";
import Title from "./Title/Title";
import { useState, useEffect } from "react";

const data = {
  text: `I can't believe the things I see. The path that I have chosen now has led me to a wall, and with each passing day I feel a little more like something dear was lost.`,  
};

var textList = data.text.split(" ");
for (var i = 0; i < textList.length; i++) {
  textList[i] += " ";
}
console.log(textList)
export default function App() {
  const [input, setInput] = useState("");
  const [pointer, setPointer] = useState(0)
  const [index, setIndex] = useState(0)
  const [start, setStart] = useState(0)
  const [red, setRed] = useState(0)
  useEffect(() => {
    if (!start) {
      setStart((new Date).getTime())
    }
     console.log(index, pointer, input, start)
    if (input.length <= textList[index].length) {
      if (input[input.length-1] == textList[index][input.length-1]) {
        setRed(0);
        setPointer(input.length)
        if (input === textList[index]) {
          setIndex(p=>p+1)
          setInput("")
        }
      } else {
        setRed(1);
      }
    } 
  }, [input]);

  return (
    <div>
      <NavBar />
      
      <div className="container mx-auto pt-10">
        <Title />
        <Wrapper
          red={red}
          input={input}
          setInput={setInput}
          text={textList}
          pointer={pointer}
          index={index}
        />
      </div>

      <Footer />
    </div>
  );
}
