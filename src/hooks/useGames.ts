import { GameProps } from "../util/api";
import useData from "./useData";

export default function useGames() {
  return useData<GameProps>("/games");
}
