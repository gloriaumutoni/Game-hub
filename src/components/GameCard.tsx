import { Card, HStack, Image } from "@chakra-ui/react";

import getCroppedImageUrl from "../hooks/imageUrl";
import { GameProps } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: GameProps;
}

export default function GameCard({ game }: Props) {
  return (
    <Card.Root key={game.id}>
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
  );
}
