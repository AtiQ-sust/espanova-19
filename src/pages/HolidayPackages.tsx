import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign, 
  Star,
  Heart,
  Camera,
  Plane,
  Hotel,
  Utensils,
  Car,
  CheckCircle,
  X,
  MessageCircle,
  Phone,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const HolidayPackages = () => {
  const [filters, setFilters] = useState({
    destination: '',
    priceRange: '',
    duration: '',
    theme: ''
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const packages = [
    {
      id: 1,
      title: "3 Nights Bangkok Deluxe",
      destination: "Bangkok, Thailand",
      duration: "4D/3N",
      price: "BDT 45,000",
      originalPrice: "BDT 52,000",
      image: "/placeholder.svg",
      highlights: ["5-Star Hotel", "City Tours", "Airport Transfer", "Breakfast Included"],
      rating: 4.8,
      reviews: 124,
      theme: "City Break"
    },
    {
      id: 2,
      title: "Maldives Paradise Escape",
      destination: "Maldives",
      duration: "5D/4N",
      price: "BDT 85,000",
      originalPrice: "BDT 95,000",
      image: "/placeholder.svg",
      highlights: ["Water Villa", "All Meals", "Snorkeling", "Spa Treatment"],
      rating: 4.9,
      reviews: 89,
      theme: "Honeymoon"
    },
    {
      id: 3,
      title: "Dubai Shopping Festival",
      destination: "Dubai, UAE",
      duration: "6D/5N",
      price: "BDT 65,000",
      originalPrice: "BDT 75,000",
      image: "/placeholder.svg",
      highlights: ["4-Star Hotel", "Desert Safari", "City Tour", "Shopping Guide"],
      rating: 4.7,
      reviews: 156,
      theme: "Family"
    },
    {
      id: 4,
      title: "Malaysia Twin Cities",
      destination: "Kuala Lumpur & Penang",
      duration: "7D/6N",
      price: "BDT 55,000",
      originalPrice: "BDT 62,000",
      image: "/placeholder.svg",
      highlights: ["Twin Cities", "Cultural Tours", "Local Cuisine", "Heritage Sites"],
      rating: 4.6,
      reviews: 93,
      theme: "Adventure"
    },
    {
      id: 5,
      title: "Singapore Splendor",
      destination: "Singapore",
      duration: "4D/3N",
      price: "BDT 58,000",
      originalPrice: "BDT 68,000",
      image: "/placeholder.svg",
      highlights: ["Gardens by Bay", "Sentosa Island", "Night Safari", "Marina Bay"],
      rating: 4.8,
      reviews: 78,
      theme: "Family"
    },
    {
      id: 6,
      title: "Turkey Historic Journey",
      destination: "Istanbul & Cappadocia",
      duration: "8D/7N",
      price: "BDT 75,000",
      originalPrice: "BDT 85,000",
      image: "/placeholder.svg",
      highlights: ["Historic Sites", "Hot Air Balloon", "Turkish Bath", "Local Guide"],
      rating: 4.9,
      reviews: 112,
      theme: "Adventure"
    }
  ];

  const testimonials = [
    {
      name: "Rashida & Karim Ahmed",
      destination: "Maldives",
      quote: "Our Maldives trip was perfectly organized – stress-free and memorable. The water villa exceeded our expectations!",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Fatima Khan Family",
      destination: "Dubai",
      quote: "Amazing family vacation! Kids loved the desert safari and we enjoyed the shopping festival. Great value for money.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Abdul & Nasreen Rahman",
      destination: "Turkey",
      quote: "The historic journey through Turkey was incredible. Hot air balloon ride in Cappadocia was the highlight of our honeymoon.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Next Adventure{' '}
              <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              From family vacations to honeymoon getaways – explore curated packages tailored for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <MapPin className="w-5 h-5 mr-2" />
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="thailand">Thailand</SelectItem>
                <SelectItem value="maldives">Maldives</SelectItem>
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="malaysia">Malaysia</SelectItem>
                <SelectItem value="singapore">Singapore</SelectItem>
                <SelectItem value="turkey">Turkey</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-50k">Under BDT 50K</SelectItem>
                <SelectItem value="50k-70k">BDT 50K - 70K</SelectItem>
                <SelectItem value="70k-90k">BDT 70K - 90K</SelectItem>
                <SelectItem value="above-90k">Above BDT 90K</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3-4-days">3-4 Days</SelectItem>
                <SelectItem value="5-6-days">5-6 Days</SelectItem>
                <SelectItem value="7-plus-days">7+ Days</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="honeymoon">Honeymoon</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="city-break">City Break</SelectItem>
              </SelectContent>
            </Select>

            <Button>
              <Filter className="w-4 h-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Package Cards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Handpicked Holiday Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover amazing destinations with our carefully curated travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground font-semibold">
                      {pkg.theme}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  {pkg.originalPrice && (
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="destructive" className="bg-red-500">
                        Save BDT {parseInt(pkg.originalPrice.replace(/[^0-9]/g, '')) - parseInt(pkg.price.replace(/[^0-9]/g, ''))}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{pkg.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{pkg.destination}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {pkg.duration}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(pkg.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{pkg.rating}</span>
                    <span className="text-xs text-muted-foreground">({pkg.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <div className="text-xs text-muted-foreground">
                        +{pkg.highlights.length - 3} more inclusions
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                        {pkg.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {pkg.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">per person</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Package Detail Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  alt="Package Detail"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Maldives Paradise Escape</h3>
                    <p className="text-lg">5 Days / 4 Nights</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Day-wise Itinerary</h4>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          1
                        </div>
                        <div>
                          <h5 className="font-medium">Arrival & Check-in</h5>
                          <p className="text-sm text-muted-foreground">Airport transfer, welcome drink, water villa check-in</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          2
                        </div>
                        <div>
                          <h5 className="font-medium">Island Exploration</h5>
                          <p className="text-sm text-muted-foreground">Snorkeling, dolphin watching, sunset cruise</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          3
                        </div>
                        <div>
                          <h5 className="font-medium">Relaxation Day</h5>
                          <p className="text-sm text-muted-foreground">Spa treatment, beach time, water sports</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4">What's Included</h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Plane className="w-4 h-4 text-green-600" />
                        <span>Return Flights</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Hotel className="w-4 h-4 text-green-600" />
                        <span>Water Villa Stay</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Utensils className="w-4 h-4 text-green-600" />
                        <span>All Meals</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Car className="w-4 h-4 text-green-600" />
                        <span>Airport Transfer</span>
                      </div>
                    </div>

                    <h5 className="font-semibold mb-2">Price Breakdown</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Base Package</span>
                        <span>BDT 75,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Spa Package</span>
                        <span>BDT 10,000</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg border-t pt-2">
                        <span>Total per person</span>
                        <span className="text-primary">BDT 85,000</span>
                      </div>
                    </div>

                    <Button className="w-full mt-6" size="lg">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book Now via WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Stories Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Happy Travelers Share Their Stories
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="relative">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-6">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg italic mb-6 text-muted-foreground">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].destination}</div>
                </div>

                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Button variant="outline" size="sm" onClick={prevTestimonial}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Button variant="outline" size="sm" onClick={nextTestimonial}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Escape?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book your holiday today and create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="xl">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Inquiry
            </Button>
            <Button variant="gold" size="xl">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HolidayPackages;