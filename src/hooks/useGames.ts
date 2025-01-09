import { GameProps, GenreProps, Platform } from "./../util/api";
import useData from "./useData";

export default function useGames(
  selectedGenre: GenreProps | null,
  selectedPlatform: Platform | null,
) {
  return useData<GameProps>(
    "/games",
    {
      params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
    },
    [selectedGenre?.id, selectedPlatform?.id],
  );
}
