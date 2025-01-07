import { SimpleGrid } from "@chakra-ui/react";

import useData from "../hooks/useData";
import { GameProps } from "../util/api";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
  const { data, error, isLoading } = useData<GameProps>("/games");
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid paddingY={4} columns={{ sm: 1, md: 3, lg: 3, xl: 4 }} gap={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
