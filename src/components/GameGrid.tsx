import { Card, For, Image, SimpleGrid } from "@chakra-ui/react";

import useGames from "../hooks/useGames";

export default function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 3, xl: 5 }} gap={6}>
        <For each={games}>
          {(game) => (
            <Card.Root key={game.id} width="220px" overflow="hidden">
              <Image src={game.background_image} />
              <Card.Body padding="0">
                <Card.Title fontSize="2xs">{game.name}</Card.Title>
              </Card.Body>
            </Card.Root>
          )}
        </For>
      </SimpleGrid>
    </>
  );
}
