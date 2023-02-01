import { useState } from "react";
import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Nav from "./Component/Nav";
import Container from "./Component/Container";
import Footer from "./Component/Footer";


function App() {
  return (
    <>
    
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="100vh"
        gap="1"
        color="blackAlpha"
        fontWeight="bold"
      >
        <GridItem pl="2" p={50} bg={"333"} area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl={2} area={"header"}>
          <Footer />
        </GridItem>
        <GridItem pl="2"  area={"main"}>
          <Container/>
        </GridItem>
        <GridItem pl="2"  area={"footer"}>
          <Footer/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;