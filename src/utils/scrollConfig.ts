export const scrollConfig = {
  smoothScroll: {
    behavior: 'smooth' as ScrollBehavior,
    block: 'start' as ScrollLogicalPosition,
    inline: 'nearest' as ScrollLogicalPosition,
  },
  headerOffset: 80,
  durations: {
    fast: 300,
    normal: 600,
    slow: 900,
  },
  thresholds: {
    low: 0.1,
    medium: 0.3,
    high: 0.5,
  },
  performance: {
    throttleDelay: 16,
    passiveListeners: true,
  },
  scrollbar: {
    track: '#f1f1f1',
    thumb: '#dc2626',
    thumbHover: '#b91c1c',
  },
};

export const scrollToElement = (
  elementId: string, 
  offset: number = scrollConfig.headerOffset
) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: scrollConfig.smoothScroll.behavior,
    });
  }
};

export const isElementInViewport = (element: Element, threshold: number = 0.1) => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  return (
    rect.top <= windowHeight * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold &&
    rect.left <= windowWidth &&
    rect.right >= 0
  );
};
