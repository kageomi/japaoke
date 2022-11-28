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
  const [lyrics, setLyrics] = useState<Morpheme[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const get = async () => {
      const { song } = await getSong({ id: songId }, { signal });
      setSong(song);
      const { morphemes } = await getFurigana({ text: song.lyrics });
      setLyrics(morphemes);
    };

    void get();

    return () => controller.abort('song id has changed');
  }, [songId]);

  return [{ song, lyrics }];
};

export { useSongLyrics };
