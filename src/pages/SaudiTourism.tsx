import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Calendar, Star, MessageCircle, ArrowRight, Camera, Mountain, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SaudiTourism = () => {
  const highlights = [
    {
      name: 'Al-Ula Archaeological Wonder',
      image: '/api/placeholder/400/300',
      description: 'Explore the ancient Nabataean city with stunning rock formations and archaeological sites. A UNESCO World Heritage site featuring Hegra tombs.',
      duration: '2-3 Days',
      season: 'Oct-Mar',
      highlights: ['Hegra (Mada\'in Salih)', 'Elephant Rock', 'Old Town Al-Ula', 'Harrat Uwayrid'],
      price: 'From SAR 800/day'
    },
    {
      name: 'Red Sea Project',
      image: '/api/placeholder/400/300', 
      description: 'Experience luxury resorts, pristine beaches, coral reefs, and world-class diving in the untouched Red Sea coastline.',
      duration: '3-5 Days',
      season: 'Year-round',
      highlights: ['AMAALA Resort', 'Coral Reefs Diving', 'Private Islands', 'Desert Adventures'],
      price: 'From SAR 1,200/day'
    },
    {
      name: 'Riyadh Season Events',
      image: '/api/placeholder/400/300',
      description: 'Join the spectacular entertainment festival featuring concerts, exhibitions, sports events, and cultural shows in the capital.',
      duration: '1-2 Days',
      season: 'Oct-Dec',
      highlights: ['Boulevard City', 'Winter Wonderland', 'Combat Sports', 'Food Festivals'],
      price: 'From SAR 300/day'
    },
    {
      name: 'Jeddah Heritage & Modern',
      image: '/api/placeholder/400/300',
      description: 'Discover the historic Al-Balad district and modern Red Sea coast. Perfect blend of culture, history, and contemporary attractions.',
      duration: '2-3 Days', 
      season: 'Year-round',
      highlights: ['Al-Balad UNESCO Site', 'Jeddah Corniche', 'King Fahd Fountain', 'Traditional Souks'],
      price: 'From SAR 500/day'
    },
    {
      name: 'NEOM Future City',
      image: '/api/placeholder/400/300',
      description: 'Experience the futuristic mega-city project with cutting-edge technology, sustainable living, and innovative attractions.',
      duration: '1-2 Days',
      season: 'Oct-Apr',
      highlights: ['The Line Project', 'Oxagon', 'Tech Exhibitions', 'Sustainable Tours'],
      price: 'From SAR 1,000/day'
    },
    {
      name: 'Edge of the World',
      image: '/api/placeholder/400/300',
      description: 'Adventure to the dramatic cliffs offering breathtaking panoramic views. Perfect for hiking, camping, and photography.',
      duration: '1 Day',
      season: 'Oct-Mar',
      highlights: ['Jebel Fihrayn', 'Cliff Views', 'Desert Camping', 'Sunrise/Sunset'],
      price: 'From SAR 400/day'
    }
  ];

  const packages = [
    {
      name: 'Essential Saudi',
      duration: '5 Days / 4 Nights',
      destinations: ['Riyadh', 'Jeddah', 'Al-Ula'],
      price: 'SAR 2,500-3,500',
      includes: ['Hotels', 'Transport', 'Guided Tours', 'Entry Tickets']
    },
    {
      name: 'Cultural Heritage',
      duration: '7 Days / 6 Nights', 
      destinations: ['Al-Ula', 'Jeddah Al-Balad', 'Diriyah', 'Najran'],
      price: 'SAR 4,000-5,500',
      includes: ['Hotels', 'Cultural Guide', 'Heritage Sites', 'Traditional Experiences']
    },
    {
      name: 'Adventure Saudi',
      duration: '8 Days / 7 Nights',
      destinations: ['NEOM', 'Red Sea', 'Edge of the World', 'Empty Quarter'],
      price: 'SAR 5,500-7,500', 
      includes: ['Luxury Camps', '4WD Adventures', 'Water Sports', 'Desert Experiences']
    },
    {
      name: 'Umrah + Tourism',
      duration: '10 Days / 9 Nights',
      destinations: ['Makkah', 'Madinah', 'Jeddah', 'Al-Ula'],
      price: 'SAR 3,500-5,000',
      includes: ['Umrah Services', 'Tourist Attractions', 'Religious Sites', 'Cultural Tours']
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 text-6xl">🏛️</div>
            <div className="absolute top-32 right-20 text-4xl">🏔️</div>
            <div className="absolute bottom-20 left-1/4 text-5xl">🌊</div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold gradient-text mb-6">
                Discover Modern Saudi Arabia
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Explore the Kingdom's stunning landscapes, rich heritage, and futuristic attractions. 
                From ancient Al-Ula to the revolutionary NEOM project.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">UNESCO</div>
                    <div className="text-sm text-muted-foreground">Heritage Sites</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mountain className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Adventure</div>
                    <div className="text-sm text-muted-foreground">Desert & Mountains</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Waves className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Red Sea</div>
                    <div className="text-sm text-muted-foreground">Pristine Beaches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Top Destinations & Experiences
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From ancient archaeological wonders to futuristic megaprojects, 
                Saudi Arabia offers diverse experiences for every traveler.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((destination, index) => (
                <div
                  key={destination.name}
                  className="card-corporate fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                      {destination.price}
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{destination.season}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-poppins font-bold mb-3">{destination.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full btn-hero group-hover:btn-secondary transition-all">
                    <Camera className="w-4 h-4 mr-2" />
                    Explore Destination
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tour Packages */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Ready-Made Tour Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Carefully curated packages combining the best of Saudi Arabia's attractions, 
                culture, and adventures for unforgettable experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-poppins font-bold mb-2">{pkg.name}</h3>
                    <div className="text-sm text-muted-foreground mb-3">{pkg.duration}</div>
                    <div className="text-2xl font-bold gradient-text">{pkg.price}</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Destinations:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {pkg.destinations.map((dest, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <MapPin className="w-3 h-3" />
                            <span>{dest}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Includes:</h4>
                      <div className="flex flex-wrap gap-1">
                        {pkg.includes.map((item, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={`https://wa.me/8801521217439?text=I'm%20interested%20in%20the%20${pkg.name}%20Saudi%20Tourism%20package.%20Please%20share%20detailed%20itinerary.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-hero" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Get Details
                      </Button>
                    </a>
                    
                    <Button variant="outline" className="w-full" size="sm">
                      View Itinerary
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Saudi Tourism */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                  Why Choose Saudi Tourism?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: '🏛️',
                    title: 'Rich Heritage',
                    description: 'UNESCO World Heritage sites and ancient civilizations'
                  },
                  {
                    icon: '🌟',
                    title: 'Modern Vision',
                    description: 'Cutting-edge projects like NEOM and Red Sea'
                  },
                  {
                    icon: '🎭',
                    title: 'Cultural Events',
                    description: 'Riyadh Season, festivals, and entertainment'
                  },
                  {
                    icon: '🏔️',
                    title: 'Adventure Tourism',
                    description: 'Desert safaris, mountain treks, and diving'
                  }
                ].map((feature, index) => (
                  <div
                    key={feature.title}
                    className="text-center fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h2 className="text-4xl font-poppins font-bold mb-6">
                Plan Your Saudi Adventure
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let us create a personalized Saudi tourism experience tailored to your interests, 
                budget, and travel style. Expert guidance and local insights guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                    Plan My Trip
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <a
                  href="https://wa.me/8801521217439?text=I%20want%20to%20explore%20Saudi%20Arabia%20tourism%20options.%20Please%20help%20me%20plan%20my%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="btn-ghost text-lg px-8 py-4">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SaudiTourism;