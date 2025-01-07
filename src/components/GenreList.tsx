import { HStack, Image, List, Text } from "@chakra-ui/react";

import getCroppedImageUrl from "../hooks/imageUrl";
import useGenre from "../hooks/useGenre";

export default function GenreList() {
  const { data } = useGenre();

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
