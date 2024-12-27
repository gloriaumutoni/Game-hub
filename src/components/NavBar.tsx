import { Switch } from "@/components/ui/switch";
import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import { useColorMode } from "./ui/color-mode";

export default function NavBar() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack bgColor="red.200" justifyContent="space-between" paddingX="7">
      <Image src={logo} boxSize="50px" />
      <Switch onChange={toggleColorMode}>{colorMode} Mode</Switch>
    </HStack>
  );
}
