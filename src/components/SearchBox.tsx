import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchBox({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
      style={{ width: "100%" }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search games..."
          borderRadius="30px"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchBox;
