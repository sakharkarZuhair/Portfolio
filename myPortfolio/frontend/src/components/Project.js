import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Image, Flex, Heading, Text } from "@chakra-ui/react";

const Project = ({ product }) => {
  return (
    <Flex justifyContent="center">
      <a href={product.link} target="_blank">
        <Box _hover={{ textDecor: "none" }}>
          <Box
            maxW="sm"
            borderRadius="lg"
            overflow="hidden"
            bgColor="white"
            transition="all"
            _hover={{ shadow: "md", bg: "black", color: "white" }}
          >
            <Image
              src={product.image}
              alt={product.name}
              minH="360px"
              objectFit="cover"
            />
            <Flex
              py="5"
              px="4"
              direction="column"
              justifyContent="space-between"
            >
              <Heading as="h4" mb="3" fontSize="lg">
                {product.name}
              </Heading>
              <Flex>{product.description}</Flex>
            </Flex>
          </Box>
        </Box>
      </a>
    </Flex>
  );
};

export default Project;
