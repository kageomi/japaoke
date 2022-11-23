import { FC } from 'react';
import { SlideFade, Flex, Box } from '@chakra-ui/react';
import { H } from 'react-headings';
import { Logo } from 'components/atoms/Logo';
import { SongSearchConteiner } from 'components/organismus/SongSearchContainer';

const Top: FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Flex
        padding="2em"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <SlideFade in={true} offsetY="10em">
          <H>
            <Logo />
          </H>
        </SlideFade>
        <Box fontSize={['sm', 'md', 'md', 'xl']} fontWeight="bold">
          let&apos;s get Romaj lyrics &#127925; &#127800;
        </Box>
      </Flex>

      <Box minW="50%" maxW="800px" width="100%">
        <SongSearchConteiner />
      </Box>

      <Box color="gray.500" fontSize="0.7em" padding="2em">
        This wep page is made for helping non japanese mother tongue singing
        Japanese songs.
        <br />
        Japanese has three writing systems.
        <br />
        Especially it&apos;s difficult to read Kanjis properly and sing a song
        if you get only lyrics in Kanji.
        <br />
        So you can check Romaji lyrics of Japanese songs here.
      </Box>
    </Flex>
  );
};

export default Top;
