import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutMeScreen";
import MyPort from "./screens/MyPortfoliScreen";
import Main from "./screens/Main";
import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Flex direction="column">
        <Main />
      </Flex>
    </>
  );
};

export default App;
