import { FC } from 'react';
import { Box, BoxProps, SkeletonText, SkeletonCircle } from '@chakra-ui/react';
import { H } from 'react-headings';

const SongHeaderLoader: FC<BoxProps> = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
      gap="2em"
      {...props}
    >
      <SkeletonCircle size="4em" />
      <Box minW="10em">
        <H>
          <SkeletonText noOfLines={1} skeletonHeight="2em" />
        </H>
        <SkeletonText mt="0.5em" noOfLines={1} skeletonHeight="1em" />
      </Box>
    </Box>
  );
};

export { SongHeaderLoader };
