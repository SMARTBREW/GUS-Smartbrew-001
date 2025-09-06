import { useEffect, useRef } from 'react';

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
  }, []);

  const scrollTo = (target: string | number, options?: any) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(target, options);
    }
  };

  const scrollToElement = (element: HTMLElement, options?: any) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(element, options);
    }
  };

  const update = () => {
    if (scrollRef.current) {
      scrollRef.current.update();
    }
  };

  const start = () => {
    if (scrollRef.current) {
      scrollRef.current.start();
    }
  };

  const stop = () => {
    if (scrollRef.current) {
      scrollRef.current.stop();
    }
  };

  return {
    scrollTo,
    scrollToElement,
    update,
    start,
    stop,
    scrollRef,
  };
};
