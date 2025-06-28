import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = "Search...",
  size = 'md',
  className
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(value);
    }
  };

  const handleSearchClick = () => {
    onSearch(value);
  };

  const sizeClasses = {
    sm: 'h-10 text-sm',
    md: 'h-12 text-base',
    lg: 'h-16 text-lg'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-5 h-5'
  };

  const buttonSizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <div className={cn("relative max-w-5xl mx-auto w-full", className)}>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className={cn(
          "relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-xl hover:border-gray-300",
          sizeClasses[size]
        )}>
          <div className="flex items-center h-full">
            <div className="flex-1 relative">
              <Search className={cn(
                "absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-200",
                iconSizes[size]
              )} />
              <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                className={cn(
                  "w-full pl-12 pr-2 py-0 border-0 bg-transparent focus:outline-none focus:ring-0 placeholder:text-gray-400 text-gray-900 transition-all duration-200",
                  sizeClasses[size]
                )}
              />
            </div>
            <div className="pr-2">
              <button
                onClick={handleSearchClick}
                className={cn(
                  "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
                  buttonSizes[size]
                )}
              >
                Find Stay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;