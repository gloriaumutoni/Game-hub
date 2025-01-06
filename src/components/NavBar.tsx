import { Switch } from "@/components/ui/switch";
import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import { useColorMode } from "./ui/color-mode";

export default function NavBar() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack
      bgColor="black"
      justifyContent="space-between"
      paddingX="7"
      paddingY="3"
    >
      <Image src={logo} boxSize="50px" />
      <Switch onChange={toggleColorMode}>{colorMode} Mode</Switch>
    </HStack>
  );
}
