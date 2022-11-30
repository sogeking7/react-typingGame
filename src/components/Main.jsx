import { Box, useColorModeValue, Text, Input } from "@chakra-ui/react";

export default function Main({
  input,
  setInput,
  text,
  index,
  red,
  race,
  setRace,
  restart,
}) {
  return (
    <Box
      maxW="800px"
      className="mx-auto"
      bgColor={useColorModeValue("white", "black")}
      p="1.5rem"
      borderRadius="lg"
    >
      <Text lineHeight="1.7rem" fontSize="1.2rem" mb="1rem" position="relative">
        <p className="relative">
          {text.map((word, id) => {
            if (id < index) {
              return (
                <pre
                  key={id}
                  className="text-lime-500 inline-block relative bottom-0 left-0 "
                >
                  {word}
                </pre>
              );
            } else if (id === index) {
              var k = -1;
              for (var i = 0; i < input.length; i++) {
                if (input[i] === word[i]) k = i;
                else break;
              }
              const p1 = word.slice(0, k + 1);
              const p2 = word.slice(k + 1, input.length);
              const p3 = word.slice(input.length, word.length);
              return (
                <h1 key={id} className="relative inline-block ">
                  <span className="text-lime-500">{p1}</span>
                  <span className="text-black bg-red-300">{p2}</span>
                  <span className="w-[.1px] h-[23px] absolute top-[0px] bg-white inline-block"></span>
                  <pre className="text-white inline-block">{p3}</pre>
                </h1>
              );
            } else {
              return <pre className="inline-block">{word}</pre>;
            }
          })}
        </p>
      </Text>

      <Input
        fontSize="1.2rem"
        bgColor={red ? "red.300" : ""}
        color={red ? "black" : ""}
        type="text"
        value={input}
        spellCheck="false"
        placeholder="Type the above text here when the race begins"
        onChange={(i) => {
          if (!race) {
            const time = new Date();
            setRace(1);
            time.setSeconds(time.getSeconds() + 180);
            restart(time);
          }
          setInput(i.target.value);
        }}
      />
    </Box>
  );
}
