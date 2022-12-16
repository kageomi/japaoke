import { FC, memo } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import { MorphemeTextLoader } from 'components/atoms/MorphemeTextLoader';
import { Spacer } from '../atoms/Spacer';

const AlternatelyLyricsLoader: FC<FlexProps> = memo((props) => {
  const random = (max: number, min: number) =>
    Math.round(Math.random() * (max - min) + min);
  const morphemes = [...Array<null>(40)].map((_, i) => (
    <MorphemeTextLoader key={i} minW={`${random(8, 1)}em`} mr="1em" mb="1em" />
  ));

  return (
    <Flex
      padding="2em"
      rounded="1em"
      bgColor="white"
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      gap="1em"
      {...props}
    >
      <Flex flexWrap="wrap">{morphemes}</Flex>
      <Spacer height="2em" />
      <Flex flexWrap="wrap">{morphemes}</Flex>
    </Flex>
  );
});

export { AlternatelyLyricsLoader };
