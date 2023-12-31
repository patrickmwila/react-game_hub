import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useGames, { Platform } from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding="10px"
      >
        {isLoading
          ? skeletons.map((s) => (
              <GameCardContainer key={s}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : data.map((game) => (
              <GameCardContainer key={game.name}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
