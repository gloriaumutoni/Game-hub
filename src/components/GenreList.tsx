import useGenre from "../hooks/useGenre";

export default function GenreList() {
  const { genre } = useGenre();
  return (
    <ul>
      {genre.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
