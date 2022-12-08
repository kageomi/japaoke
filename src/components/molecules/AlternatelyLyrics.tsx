import { FC, memo } from 'react';
import { getSentencesForDisplay } from 'util/lyrics';
import { Flex, FlexProps } from '@chakra-ui/react';
import { Morpheme } from 'types/Morphology';
import { MorphemeText } from '../atoms/MorphemeText';
import { Spacer } from '../atoms/Spacer';

type Props = {
  morphemes: Morpheme[];
};

const AlternatelyLyrics: FC<Props & FlexProps> = memo(
  ({ morphemes, ...props }) => {
    const sentences = getSentencesForDisplay(morphemes);
    const sentenceItems = sentences.map((sentence, index) => {
      if (!sentence.length) return <Spacer key={index} height="2em" />;

      return (
        <Flex flexWrap="wrap" key={index}>
          {sentence.map((morpheme, mIndex) => (
            <MorphemeText
              key={`${morpheme.surface}-${index}-${mIndex}`}
              morpheme={morpheme}
              minWidth={`${morpheme.surface.length}em`}
              marginRight={morpheme.isClauseEnd ? '2em' : '0.5em'}
            />
          ))}
        </Flex>
      );
    });

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
        {sentenceItems}
      </Flex>
    );
  }
);

export { AlternatelyLyrics };
