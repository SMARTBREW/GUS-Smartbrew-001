import { useState, useEffect, useRef, useCallback } from 'react';
import OptimizedImage from './OptimizedImage';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description: string;
}

interface OptimizedGalleryProps {
  images: GalleryImage[];
  imagesPerLoad?: number;
  className?: string;
}

const OptimizedGallery = ({ 
  images, 
  imagesPerLoad = 9, 
  className = '' 
}: OptimizedGalleryProps) => {
  const [loadedImages, setLoadedImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  // Load initial batch of images
  useEffect(() => {
    const initialImages = images.slice(0, imagesPerLoad);
    setLoadedImages(initialImages);
    setHasMore(images.length > imagesPerLoad);
  }, [images, imagesPerLoad]);

  // Load more images function
  const loadMoreImages = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      const currentCount = loadedImages.length;
      const nextBatch = images.slice(currentCount, currentCount + imagesPerLoad);
      
      setLoadedImages(prev => [...prev, ...nextBatch]);
      setHasMore(currentCount + imagesPerLoad < images.length);
      setIsLoading(false);
    }, 300);
  }, [isLoading, hasMore, loadedImages.length, images, imagesPerLoad]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading) {
          loadMoreImages();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMoreImages, hasMore, isLoading]);

  return (
    <div className={className}>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loadedImages.map((image) => (
          <div key={image.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-64 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Loading indicator and trigger */}
      {hasMore && (
        <div ref={observerRef} className="mt-12 text-center">
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
              <span className="text-gray-600">Loading more images...</span>
            </div>
          ) : (
            <div className="text-gray-500 text-sm">
              Scroll down to load more images
            </div>
          )}
        </div>
      )}

      {/* End of gallery message */}
      {!hasMore && loadedImages.length > 0 && (
        <div className="mt-12 text-center text-gray-500">
          <div className="text-sm">You've reached the end! 🎉</div>
          <div className="text-xs mt-1">Showing all {loadedImages.length} images</div>
        </div>
      )}
    </div>
  );
};

export default OptimizedGallery;
