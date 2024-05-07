import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box width="260px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;
