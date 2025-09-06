import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyToClipboardProps {
  text: string;
  label?: string;
  className?: string;
  variant?: 'button' | 'inline';
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  label,
  className = '',
  variant = 'button'
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (variant === 'inline') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <span className="text-gray-600">{label || text}</span>
        <button
          onClick={copyToClipboard}
          className="p-2 text-gray-500 hover:text-red-600 transition-colors duration-200"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={copyToClipboard}
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-red-300 hover:bg-red-50 transition-all duration-200 ${className}`}
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-600" />
      ) : (
        <Copy className="h-4 w-4 text-gray-600" />
      )}
      <span className="text-sm font-medium text-gray-700">
        {copied ? 'Copied!' : label || 'Copy'}
      </span>
    </button>
  );
};

export default CopyToClipboard;
