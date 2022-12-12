import { act, renderHook } from '@testing-library/react';
import { useLockableToggle } from 'hooks/useLockableToggle';

describe('useLockableToggle', () => {
  test('default isOn should be false', async () => {
    const { result } = renderHook(() => useLockableToggle());

    expect(result.current).toBeDefined();
    expect(result.current[0]).toBe(false);
  });
  test('default isOn should be set true', async () => {
    const { result } = renderHook(() => useLockableToggle(true));

    expect(result.current).toBeDefined();
    expect(result.current[0]).toBe(true);
  });
  test('isOn should be set true after call on()', async () => {
    const { result } = renderHook(() => useLockableToggle());

    expect(result.current).toBeDefined();
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1].on();
    });

    expect(result.current[0]).toBe(true);
  });
  test('isOn should be set false after call off()', async () => {
    const { result } = renderHook(() => useLockableToggle());

    expect(result.current).toBeDefined();
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1].off();
    });

    expect(result.current[0]).toBe(false);
  });
  test('isOn should be kept false after call lock() => on()', async () => {
    const { result } = renderHook(() => useLockableToggle());

    expect(result.current).toBeDefined();
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1].lock();
    });
    act(() => {
      result.current[1].on();
    });

    expect(result.current[0]).toBe(false);
  });
  test('isOn should be kept same value if it is locked', async () => {
    const { result } = renderHook(() => useLockableToggle());

    expect(result.current).toBeDefined();
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1].on();
    });
    act(() => {
      result.current[1].lock();
    });
    act(() => {
      result.current[1].off();
    });

    expect(result.current[0]).toBe(true);
  });
  test('isOn should be true value after off() called many times if it is locked', async () => {
    const { result } = renderHook(() => useLockableToggle());

    expect(result.current).toBeDefined();
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1].on();
    });
    act(() => {
      result.current[1].lock();
    });
    act(() => {
      result.current[1].off();
    });
    act(() => {
      result.current[1].off();
    });
    act(() => {
      result.current[1].off();
    });

    expect(result.current[0]).toBe(true);
  });
  test('isOn should change if it is unlocked', async () => {
    const { result } = renderHook(() => useLockableToggle());

    expect(result.current).toBeDefined();
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1].on();
    });
    act(() => {
      result.current[1].lock();
    });
    act(() => {
      result.current[1].off();
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1].unlock();
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1].off();
    });

    expect(result.current[0]).toBe(false);
  });
});
