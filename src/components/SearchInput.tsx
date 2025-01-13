import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

import { InputGroup } from "./ui/input-group";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<LuSearch />} width="full">
        <Input ref={ref} placeholder="Search games..." borderRadius={30} />
      </InputGroup>
    </form>
  );
}
