import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { useSongLyrics } from 'hooks/useSongLyrics';
import { SongHeader } from 'components/atoms/SongHeader';
import { AlternatelyLyrics } from 'components/molecules/AlternatelyLyrics';

type Props = {
  songId: string;
};

const SongLyricsContainer: FC<Props> = ({ songId }) => {
  const [{ song, lyrics }] = useSongLyrics(songId);

  if (song == null) return <></>;

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="1em"
    >
      <SongHeader
        title={song.title}
        artistNames={song.artistNames}
        artImageUrl={song.songArtImageThumbnailUrl}
        margin="1em"
      />
      <AlternatelyLyrics morphemes={lyrics} />
    </Flex>
  );
};

export { SongLyricsContainer };
