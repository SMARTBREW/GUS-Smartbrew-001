import React from 'react';
import { DESIGN_SYSTEM } from '../styles/designSystem';

interface ContactInfoCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  link?: string;
  className?: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  title,
  value,
  icon,
  link,
  className = ''
}) => {
  const content = (
    <div className={`${DESIGN_SYSTEM.colors.bgWhite} ${DESIGN_SYSTEM.effects.rounded} ${DESIGN_SYSTEM.spacing.cardPaddingSmall} ${DESIGN_SYSTEM.effects.shadowSm} text-center ${className}`}>
      <div className={`w-12 h-12 ${DESIGN_SYSTEM.colors.primaryLight} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <div className={`h-6 w-6 ${DESIGN_SYSTEM.colors.primary}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className={DESIGN_SYSTEM.colors.textMuted}>{value}</p>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block hover:transform hover:-translate-y-1 transition-all duration-200">
        {content}
      </a>
    );
  }

  return content;
};

export default ContactInfoCard;
