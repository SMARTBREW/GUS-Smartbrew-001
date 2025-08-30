import React from 'react';
import { DESIGN_SYSTEM } from '../styles/designSystem';

interface SubsectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SubsectionTitle: React.FC<SubsectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  const containerClass = centered ? 'text-center' : '';
  
  return (
    <div className={`${DESIGN_SYSTEM.spacing.marginBottomSmall} ${containerClass} ${className}`}>
      <h2 className={DESIGN_SYSTEM.typography.subsectionTitle}>
        {title.split(' ').map((word, index) => {
          // Check if this word should be highlighted
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
      </h2>
      {subtitle && (
        <p className={DESIGN_SYSTEM.typography.bodyText}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SubsectionTitle;
