'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import SearchBar from '@/components/ui/search-bar';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // This would connect to the search functionality
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-600 mb-6 shadow-sm border">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>Powered by AI & Booking.com</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Describe your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}dream stay
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We'll find it for you. Simply tell us what you're looking for in natural language.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-5xl mx-auto mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            placeholder="e.g., Mountain-facing villa in Lonavala, pet-friendly, ₹15k max"
            size="lg"
            className="w-full"
          />
        </div>

        {/* Example searches */}
        <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
          {[
            '🏔️ Mountain retreat with hot tub',
            '🏖️ Beachfront villa in Goa',
            '🏙️ Modern apartment in Mumbai',
            '🐕 Pet-friendly cottages'
          ].map((example, index) => (
            <button
              key={index}
              onClick={() => setSearchQuery(example.replace(/🏔️|🏖️|🏙️|🐕/g, '').trim())}
              className="bg-white/80 backdrop-blur-sm hover:bg-white px-4 py-2 rounded-full text-sm text-gray-600 hover:text-gray-800 transition-all duration-200 border border-gray-200 hover:border-gray-300 hover:shadow-md"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}