import React, { useState } from 'react';
import { Search, MapPin, Users, Heart } from 'lucide-react';

interface StayvoraHeroProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
}

const StayvoraHero: React.FC<StayvoraHeroProps> = ({
  title = "Stayvora",
  subtitle = "Describe your dream stay. We'll find it for you.",
  placeholder = "e.g., Lake-view villa near Lonavala for 6 people, pet-friendly"
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-6 text-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border max-w-3xl mx-auto">
          <div className="relative">
            <div className="flex items-center bg-background rounded-xl border-2 border-border focus-within:border-primary transition-colors duration-200 shadow-sm">
              <MapPin className="ml-4 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                className="flex-1 p-4 bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground text-lg"
              />
              <button
                onClick={handleSearch}
                className="m-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 font-medium"
              >
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>
          </div>

          {/* Quick filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full text-sm transition-colors duration-200">
              <Users className="h-4 w-4" />
              Family-friendly
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full text-sm transition-colors duration-200">
              <Heart className="h-4 w-4" />
              Pet-friendly
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full text-sm transition-colors duration-200">
              <MapPin className="h-4 w-4" />
              Near water
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm">10,000+ verified stays</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm">Instant booking</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm">24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayvoraHero;