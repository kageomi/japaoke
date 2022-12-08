import React, { useState, useEffect } from 'react';
import { searchSongs } from 'service/api';
import Song from 'types/Song';

const DEBOUNCING_DELAY = 500;

type UseSongSearch = (defaultKeyword?: string) => readonly [
  {
    keyword: string;
    isLoading: boolean;
    songList: Song[];
  },
  {
    setKeyword: React.Dispatch<React.SetStateAction<string>>;
  }
];

const useSongSearch: UseSongSearch = (defaultKeyword = '') => {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [isLoading, setIsLoading] = useState(false);
  const [songList, setSongList] = useState<Song[]>([]);

  useEffect(() => {
    if (!keyword) {
      setSongList([]);

      return;
    }

    const controller = new AbortController();
    const { signal } = controller;
    const search = async () => {
      try {
        setIsLoading(true);
        const response = await searchSongs({ word: keyword }, { signal });
        setSongList(response.songs);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(search, DEBOUNCING_DELAY);

    return () => {
      clearTimeout(timer);
      controller.abort('search query is updated');
    };
  }, [keyword]);

  return [{ keyword, isLoading, songList }, { setKeyword }];
};

export { useSongSearch };
