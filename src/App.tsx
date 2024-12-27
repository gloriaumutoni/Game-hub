import { Grid, GridItem, Stack } from "@chakra-ui/react";

import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="red">
        <NavBar />
      </GridItem>
      <Stack hideBelow="md">
        <GridItem area="aside">Aside</GridItem>
      </Stack>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}
