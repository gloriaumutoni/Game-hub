import { CanceledError } from "axios";
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

export default function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GamesResponseProps>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
}
