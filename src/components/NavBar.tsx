import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/video-game-logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchBox onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
