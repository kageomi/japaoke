import { FC } from 'react';
import { Text, Box, Image, BoxProps } from '@chakra-ui/react';
import { H } from 'react-headings';

type Props = {
  title: string;
  artistNames: string;
  artImageUrl: string;
};

const SongHeader: FC<Props & BoxProps> = ({
  title,
  artistNames,
  artImageUrl,
  ...props
}) => {
  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
      gap="2em"
      {...props}
    >
      <Image
        width="4em"
        height="4em"
        borderRadius="full"
        src={artImageUrl}
        alt={title}
        boxShadow="md"
      />
      <Box>
        <H>
          <Text fontSize="2em">{title}</Text>
        </H>
        <Text fontSize="1em" color="gray.600">
          {artistNames}
        </Text>
      </Box>
    </Box>
  );
};

export { SongHeader };
