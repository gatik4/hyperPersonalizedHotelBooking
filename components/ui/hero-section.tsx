import React, { useState } from 'react';
import { Search, MapPin, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  onSearch = () => {} 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Floating Icons */}
        <div className="relative">
          <div className="absolute -top-8 -left-8 opacity-20 animate-bounce">
            <MapPin className="w-8 h-8 text-blue-500" />
          </div>
          <div className="absolute -top-4 -right-12 opacity-20 animate-pulse">
            <Heart className="w-6 h-6 text-purple-500" />
          </div>
          <div className="absolute top-12 -left-16 opacity-20 animate-bounce delay-300">
            <Sparkles className="w-7 h-7 text-indigo-500" />
          </div>
        </div>

        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-border shadow-sm">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-foreground">Stayvora</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Describe your{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              dream stay
            </span>
            .
            <br />
            We'll find it for you.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-powered stay discovery that understands your vibe.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-border shadow-lg p-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="e.g., Mountain-facing villa in Lonavala, pet-friendly, ₹15k max"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-12 pr-4 py-4 text-base border-0 bg-transparent focus:ring-0 focus:outline-none placeholder:text-muted-foreground/70"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Find My Stay
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Examples */}
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="text-muted-foreground">Try:</span>
            {[
              "Beach villa in Goa",
              "Pet-friendly cabin",
              "Luxury suite Mumbai"
            ].map((example, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(example)}
                className="px-3 py-1 bg-white/60 hover:bg-white/80 rounded-full border border-border/50 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-8 opacity-60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-100"></div>
            <span className="text-sm text-muted-foreground">Instant Results</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
            <span className="text-sm text-muted-foreground">Natural Language</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;