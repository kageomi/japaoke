import { useState, useEffect } from 'react';
import { getSong, getFurigana } from 'service/api';
import { Morpheme } from 'types/Morphology';
import Song from 'types/Song';

type UseSongLyrics = (songId: string) => readonly [
  {
    song: Song | null;
    lyrics: Morpheme[];
  }
];

const useSongLyrics: UseSongLyrics = (songId) => {
  const [song, setSong] = useState<Song | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lyrics, setLyrics] = useState<Morpheme[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const get = async () => {
      setIsLoading(true);
      try {
        const { song } = await getSong({ id: songId }, { signal });
        setSong(song);
        const { morphemes } = await getFurigana({ text: song.lyrics });
        setLyrics(morphemes);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    void get();

    return () => controller.abort('song id has changed');
  }, [songId]);

  return [{ song, lyrics, isLoading }];
};

export { useSongLyrics };
