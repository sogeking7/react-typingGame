import React from "react";

function Wrapper({ input, setInput, text, index, red}) {
  return (
    <div style={{ width: "800px" }} className="mx-auto">
      <div className="bg-zinc-800 text-white px-5 py-6 rounded-lg mx-auto">
        <p className="mb-7 text-xl  leading-6 font-sans">
          {text.map((word, id) => {
            if (id < index) {
              return (
                <span key={id} className="text-lime-500">
                  {word}
                </span>
              );
            } else if (id == index) {
              var k = -1;
              for (var i = 0; i < input.length; i++) {
                if (input[i] == word[i]) {
                  k = i;
                } else {
                  break
                }
              }
              const p1 = word.slice(0, k+1);
              const p2 = word.slice(k+1, input.length)
              const p3 = word.slice(input.length, word.length);
              return (
                <span key={id} className="text-lime-500">
                  {p1}
                  <span className="text-black bg-red-300">{p2}</span>
                  <span className="text-white">{p3}</span>
                </span>
              );
            } else {
              return <span key={id}>{word}</span>;
            }
          })}
        </p>

        <input
          className={`mb-5 w-full bg-zinc-900 py-1 placeholder:text-gray-300 text-xl ${red ? 'bg-red-300 text-black' : ''}`}
          type="text"
          value={input}
          spellCheck="false"
          placeholder="Type the above text here when the race begins"
          onChange={(i) => setInput(i.target.value)}

        />
      </div>
    </div>
  );
}

export default Wrapper;
