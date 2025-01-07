import { GenreProps } from "../util/api";
import useData from "./useData";

export default function useGenre() {
  return useData<GenreProps>("/genres");
}
