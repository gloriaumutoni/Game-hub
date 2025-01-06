import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function GameCardContainer({ children }: PropsWithChildren) {
  return (
    <Box width="270px" overflow="hidden">
      {children}
    </Box>
  );
}
