import { Card, For, HStack, Image, SimpleGrid } from "@chakra-ui/react";

import getCroppedImageUrl from "../hooks/imageUrl";
import useGames from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

export default function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid paddingY={4} columns={{ sm: 1, md: 3, lg: 3, xl: 4 }} gap={6}>
        <For each={games}>
          {(game) => (
            <Card.Root key={game.id} width="270px" overflow="hidden">
              <Image src={getCroppedImageUrl(game.background_image)} />
              <Card.Body padding={3}>
                <Card.Title fontSize="lg">{game.name}</Card.Title>
                <HStack justifyContent="space-between" paddingY={2}>
                  <PlatformIconList
                    platform={game.parent_platforms.map(
                      (platform) => platform.platform,
                    )}
                  />
                  <CriticScore score={game.metacritic} />
                </HStack>
              </Card.Body>
            </Card.Root>
          )}
        </For>
      </SimpleGrid>
    </>
  );
}
