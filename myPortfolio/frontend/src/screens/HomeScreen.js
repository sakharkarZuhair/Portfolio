import { Heading, Flex, Link, Button, Icon, Box, Text } from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

const MenuItems = ({ children, url }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize="md"
      letterSpacing="wide"
      color="black"
      fontWeight="bold"
      mr="5"
      display="block"
      mt={{ base: "4", md: "0" }}
    >
      {children}
    </Link>
  );
};

const HomeScreen = ({ fn }) => {
  return (
    <>
      <Box>
        <Flex justifyContent="center">
          <Heading color="black" as="h2">
            Hello I'm,
          </Heading>
        </Flex>
        <Flex justifyContent="center">
          <Heading color="black" as="h2">
            Zuhair Sakharkar
          </Heading>
        </Flex>
        <Flex justifyContent="center" p="7">
          <MenuItems url="#" flexWrap="wrap">
            <Icon as={AiOutlineLinkedin} w="8" h="8" mr="1" />
          </MenuItems>

          <MenuItems url="#" flexWrap="wrap">
            <Icon as={AiOutlineInstagram} w="8" h="8" mr="1" />
          </MenuItems>
        </Flex>
        <Flex justifyContent="center">
          <Text fontWeight="bold" fontSize="xl" mt="5" color="black">
            About Me
          </Text>
        </Flex>
        <Flex justifyContent="center">
          <Icon as={AiFillCaretDown} h="10" w="10" color="black" />
        </Flex>
      </Box>
    </>
  );
};

export default HomeScreen;
