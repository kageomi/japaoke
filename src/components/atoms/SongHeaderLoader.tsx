import { FC } from 'react';
import { Box, BoxProps, SkeletonText, SkeletonCircle } from '@chakra-ui/react';
import { H } from 'react-headings';
import { SKELTON_OPTIONS } from 'settings';

const SongHeaderLoader: FC<BoxProps> = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
      gap="2em"
      {...props}
    >
      <SkeletonCircle size="4em" {...SKELTON_OPTIONS} />
      <Box minW="10em">
        <H>
          <SkeletonText
            noOfLines={1}
            skeletonHeight="2em"
            {...SKELTON_OPTIONS}
          />
        </H>
        <SkeletonText
          mt="0.5em"
          noOfLines={1}
          skeletonHeight="1em"
          {...SKELTON_OPTIONS}
        />
      </Box>
    </Box>
  );
};

export { SongHeaderLoader };
