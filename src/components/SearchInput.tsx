import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

import { InputGroup } from "./ui/input-group";

export default function SearchInput() {
  return (
    <InputGroup startElement={<LuSearch />} width="9/12">
      <Input placeholder="Search games..." borderRadius={30} />
    </InputGroup>
  );
}
