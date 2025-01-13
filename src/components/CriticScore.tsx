import { Badge } from "@chakra-ui/react";

interface Prop {
  score: number;
}
export default function CriticScore({ score }: Prop) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorPalette={color} paddingX={2} borderRadius="xs">
      {score}
    </Badge>
  );
}
