import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

import getCroppedImageUrl from "../hooks/imageUrl";
import useGenre from "../hooks/useGenre";

export default function GenreList() {
  const { data, isLoading } = useGenre();

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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}
