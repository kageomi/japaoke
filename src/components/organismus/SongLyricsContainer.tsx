import { FC, useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { getSong, getFurigana } from 'service/api';
import { SongHeader } from 'components/atoms/SongHeader';
import { AlternatelyLyrics } from 'components/molecules/AlternatelyLyrics';
import { Morpheme } from 'types/Morphology';
import Song from 'types/Song';

type Props = {
  songId: string;
};

const SongLyricsContainer: FC<Props> = ({ songId }) => {
  const [song, setSong] = useState<Song | null>(null);
  const [lyrics, setLyrics] = useState<Morpheme[]>([]);
  if (songId == null) throw Error();
  useEffect(() => {
    const get = async () => {
      const controller = new AbortController();
      const { signal } = controller;
      const { song } = await getSong({ id: songId }, { signal });
      setSong(song);
      const { morphemes } = await getFurigana({ text: song.lyrics });
      setLyrics(morphemes);
    };
    get();
  }, [songId]);

  if (song == null) return <Text>This song doesn't exist!</Text>;

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
