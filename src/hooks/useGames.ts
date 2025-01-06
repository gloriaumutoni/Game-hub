import { CanceledError } from "axios";
import { useEffect, useState } from "react";

import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface GameProps {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface GamesResponseProps {
  count: number;
  results: GameProps[];
}

export default function useGames() {
  const [games, setGames] = useState<GameProps[]>([]);
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
