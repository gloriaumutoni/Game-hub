import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";

import getCroppedImageUrl from "../hooks/imageUrl";
import useGenre from "../hooks/useGenre";
import { GenreProps } from "../util/api";

interface Props {
  onSelectGenre: (genre: GenreProps) => void;
  selectedGenre: GenreProps | null;
}

export default function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading size="2xl" marginBottom="4">
        Genres
      </Heading>
      <List.Root gap={2}>
        {data.map((genre) => (
          <List.Item key={genre.id} listStyleType="none">
            <HStack gap={0}>
              <Image
                boxSize="38px"
                borderRadius={8}
                bgImage="cover"
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Button
                fontSize="lg"
                variant="plain"
                whiteSpace="normal"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}
