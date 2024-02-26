import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IconBrandGithub, IconBrandTelegram } from "@tabler/icons";

function Contact() {
  const url = "https://api.github.com/users/sogeking7";
  const [github, setGithub] = useState({});
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setGithub(response.data);
    });
  }, []);

  return (
    <Flex gap="1rem" p="1rem" borderRadius="md">
      <Flex flexDirection="column">
        <Box p="0">
          <Flex flexWrap="wrap" gap=".5rem">
            <a href="https://github.com/sogeking7">
              <Button colorScheme="yellow" gap=".5rem" size="sm">
                <IconBrandGithub />
                {github.login}
              </Button>
            </a>
            <a href="https://t.me/kair011a">
              <IconButton
                size="sm"
                icon={<IconBrandTelegram />}
                colorScheme="telegram"
              />
            </a>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Contact;
