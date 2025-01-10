import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

import { InputGroup } from "./ui/input-group";

export default function SearchInput() {
  return (
    <InputGroup startElement={<LuSearch />}>
      <Input placeholder="Search content..." borderRadius={30} />
    </InputGroup>
  );
}
