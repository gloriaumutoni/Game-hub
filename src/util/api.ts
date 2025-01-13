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
  rating_top: number;
}
export interface GenreProps {
  id: number;
  name: string;
  image_background: string;
}

export interface GameQuery {
  genre: GenreProps | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
