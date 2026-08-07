import React, { useState } from 'react';
import { Bot } from 'lucide-react';

interface VidyaAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showStatus?: boolean;
}

export const VidyaAvatar: React.FC<VidyaAvatarProps> = ({
  className = '',
  size = 'sm',
  showStatus = true,
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-9 h-9 text-xs',
    md: 'w-11 h-11 text-sm',
    lg: 'w-14 h-14 text-base',
    xl: 'w-18 h-18 text-lg',
  };

  const statusSizeClasses = {
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-3.5 h-3.5',
    xl: 'w-4 h-4',
  };

  return (
    <div className={`relative shrink-0 inline-block ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-[#a60921] shadow-sm bg-red-50 flex items-center justify-center transition-transform hover:scale-105`}
      >
        {imageError ? (
          <div className="w-full h-full bg-[#a60921] text-white flex items-center justify-center font-bold">
            <Bot className="w-1/2 h-1/2 text-white" />
          </div>
        ) : (
          <img
            src="/vidya_avatar.jpg"
            alt="Vidya AI Assistant Avatar"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center scale-110"
          />
        )}
      </div>

      {showStatus && (
        <span
          className={`absolute bottom-0 right-0 rounded-full bg-emerald-500 border-2 border-white ${statusSizeClasses[size]} ring-1 ring-emerald-600/20 shadow-xs`}
          title="Vidya AI Active"
        />
      )}
    </div>
  );
};

