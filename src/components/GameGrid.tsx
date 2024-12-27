import { useEffect, useState } from "react";

import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface GamesResponseProps {
  count: number;
  results: Game[];
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GamesResponseProps>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games && games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
}
