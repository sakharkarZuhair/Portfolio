import { useState } from "react";
import { Flex, Heading, Link, Box, Icon, Button, Text } from "@chakra-ui/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const MenuItems = ({ children, url }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize="md"
      letterSpacing="wide"
      color="whiteAlpha.600"
      fontWeight="bold"
      mr="5"
      display="block"
      _hover={{ color: "whiteAlpha.800" }}
      mt={{ base: "4", md: "0" }}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="black"
      w="100%"
      top="0"
      zIndex="2"
      pos="fixed"
    >
      <Flex align="center" mr="5">
        <Heading
          as="h1"
          color="gray"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
        >
          <Link
            as={RouterLink}
            to="/"
            _hover={{ color: "yellow.400", textDecor: "none" }}
          >
            Zuhair
          </Link>
        </Heading>
      </Flex>

      <Box
        display={{ base: "block", md: "none", sm: "block" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color="white" w="6" h="6" />
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        letterSpacing="wide"
        gap="2"
      >
        <Menu>
          <MenuButton
            colorScheme="gray.800"
            _focus={{ boxShadow: "none" }}
            _expanded={{ bg: "white", color: "black" }}
            _hover={{ bg: "yellow.400", color: "black" }}
            color="whiteAlpha.600"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            <Flex alignItems="center">
              <Icon as={BsPhone} w="5" h="5" mr="1" /> Phone
            </Flex>
          </MenuButton>
          <MenuList p="2">
            <Text>+91 9082674090</Text>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            colorScheme="gray.800"
            _focus={{ boxShadow: "none" }}
            _expanded={{ bg: "white", color: "black" }}
            _hover={{ bg: "yellow.400", color: "black" }}
            color="whiteAlpha.600"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            <Flex alignItems="center">
              <Icon as={GrMail} w="5" h="5" mr="1" /> Email
            </Flex>
          </MenuButton>
          <MenuList p="2">
            <Text>sakharkarzuhair210@gmail.com</Text>
          </MenuList>
        </Menu>

        {/* <Menu>
          <MenuButton
            colorScheme="gray.800"
            _focus={{ boxShadow: "none" }}
            _expanded={{ bg: "white", color: "black" }}
            _hover={{ bg: "yellow.400", color: "black" }}
            color="whiteAlpha.600"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            <Flex alignItems="center">
              <Icon as={AiFillGithub} w="5" h="5" mr="1" /> GitHub
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to="#">
              GitHub Link
            </MenuItem>
          </MenuList>
        </Menu> */}
      </Box>
    </Flex>
  );
};

export default Header;
