import { Card, For, Icon, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { FaAndroid, FaPlaystation, FaWindows } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import useGames from "../hooks/useGames";

export default function GameGrid() {
  const { games, error } = useGames();

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

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
                {game.parent_platforms.map(({ platform }) => {
                  const PlatformIcon = iconMap[platform.slug];
                  return (
                    <Stack direction="row">
                      <Icon key={platform.id} flex={"content"}>
                        <PlatformIcon />
                      </Icon>
                    </Stack>
                  );
                })}
              </Card.Body>
            </Card.Root>
          )}
        </For>
      </SimpleGrid>
    </>
  );
}
