import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  //Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  //const { data, error, isLoading } = useGenres();
  const { data } = useGenres();

  //if (error) return null;
  //if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom="10px">
        Genres
      </Heading>
      <List>
        {data.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="8px"
                objectFit="cover"
                src={getCroppedImageUrl(g.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                variant="link"
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(g)}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
