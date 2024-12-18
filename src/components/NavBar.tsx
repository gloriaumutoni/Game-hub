import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

export default function NavBar() {
  return (
    <>
      <HStack bgColor="red.200">
        <Image src={logo} boxSize="50px" />
        <Text>NavBar</Text>
      </HStack>
    </>
  );
}
