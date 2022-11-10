import { FC, useEffect, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchSongs } from 'service/api';
import { SongSearchFormControl } from 'components/molecules/SongSearchFormControl';
import Song from 'types/Song';

const DEBOUNCING_DELAY = 500;

const SongSearchConteiner: FC = () => {
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);
  const [songList, setSongList] = useState<Song[]>([]);
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

  useEffect(() => {
    if (!keyword) {
      setSongList([]);

      return;
    }

    const controller = new AbortController();
    const { signal } = controller;
    const search = async () => {
      setIsListVisible(false);
      setIsLoading(true);
      try {
        const response = await searchSongs({ word: keyword }, { signal });
        console.log(response);
        setSongList(response.payload.songs);
        setIsListVisible(true);
      } catch (error) {
        if (!(error instanceof Error)) return;
        if (error.name === 'AbortError') return;
        // TODO: front end error
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(search, DEBOUNCING_DELAY);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [keyword]);

  return (
    <SongSearchFormControl
      songList={songList}
      isLoading={isLoading}
      isListVisible={isListVisible}
      inputProps={inputProps}
      onClickSongItem={jumpToSongPage}
    />
  );
};

export { SongSearchConteiner };
