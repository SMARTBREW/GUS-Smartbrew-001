import React from 'react';
import { DESIGN_SYSTEM, getConsistentStyles } from '../../styles/designSystem';

interface InfoCardProps {
  title: string;
  content: string | React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'highlighted' | 'outlined';
  onClick?: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  content,
  icon,
  className = '',
  variant = 'default',
  onClick
}) => {
  const cardClasses = `${getConsistentStyles.card(variant)} ${className}`;
  
  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      <h3 className={DESIGN_SYSTEM.typography.cardTitle}>{title}</h3>
      <div className={DESIGN_SYSTEM.colors.textMuted}>
        {typeof content === 'string' ? (
          <p className={DESIGN_SYSTEM.typography.bodyText}>{content}</p>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default InfoCard;
