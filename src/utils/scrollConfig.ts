// Scroll behavior configuration
export const scrollConfig = {
  // Smooth scrolling settings
  smoothScroll: {
    behavior: 'smooth' as ScrollBehavior,
    block: 'start' as ScrollLogicalPosition,
    inline: 'nearest' as ScrollLogicalPosition,
  },

  // Scroll offset for fixed headers
  headerOffset: 80,

  // Animation durations (in milliseconds)
  durations: {
    fast: 300,
    normal: 600,
    slow: 900,
  },

  // Intersection Observer thresholds
  thresholds: {
    low: 0.1,
    medium: 0.3,
    high: 0.5,
  },

  // Scroll performance settings
  performance: {
    throttleDelay: 16, // ~60fps
    passiveListeners: true,
  },

  // Custom scrollbar colors
  scrollbar: {
    track: '#f1f1f1',
    thumb: '#dc2626',
    thumbHover: '#b91c1c',
  },
};

// Utility function to scroll to element with offset
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

// Utility function to check if element is in viewport
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
