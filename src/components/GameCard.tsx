import { Card, HStack, Image } from "@chakra-ui/react";

import getCroppedImageUrl from "../hooks/imageUrl";
import { GameProps } from "../util/api";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: GameProps;
}

export default function GameCard({ game }: Props) {
  return (
    <Card.Root key={game.id} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body padding={3}>
        <HStack justifyContent="space-between" paddingY={2}>
          <PlatformIconList
            platform={game.parent_platforms.map(
              (platform) => platform.platform,
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title fontSize="lg">{game.name}</Card.Title>
        <Emoji rating={game.rating_top} />
      </Card.Body>
    </Card.Root>
  );
}
