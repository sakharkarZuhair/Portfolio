import { Flex, Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import products from "../products";
import Project from "../components/Project";

const MyPort = () => {
  return (
    <>
      <Box id="port">
        <Flex justifyContent="center">
          <Heading>Recent Works</Heading>
        </Flex>
        <Grid
          templateColumns={{ md: "repeat(1, 1fr)", sm: "repeat(1, 1fr)" }}
          gap="8"
          mt="8"
          fontWeight="bold"
        >
          {products.map((product) => (
            <Project key={product._id} product={product} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MyPort;
