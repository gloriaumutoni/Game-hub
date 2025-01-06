import { Grid, GridItem, Stack } from "@chakra-ui/react";

import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Stack hideBelow="md">
        <GridItem area="aside">Aside</GridItem>
      </Stack>
      <GridItem area="main" justifyItems="center">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
