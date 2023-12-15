import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={['100%', '100%', '100%', '100%']}
      overflow="hidden"
      borderRadius={10}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
