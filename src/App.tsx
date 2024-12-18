import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="red">
          <NavBar />
        </GridItem>
        {useBreakpointValue({ base: false, lg: true }) && (
          <GridItem area="aside" bg={`yellow`}>
            Aside
          </GridItem>
        )}
        <GridItem area={`main`} bg={`pink.50`}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}
