import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  sortOrder: string;
}

export default function SortSelector({ onSelectOrder, sortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by: {currentSortOrder?.label || "Relevance"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent position={"absolute"} placeContent="top">
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}
