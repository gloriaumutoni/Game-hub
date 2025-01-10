import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function GameCardContainer({ children }: PropsWithChildren) {
  return <Box overflow="hidden">{children}</Box>;
}
