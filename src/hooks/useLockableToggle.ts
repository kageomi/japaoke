import { useState } from 'react';

type UseLockableToggle = (defaultOn: boolean) => [
  boolean,
  {
    on: () => void;
    off: () => void;
    lock: () => void;
    unlock: () => void;
  }
];

const useLockableToggle: UseLockableToggle = (defaultOn) => {
  const [isOn, setIsOn] = useState(defaultOn);
  const [isLocked, setIsLocked] = useState(false);
  const on = () => {
    if (isLocked) return;
    setIsOn(true);
  };
  const off = () => {
    if (isLocked) return;
    setIsOn(false);
  };
  const lock = () => {
    setIsLocked(true);
  };
  const unlock = () => {
    setIsLocked(false);
  };

  return [
    isOn,
    {
      on,
      off,
      lock,
      unlock,
    },
  ];
};

export { useLockableToggle };
