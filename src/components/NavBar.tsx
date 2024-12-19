import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

export default function NavBar() {
  return (
    <>
      <HStack bgColor="red.200">
        <Image src={logo} boxSize="50px" />
        <ColorModeButton />
        <Text>NavBar</Text>
      </HStack>
    </>
  );
}
