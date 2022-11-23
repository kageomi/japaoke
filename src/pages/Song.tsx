import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { SongLyricsContainer } from 'components/organismus/SongLyricsContainer';

const Song: FC = () => {
  const { songId } = useParams();
  if (songId == null) return <></>;

  return (
    <>
      <SongLyricsContainer songId={songId} />
    </>
  );
};

export default Song;
