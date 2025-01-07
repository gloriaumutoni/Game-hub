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
  metacritic: number;
}

export interface GamesResponseProps {
  count: number;
  results: GameProps[];
}

export interface GenreProps {
  id: number;
  name: string;
}

export interface FetchGenreResponse {
  count: number;
  results: GenreProps[];
}
