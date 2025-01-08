import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

import getCroppedImageUrl from "../hooks/imageUrl";
import useGenre from "../hooks/useGenre";
import { GenreProps } from "../util/api";

interface Props {
  onSelectGenre: (genre: GenreProps) => void;
}

export default function GenreList({ onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />

            <Button
              fontSize="lg"
              variant="plain"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}
