import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

function SortSelector({ selectedSortOrder, onSelectSortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (s) => s.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((s) => (
          <MenuItem
            key={s.value}
            value={s.value}
            onClick={() => onSelectSortOrder(s.value)}
          >
            {s.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
