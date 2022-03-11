import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutMeScreen";
import MyPort from "./MyPortfoliScreen";
import { Flex, Link, Button, Stack } from "@chakra-ui/react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useRef } from "react";

const MainScreen = () => {
  const homescreen = useRef();

  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Flex
          display="flex"
          bgColor="white"
          w="100%"
          zIndex={2}
          as="main"
          direction="column"
          minH="xl"
          py="6"
          px="6"
          mt="85px"
          // border="1px solid black"
          justifyContent="center"
        >
          <HomeScreen />
        </Flex>
      </section>

      <section>
        <Flex
          display="flex"
          bgColor="black"
          // border="1px solid black"
          justifyContent="center"
          w="100%"
          zIndex={2}
          as="main"
          direction="column"
          mt="0"
          minH="xl"
          py="6"
          px="6"
        >
          <AboutScreen />
        </Flex>
      </section>
      <section>
        <Flex
          display="flex"
          bgColor="white"
          justifyContent="center"
          w="100%"
          zIndex={2}
          as="main"
          direction="column"
          mt="0"
          minH="xl"
          py="6"
          px="6"
        >
          <MyPort />
        </Flex>
      </section>
      <Footer />
    </>
  );
};
export default MainScreen;
