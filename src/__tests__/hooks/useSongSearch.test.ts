import { act, renderHook, waitFor } from '@testing-library/react';
import { searchSongs } from 'service/api';
import { useSongSearch } from 'hooks/useSongSearch';
import { createRandomSongHeader } from '__factories__/songHeader';

jest.mock('service/api');

describe('useSongSearch', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  test('isLading should be true', async () => {
    const query = 'keyword for test';
    const songHeaderResponse = {
      songs: [...Array(10)].map(() => createRandomSongHeader()),
    };
    (searchSongs as jest.Mock).mockImplementation(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(songHeaderResponse);
        }, 200);
      });
    });

    const { result } = renderHook(() => useSongSearch(query));
    act(() => {
      result.current[1].setKeyword(query);
    });
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(result.current[0].isLoading).toEqual(true);
  });

  test('api access should be bounced', async () => {
    const query = 'keyword for test';
    const query2 = 'keyword for test 2';
    const query3 = 'keyword for test 3';
    const songHeaderResponse = {
      songs: [...Array(10)].map(() => createRandomSongHeader()),
    };
    (searchSongs as jest.Mock).mockResolvedValue(songHeaderResponse);

    const { result } = renderHook(() => useSongSearch(query));
    act(() => {
      result.current[1].setKeyword(query);
    });
    act(() => {
      jest.advanceTimersByTime(100);
    });
    act(() => {
      result.current[1].setKeyword(query2);
    });
    act(() => {
      jest.advanceTimersByTime(100);
    });
    act(() => {
      result.current[1].setKeyword(query3);
    });
    act(() => {
      jest.runAllTimers();
    });

    expect(searchSongs).toHaveBeenCalledTimes(1);
  });

  test('should has song headers', async () => {
    const query = 'keyword for test';
    const songHeaderResponse = {
      songs: [...Array(10)].map(() => createRandomSongHeader()),
    };
    (searchSongs as jest.Mock).mockResolvedValue(songHeaderResponse);

    const { result } = renderHook(() => useSongSearch(query));
    act(() => {
      result.current[1].setKeyword(query);
    });
    act(() => {
      jest.runAllTimers();
    });
    jest.useRealTimers();
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    expect(searchSongs).toHaveBeenCalled();
    expect(result.current[0].keyword).toBe(query);
    expect(result.current[0].isLoading).toBe(false);
    expect(result.current[0].songList).toEqual(songHeaderResponse.songs);
  });
});
