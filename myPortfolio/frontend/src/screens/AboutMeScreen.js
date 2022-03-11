import { Heading, Flex, Link, Icon, Box, Text, Button } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import PopUpScreen from "../components/PopUpScreen";
import ResumeScreen from "../components/ResumeScreen";
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

const AboutScreen = ({ fn }) => {
  return (
    <>
      <section id="about">
        <Box>
          <Flex justifyContent="center">
            <Heading
              color="white"
              as="h3"
              fontSize="30"
              fontWeight="bold"
              textAlign="center"
            >
              Let me introduce myself
            </Heading>
          </Flex>
          <Flex justifyContent="center" color="yellow.400">
            <Text fontWeight="bold" textAlign="center" fontSize="18px">
              Diligent and driven programmer looking to leverage excellent
              programming skills.
              <br /> I have a strong passion for anything web related, mostly
              developing website. Eager to further develop new skills
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            fontSize="28"
            fontWeight="semibold"
            mt="5"
            color="white"
          >
            <Text>Full Stack Developer</Text>
          </Flex>
          <Flex justifyContent="center" gap="10" mt="3">
            <PopUpScreen />

            <ResumeScreen />
          </Flex>
          <Flex justifyContent="center" mt="8">
            <Text fontWeight="bold" fontSize="xl" mt="5" color="white">
              My Services
            </Text>
          </Flex>
          <Flex justifyContent="center">
            <Icon as={AiFillCaretDown} h="10" w="10" color="white" />
          </Flex>
        </Box>
      </section>
    </>
  );
};
export default AboutScreen;
