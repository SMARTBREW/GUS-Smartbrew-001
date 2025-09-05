import { ReactNode } from 'react';

interface LocomotiveScrollProps {
  children: ReactNode;
  dataScroll?: string;
  dataScrollSpeed?: string;
  dataScrollDirection?: string;
  dataScrollDelay?: string;
  dataScrollOffset?: string;
  dataScrollTarget?: string;
  dataScrollRepeat?: string;
  dataScrollInView?: string;
  dataScrollClass?: string;
  className?: string;
}

const LocomotiveScroll = ({
  children,
  dataScroll,
  dataScrollSpeed,
  dataScrollDirection,
  dataScrollDelay,
  dataScrollOffset,
  dataScrollTarget,
  dataScrollRepeat,
  dataScrollInView,
  dataScrollClass,
  className = '',
  ...props
}: LocomotiveScrollProps) => {
  const scrollProps: any = {};
  
  if (dataScroll) scrollProps['data-scroll'] = dataScroll;
  if (dataScrollSpeed) scrollProps['data-scroll-speed'] = dataScrollSpeed;
  if (dataScrollDirection) scrollProps['data-scroll-direction'] = dataScrollDirection;
  if (dataScrollDelay) scrollProps['data-scroll-delay'] = dataScrollDelay;
  if (dataScrollOffset) scrollProps['data-scroll-offset'] = dataScrollOffset;
  if (dataScrollTarget) scrollProps['data-scroll-target'] = dataScrollTarget;
  if (dataScrollRepeat) scrollProps['data-scroll-repeat'] = dataScrollRepeat;
  if (dataScrollInView) scrollProps['data-scroll-in-view'] = dataScrollInView;
  if (dataScrollClass) scrollProps['data-scroll-class'] = dataScrollClass;

  return (
    <div className={className} {...scrollProps} {...props}>
      {children}
    </div>
  );
};

export default LocomotiveScroll;
