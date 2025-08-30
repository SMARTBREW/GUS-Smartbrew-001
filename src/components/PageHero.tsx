import React from 'react';
import { DESIGN_SYSTEM } from '../styles/designSystem';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  background?: 'white' | 'gray';
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  background = 'white',
  className = ''
}) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';
  
  return (
    <section className={`${DESIGN_SYSTEM.spacing.sectionPadding} ${bgClass} ${className}`}>
      <div className={DESIGN_SYSTEM.spacing.container}>
        <div className={`text-center ${DESIGN_SYSTEM.spacing.marginBottom}`}>
          <h1 className={DESIGN_SYSTEM.typography.heroTitle}>
            {title.split(' ').map((word, index) => {
              // Check if this word should be highlighted (contains special characters or is the last word)
              const shouldHighlight = word.includes('&') || 
                                    word.includes('.') || 
                                    word.includes(',') ||
                                    index === title.split(' ').length - 1;
              
              return (
                <span key={index} className={shouldHighlight ? DESIGN_SYSTEM.colors.primary : DESIGN_SYSTEM.colors.textPrimary}>
                  {word}{index < title.split(' ').length - 1 ? ' ' : ''}
                </span>
              );
            })}
          </h1>
          {subtitle && (
            <p className={DESIGN_SYSTEM.typography.subtitleText}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
