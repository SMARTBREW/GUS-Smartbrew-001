import React from 'react';

interface DonateButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
}

const DonateButton: React.FC<DonateButtonProps> = ({ 
  text = "Donate",
  className = "",
  onClick,
  size = 'medium',
  variant = 'primary'
}) => {
  const baseClasses = "inline-flex items-center justify-center space-x-2 font-medium transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-1";
  
  const sizeClasses = {
    small: "px-5 py-2 text-sm rounded-lg",
    medium: "px-6 py-3 rounded-lg text-base",
    large: "px-8 py-4 rounded-lg text-lg"
  };
  
  const variantClasses = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-white hover:bg-gray-50 text-red-600 border-2 border-red-600",
    outline: "bg-transparent hover:bg-red-50 text-red-600 border-2 border-red-600"
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open('https://give.gusindia.org/donate/save-vulnerable-famil-4zuya1tg', '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={buttonClasses}
    >
      <span className="text-xl">♥︎</span>
      <span>{text}</span>
    </button>
  );
};

export default DonateButton;
