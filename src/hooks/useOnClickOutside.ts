import React from 'react';
import type { RefObject } from 'react';

type EventType = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (e: EventType) => void,
) => {
  React.useEffect(() => {
    const listener = (e: EventType) => {
      const el = ref?.current;
      if (!el || el.contains((e?.target as Node) || null)) {
        return;
      }

      handler(e);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
