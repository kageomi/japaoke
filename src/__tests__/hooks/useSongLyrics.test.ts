import { act, renderHook, waitFor } from '@testing-library/react';
import { getFurigana, getSong } from 'service/api';
import { useSongLyrics } from 'hooks/useSongLyrics';
import { createRandomSong } from '__factories__/song';
import { createRandomMorpheme } from '__factories__/morphome';

jest.mock('service/api');

describe('useSongLyrics', () => {
  test('song should has song data', async () => {
    const songId = '1';
    const songResponse = { song: createRandomSong() };
    const furiganaResponse = {
      morphemes: [...Array(10)].map(() => createRandomMorpheme()),
    };

    (getSong as jest.Mock).mockResolvedValue(songResponse);
    (getFurigana as jest.Mock).mockResolvedValue(furiganaResponse);

    const { result } = renderHook(() => useSongLyrics(songId));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    expect(result.current).toBeDefined();
    await waitFor(() => expect(getSong).toHaveBeenCalled());
    await waitFor(() => expect(getFurigana).toHaveBeenCalled());
    expect(getSong).toHaveBeenCalled();
    expect(getFurigana).toHaveBeenCalled();

    expect(result.current[0].song).toEqual(songResponse.song);
  });
  test('lyrics should has morphemes', async () => {
    const songId = '1';
    const songResponse = { song: createRandomSong() };
    const furiganaResponse = {
      morphemes: [...Array(10)].map(() => createRandomMorpheme()),
    };

    (getSong as jest.Mock).mockResolvedValue(songResponse);
    (getFurigana as jest.Mock).mockResolvedValue(furiganaResponse);

    const { result } = renderHook(() => useSongLyrics(songId));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    expect(result.current).toBeDefined();
    await waitFor(() => expect(getSong).toHaveBeenCalled());
    await waitFor(() => expect(getFurigana).toHaveBeenCalled());
    expect(getSong).toHaveBeenCalled();
    expect(getFurigana).toHaveBeenCalled();

    expect(result.current[0].song).toEqual(songResponse.song);
    expect(result.current[0].lyrics).toEqual(furiganaResponse.morphemes);
  });
});
