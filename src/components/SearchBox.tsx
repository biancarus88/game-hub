import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

function SearchBox() {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        placeholder="Search games..."
        borderRadius="30px"
        variant="filled"
      />
    </InputGroup>
  );
}

export default SearchBox;
