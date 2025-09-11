import React from 'react';

interface StatsCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'highlighted';
}

const StatsCard: React.FC<StatsCardProps> = ({
  value,
  label,
  icon,
  className = '',
  variant = 'default'
}) => {
  const baseClasses = "text-center";
  
  const variantClasses = {
    default: "",
    highlighted: "bg-gray-50 rounded-2xl p-4 sm:p-6 shadow-sm"
  };

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <div className={cardClasses}>
      {icon && (
        <div className="mb-3 sm:mb-4 flex justify-center">
          {icon}
        </div>
      )}
      <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800 mb-2">
        {value}
      </div>
      <div className="text-sm sm:text-base text-gray-600">
        {label}
      </div>
    </div>
  );
};

export default StatsCard;
