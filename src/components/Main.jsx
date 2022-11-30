import { Box, useColorModeValue, Text, Input } from "@chakra-ui/react";

export default function Main({
  input,
  setInput,
  text,
  index,
  red,
  race,
  setRace,
  colorMode,
  restart,
}) {
  const colorTxt = useColorModeValue("#84cc16", "#84cc16");
  const bgCursor = useColorModeValue('black', 'white')
  return (
    <Box
      maxW="800px"
      className="mx-auto"
      bgColor={useColorModeValue("#eff6ff", "black")}
      borderWidth={colorMode === 'dark' ? '0px' : '1px'}
      p="1.5rem"
      borderRadius="lg"
    >
      <Text lineHeight="1.7rem" fontSize="1.2rem" mb="1rem" position="relative">
        <p className="relative">
          {text.map((word, id) => {
            if (id < index) {
              return (
                <Text
                  key={id}
                  display='inline'
                  position='relative'
                  bottom='0'
                  right='0'
                  color={colorTxt}
                >
                  {word}
                </Text>
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
                <Text key={id} position='relative' display='inline-block'>
                  <Text color={colorTxt} display='inline'>
                    {p1}
                  </Text>
                  <span className="text-black bg-red-300">{p2}</span>
                  <Box w='.1px' h='23px' position='absolute' top='0' display='inline-block' bgColor={bgCursor}></Box>
                  <pre className="inline-block">{p3}</pre>
                </Text>
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
