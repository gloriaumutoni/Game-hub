import { GameProps, GameQuery } from "./../util/api";
import useData from "./useData";

export default function useGames(gameQuery: GameQuery) {
  return useData<GameProps>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery],
  );
}
