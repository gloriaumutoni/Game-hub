import { CanceledError } from "axios";
import { useEffect, useState } from "react";

import apiClient from "../services/api-client";
import { FetchGenreResponse, GenreProps } from "../util/api";

export default function useGenre() {
  const [genre, setGenre] = useState<GenreProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { genre, error, isLoading };
}
