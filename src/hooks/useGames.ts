import { GameProps, GenreProps } from "./../util/api";
import useData from "./useData";

export default function useGames(selectedGenre: GenreProps | null) {
  return useData<GameProps>(
    "/games",
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id],
  );
}
