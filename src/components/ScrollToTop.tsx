import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for Locomotive Scroll to initialize
    const timer = setTimeout(() => {
      const locomotiveScroll = (window as any).locomotiveScroll;
      if (locomotiveScroll) {
        locomotiveScroll.scrollTo(0, {
          duration: 0,
          disableLerp: true
        });
      } else {
        // Fallback for when Locomotive Scroll is not available
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
