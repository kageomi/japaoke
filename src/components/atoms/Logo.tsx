import { ReactElement } from 'react';
import { Text, ChakraProps } from '@chakra-ui/react';

type Props = {
  isSmall?: boolean;
};

const Logo = ({
  isSmall = false,
  ...props
}: Props & ChakraProps): ReactElement => {
  const fontSize = isSmall
    ? ['xl', 'xl', 'xl', 'xl']
    : ['4xl', '6xl', '8xl', '8xl'];

  return (
    <Text
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      fontSize={fontSize}
      fontWeight="extrabold"
      {...props}
    >
      JAPAOKE
    </Text>
  );
};

export { Logo };
