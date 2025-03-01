import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;
