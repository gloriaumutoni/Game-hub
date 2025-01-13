import { Switch } from "@/components/ui/switch";
import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { useColorMode } from "./ui/color-mode";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function NavBar({ onSearch }: Props) {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack paddingX="7" paddingY="3">
      <Image src={logo} boxSize="50px" />
      <SearchInput onSearch={onSearch} />
      <Switch whiteSpace="nowrap" onChange={toggleColorMode}>
        {colorMode} Mode
      </Switch>
    </HStack>
  );
}
