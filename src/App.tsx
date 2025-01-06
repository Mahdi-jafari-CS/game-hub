import { Button, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import NavBar from "./components/custom/NavBar";


function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Stack hideBelow="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Stack>

      <GridItem area="main" bg="dedgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
