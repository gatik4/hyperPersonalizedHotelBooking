import { Star, MapPin, Users, Wifi } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function FeaturedStays() {
  const stays = [
    {
      id: 1,
      title: 'Luxury Mountain Villa',
      location: 'Lonavala, Maharashtra',
      price: '₹18,500',
      period: 'per night',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['6 Guests', 'Free WiFi', 'Pool', 'Mountain View'],
      description: 'Stunning villa with panoramic mountain views and modern amenities'
    },
    {
      id: 2,
      title: 'Beachfront Paradise',
      location: 'Goa, India',
      price: '₹12,800',
      period: 'per night',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['4 Guests', 'Beach Access', 'Balcony', 'AC'],
      description: 'Wake up to ocean waves right outside your window'
    },
    {
      id: 3,
      title: 'Urban Loft Apartment',
      location: 'Mumbai, Maharashtra',
      price: '₹8,500',
      period: 'per night',
      rating: 4.7,
      reviews: 203,
      image: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['2 Guests', 'City View', 'WiFi', 'Kitchen'],
      description: 'Modern apartment in the heart of the financial capital'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured stays
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover some of our most popular properties, handpicked for exceptional experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stays.map((stay) => (
            <Card key={stay.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl">
              <div className="relative overflow-hidden">
                <img
                  src={stay.image}
                  alt={stay.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-800">{stay.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {stay.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{stay.price}</div>
                    <div className="text-sm text-gray-500">{stay.period}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{stay.location}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {stay.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {stay.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{stay.reviews} reviews</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi className="w-4 h-4" />
                    <span>Free WiFi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}