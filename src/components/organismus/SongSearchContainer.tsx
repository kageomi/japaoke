import { FC, ChangeEvent } from 'react';
import { useSongSearch } from 'hooks/useSongSearch';
import { useNavigate } from 'react-router-dom';
import { SongSearchFormControl } from 'components/molecules/SongSearchFormControl';

const SongSearchConteiner: FC = () => {
  const [{ keyword, isLoading, songList }, { setKeyword }] = useSongSearch();
  const navigate = useNavigate();

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const newKeyword = event.target.value;
    setKeyword(newKeyword);
  };

  const jumpToSongPage = (id: number) => {
    navigate(`song/${id}`);
  };

  const inputProps = {
    value: keyword,
    onChange: handleChangeKeyword,
  };

  return (
    <>
      <SongSearchFormControl
        songList={songList}
        isLoading={isLoading}
        inputProps={inputProps}
        onClickSongItem={jumpToSongPage}
      />
    </>
  );
};

export { SongSearchConteiner };
