import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { useSongLyrics } from 'hooks/useSongLyrics';
import { SongHeader } from 'components/atoms/SongHeader';
import { SongHeaderLoader } from 'components/atoms/SongHeaderLoader';
import { AlternatelyLyrics } from 'components/molecules/AlternatelyLyrics';
import { AlternatelyLyricsLoader } from 'components/molecules/AlternatelyLyricsLoader';

type Props = {
  songId: string;
};

const SongLyricsContainer: FC<Props> = ({ songId }) => {
  const [{ song, lyrics, isLoading }] = useSongLyrics(songId);

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="1em"
    >
      {!isLoading && song != null ? (
        <SongHeader
          title={song.title}
          artistNames={song.artistNames}
          artImageUrl={song.songArtImageThumbnailUrl}
          margin="1em"
        />
      ) : (
        <SongHeaderLoader margin="1em" minW="5em" />
      )}

      {!isLoading && lyrics.length !== 0 ? (
        <AlternatelyLyrics morphemes={lyrics} />
      ) : (
        <AlternatelyLyricsLoader />
      )}
    </Flex>
  );
};

export { SongLyricsContainer };
