import { FC } from 'react';
import { Box, BoxProps, SkeletonText } from '@chakra-ui/react';
import { SKELETON_OPTIONS } from 'settings';

const MorphemeTextLoader: FC<BoxProps> = (props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      gap="0.1em"
      {...props}
    >
      <SkeletonText
        noOfLines={1}
        skeletonHeight="1em"
        width="100%"
        {...SKELETON_OPTIONS}
      />
      <SkeletonText
        mt="0.5em"
        noOfLines={1}
        skeletonHeight="0.5em"
        width="100%"
        {...SKELETON_OPTIONS}
      />
    </Box>
  );
};

export { MorphemeTextLoader };
