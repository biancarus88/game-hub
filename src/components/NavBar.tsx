import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/video-game-logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

function NavBar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchBox />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
