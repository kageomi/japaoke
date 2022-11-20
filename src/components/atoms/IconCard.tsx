import { ReactElement } from 'react';
import { Box, Image, Text, BoxProps } from '@chakra-ui/react';

type Props = {
  title: string;
  subTitle: string;
  imageUrl: string;
};

const IconCard = ({
  title,
  subTitle,
  imageUrl,
  ...props
}: Props & BoxProps): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
      padding="0.5em"
      gap="1em"
      {...props}
    >
      <Image width="2em" height="2em" borderRadius="full" src={imageUrl} />
      <Box>
        <Text fontSize="sm">{title}</Text>
        <Text fontSize="xs" color="gray.600">
          {subTitle}
        </Text>
      </Box>
    </Box>
  );
};

export default IconCard;
