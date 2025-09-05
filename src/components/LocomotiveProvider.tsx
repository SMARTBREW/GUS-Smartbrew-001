import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface LocomotiveProviderProps {
  children: React.ReactNode;
}

const LocomotiveProvider = ({ children }: LocomotiveProviderProps) => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const location = useLocation();

  useEffect(() => {
    const initLocomotiveScroll = () => {
      try {
        if (!scrollRef.current) {
          scrollRef.current = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]') as HTMLElement,
            smooth: true,
            multiplier: 1,
            class: 'is-revealed',
            scrollbarContainer: false,
            lerp: 0.1,
            tablet: {
              smooth: true,
              direction: 'vertical',
              gestureDirection: 'vertical',
              breakpoint: 1024,
            },
            smartphone: {
              smooth: true,
              direction: 'vertical',
              gestureDirection: 'vertical',
            },
            reloadOnContextChange: true,
          });

          // Expose scroll instance globally for other components
          (window as any).locomotiveScroll = scrollRef.current;
        }
      } catch (error) {
        console.warn('Locomotive Scroll failed to initialize:', error);
        // Fallback to native smooth scrolling
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initLocomotiveScroll, 100);

    return () => {
      clearTimeout(timer);
      if (scrollRef.current) {
        try {
          scrollRef.current.destroy();
        } catch (error) {
          console.warn('Error destroying Locomotive Scroll:', error);
        }
        scrollRef.current = null;
        (window as any).locomotiveScroll = null;
      }
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      try {
        scrollRef.current.update();
      } catch (error) {
        console.warn('Error updating Locomotive Scroll:', error);
      }
    }
  }, [location.pathname]);

  return (
    <div data-scroll-container>
      {children}
    </div>
  );
};

export default LocomotiveProvider;
