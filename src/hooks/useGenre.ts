import genre from "../data/genre";

export default function useGenre() {
  return { data: genre, isLoading: false, error: null };
}
