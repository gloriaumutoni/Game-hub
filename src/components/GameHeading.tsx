import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../util/api";

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const headingValue = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Game`;

  return (
    <Heading size="4xl" marginY={5}>
      {headingValue}
    </Heading>
  );
}
