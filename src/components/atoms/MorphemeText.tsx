import { ReactElement } from 'react';
import { Box, Text, BoxProps } from '@chakra-ui/react';
import { Morpheme } from 'types/Morphology';

type Props = {
  morpheme: Morpheme;
};

const MorphemeText = ({
  morpheme,
  ...props
}: Props & BoxProps): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      gap="0.1em"
      {...props}
    >
      <Text color="gray.400">{morpheme.surface}</Text>
      <Text fontSize="sm">{morpheme.roman}</Text>
    </Box>
  );
};

export { MorphemeText };
