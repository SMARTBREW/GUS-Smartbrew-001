import { useEffect, useCallback } from 'react';

export const useScrollPerformance = () => {
  useEffect(() => {
    // Optimize scroll performance
    let ticking = false;

    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add any scroll-based optimizations here
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttle scroll events
    const handleScroll = () => {
      optimizeScroll();
    };

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return { scrollToSection };
};
