import { act, renderHook, waitFor } from '@testing-library/react';
import { getFurigana, getSong } from 'service/api';
import { useSongLyrics } from 'hooks/useSongLyrics';
import { createRandomSong } from '__factories__/song';
import { createRandomMorpheme } from '__factories__/morphome';

jest.mock('service/api');

describe('useSongLyrics', () => {
  const songId = '1';
  const songResponse = { song: createRandomSong() };
  const furiganaResponse = {
    morphemes: [...Array(10)].map(() => createRandomMorpheme()),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('song should be null and lyrics should be empty array', async () => {
    (getSong as jest.Mock).mockRejectedValue(new Error('reject'));
    (getFurigana as jest.Mock).mockResolvedValue(furiganaResponse);
    jest.spyOn(console, 'log').mockImplementation(() => {});

    const { result } = renderHook(() => useSongLyrics(songId));

    expect(result.current).toBeDefined();
    expect(result.current[0].isLoading).toBe(true);
    await waitFor(() => expect(result.current[0].isLoading).toBe(false));

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(result.current[0].song).toBe(null);
    expect(result.current[0].lyrics).toEqual([]);
    (console.log as jest.Mock).mockRestore();
  });

  test('lyrics should be empty array', async () => {
    (getSong as jest.Mock).mockResolvedValue(songResponse);
    (getFurigana as jest.Mock).mockRejectedValue(new Error('reject'));
    jest.spyOn(console, 'log').mockImplementation(() => {});

    const { result } = renderHook(() => useSongLyrics(songId));

    expect(result.current).toBeDefined();
    expect(result.current[0].isLoading).toBe(true);
    await waitFor(() => expect(result.current[0].isLoading).toBe(false));

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(result.current[0].song).toEqual(songResponse.song);
    expect(result.current[0].lyrics).toEqual([]);
    (console.log as jest.Mock).mockRestore();
  });

  test('isLoading should be true', async () => {
    const DELAY = 200;
    (getSong as jest.Mock).mockResolvedValue(songResponse);
    (getFurigana as jest.Mock).mockImplementation(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(furiganaResponse);
        }, DELAY);
      });
    });

    const { result } = renderHook(() => useSongLyrics(songId));

    expect(result.current).toBeDefined();
    expect(result.current[0].isLoading).toBe(true);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, DELAY - 100));
    });

    expect(result.current[0].isLoading).toBe(true);
  });

  test('isLoading should be false', async () => {
    const DELAY = 100;
    (getSong as jest.Mock).mockResolvedValue(songResponse);
    (getFurigana as jest.Mock).mockImplementation(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(furiganaResponse);
        }, DELAY);
      });
    });

    const { result } = renderHook(() => useSongLyrics(songId));

    expect(result.current).toBeDefined();
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, DELAY * 2));
    });
    expect(getSong).toHaveBeenCalled();
    expect(getFurigana).toHaveBeenCalled();

    expect(result.current[0].isLoading).toBe(false);
  });

  test('song should has song data', async () => {
    (getSong as jest.Mock).mockResolvedValue(songResponse);
    (getFurigana as jest.Mock).mockResolvedValue(furiganaResponse);

    const { result } = renderHook(() => useSongLyrics(songId));

    expect(result.current).toBeDefined();
    await waitFor(() => expect(result.current[0].isLoading).toBe(false));
    expect(getSong).toHaveBeenCalled();
    expect(getFurigana).toHaveBeenCalled();

    expect(result.current[0].song).toEqual(songResponse.song);
  });

  test('lyrics should has morphemes', async () => {
    (getSong as jest.Mock).mockResolvedValue(songResponse);
    (getFurigana as jest.Mock).mockResolvedValue(furiganaResponse);

    const { result } = renderHook(() => useSongLyrics(songId));

    expect(result.current).toBeDefined();
    await waitFor(() => expect(result.current[0].isLoading).toBe(false));
    expect(getSong).toHaveBeenCalled();
    expect(getFurigana).toHaveBeenCalled();

    expect(result.current[0].song).toEqual(songResponse.song);
    expect(result.current[0].lyrics).toEqual(furiganaResponse.morphemes);
  });
});
