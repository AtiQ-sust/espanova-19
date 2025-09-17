import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Star, MessageCircle, Phone, ArrowRight, MapPin, Clock, Users, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HajjUmrah = () => {
  const packages = [
    {
      name: 'Silver Package',
      price: '৳1.3–1.5 Lakh',
      duration: '10-15 Days',
      popular: false,
      features: [
        'Economy class flights',
        'Standard hotel (walking distance to Haram)',
        'Shared room accommodation',
        'Basic meals (breakfast)',
        'Group transport',
        'Certified Mutawwif guidance',
        'Visa processing',
        'Basic insurance',
      ],
      notIncluded: [
        'Shopping allowance',
        'Private transport',
        'Single room'
      ]
    },
    {
      name: 'Gold Package',
      price: '৳2.0–2.5 Lakh',
      duration: '15-20 Days',
      popular: true,
      features: [
        'Economy/Business class flights',
        '4-star hotel near Haram',
        'Double sharing rooms',
        'Full meals (breakfast, lunch, dinner)',
        'AC transport',
        'Experienced Mutawwif guidance',
        'Fast-track visa processing',
        'Comprehensive insurance',
        'Ziara (holy sites tour)',
        'Airport transfers',
      ],
      notIncluded: [
        'Personal expenses',
        'Extra luggage',
        'Optional tours'
      ]
    },
    {
      name: 'Platinum Package',
      price: '৳3.5–6.0 Lakh',
      duration: '20-25 Days',
      popular: false,
      features: [
        'Business/First class flights',
        '5-star hotel (Haram view)',
        'Single/double rooms',
        'Premium buffet meals',
        'Private VIP transport',
        'Personal Mutawwif guidance',
        'VIP visa processing',
        'Premium insurance coverage',
        'Extended Ziara tours',
        'VIP airport services',
        'Shopping assistance',
        '24/7 concierge service',
      ],
      notIncluded: [
        'Personal shopping',
        'Spa services',
        'Room service'
      ]
    }
  ];

  const addOns = [
    {
      name: 'Extended Ziara Tour',
      price: '৳15,000–25,000',
      description: 'Visit Madinah historical sites, Cave of Hira, Mount Uhud'
    },
    {
      name: 'Makkah City Tour',
      price: '৳8,000–12,000', 
      description: 'Modern Makkah, shopping malls, local markets'
    },
    {
      name: 'Travel Insurance Plus',
      price: '৳5,000–8,000',
      description: 'Extended medical coverage, trip cancellation protection'
    },
    {
      name: 'Shopping Assistance',
      price: '৳3,000–5,000',
      description: 'Personal shopping guide for dates, souvenirs, religious items'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl">🕋</div>
            <div className="absolute top-32 right-20 text-4xl">☪️</div>
            <div className="absolute bottom-20 left-1/4 text-5xl">🤲</div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold gradient-text mb-6">
                Hajj & Umrah Packages
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                IATA-certified pilgrimage services with premium accommodations, 
                certified guidance, and spiritual support for your sacred journey.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">2,000+</div>
                    <div className="text-sm text-muted-foreground">Pilgrims Served</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">IATA</div>
                    <div className="text-sm text-muted-foreground">Certified Agency</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Package Comparison */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Choose Your Package
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From affordable pilgrimage to luxury spiritual journey, we have packages 
                that suit every need and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className={`relative rounded-2xl border-2 p-8 ${
                    pkg.popular 
                      ? 'border-primary shadow-glow-primary' 
                      : 'border-gray-200 hover:border-primary/30'
                  } transition-all duration-300 fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-poppins font-bold mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold gradient-text mb-2">{pkg.price}</div>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                        <Check className="w-5 h-5 mr-2" />
                        Included Features
                      </h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-500 mb-3">Not Included</h4>
                      <ul className="space-y-2">
                        {pkg.notIncluded.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-4 h-4 border border-red-300 rounded-sm mt-0.5 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/8801521217439?text=I'm%20interested%20in%20the%20${pkg.name}%20for%20Hajj/Umrah.%20Please%20provide%20more%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        className={`w-full ${pkg.popular ? 'btn-hero' : 'btn-secondary'}`}
                        size="lg"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Book on WhatsApp
                      </Button>
                    </a>
                    
                    <Link to="/contact">
                      <Button variant="outline" className="w-full">
                        Get Detailed Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Optional Add-ons
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enhance your pilgrimage experience with our carefully selected add-on services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div
                  key={addon.name}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-poppins font-semibold text-lg mb-2">{addon.name}</h3>
                  <div className="text-xl font-bold text-primary mb-3">{addon.price}</div>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Your Journey Process
              </h2>
              <p className="text-lg text-muted-foreground">
                From booking to return, we handle every detail of your sacred journey
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: '1',
                    title: 'Booking & Payment',
                    description: 'Choose package, submit documents, pay deposit'
                  },
                  {
                    step: '2', 
                    title: 'Visa Processing',
                    description: 'We handle all visa formalities and documentation'
                  },
                  {
                    step: '3',
                    title: 'Pre-departure',
                    description: 'Orientation, final payments, travel kit delivery'
                  },
                  {
                    step: '4',
                    title: 'Sacred Journey',
                    description: 'Guided pilgrimage with 24/7 support and assistance'
                  }
                ].map((item, index) => (
                  <div key={item.step} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
                Ready for Your Sacred Journey?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied pilgrims who have trusted us for their 
                Hajj and Umrah journey. Contact us for personalized consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/8801521217439?text=I%20want%20to%20book%20a%20Hajj/Umrah%20package.%20Please%20provide%20details%20and%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Consultation
                  </Button>
                </a>
                
                <a href="tel:+8801521217439">
                  <Button size="lg" className="btn-ghost text-lg px-8 py-4">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>

                <Link to="/contact">
                  <Button size="lg" className="btn-ghost text-lg px-8 py-4">
                    Book Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HajjUmrah;