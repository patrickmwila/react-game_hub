import { Badge } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      colorScheme={score > 75 ? 'green' : score > 60 ? 'yellow' : ''}
      fontSize={15}
      paddingX={2}
      borderRadius={4}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
