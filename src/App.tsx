import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { useState } from "react";

import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { GenreProps } from "./util/api";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreProps | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Stack hideBelow="md">
        <GridItem area="aside" paddingX={7}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Stack>
      <GridItem area="main" justifyItems="center">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}
