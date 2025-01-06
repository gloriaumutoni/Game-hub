import { CanceledError } from "axios";
import { useEffect, useState } from "react";

import apiClient from "../services/api-client";
import { GameProps, GamesResponseProps } from "../util/api";

export default function useGames() {
  const [games, setGames] = useState<GameProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GamesResponseProps>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
}
