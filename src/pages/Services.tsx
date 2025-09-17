import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, MapPin, Plane, GraduationCap, FileText, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Manpower Export',
      description: 'Complete overseas employment solutions from skilled workers to professionals across GCC, Europe, and Southeast Asia.',
      features: [
        'End-to-end placement services',
        'Employer verification & compliance',
        'Pre-departure orientation',
        'Medical & documentation support',
        'Post-placement support'
      ],
      href: '/services/manpower',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: MapPin,
      title: 'Hajj & Umrah',
      description: 'Sacred pilgrimage packages with IATA-certified guidance, premium accommodations, and spiritual support.',
      features: [
        'Silver, Gold & Platinum packages',
        'Certified Mutawwif guidance', 
        'Premium accommodations near Haram',
        'Group & individual options',
        'Complete visa & flight arrangements'
      ],
      href: '/services/hajj-umrah',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Plane,
      title: 'Saudi Tourism',
      description: 'Explore modern Saudi Arabia beyond the holy cities with our exclusive tourism packages and cultural experiences.',
      features: [
        'Al-Ula archaeological wonders',
        'Red Sea Project experiences',
        'Riyadh Season events',
        'Cultural heritage tours',
        'Umrah+ combination packages'
      ],
      href: '/services/saudi-tourism',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: FileText,
      title: 'Visa & Ticketing',
      description: 'Streamlined visa processing and competitive air ticketing services with expert documentation support.',
      features: [
        'Multiple country visa processing',
        'Best-fare air ticket booking',
        'Group booking discounts',
        'Documentation assistance',
        'Schedule change support'
      ],
      href: '/services/visa-ticketing',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      icon: GraduationCap,
      title: 'Training & Guidance',
      description: 'Comprehensive skill development and cultural preparation programs for successful overseas employment.',
      features: [
        'Trade skills development',
        'Language coaching programs',
        'Cultural orientation sessions',
        'Interview preparation',
        'Safety & compliance training'
      ],
      href: '/services/training',
      gradient: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold gradient-text mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive solutions for your global career and spiritual journey. 
                From overseas employment to sacred pilgrimages and cultural tourism.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="card-corporate fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h2 className="text-2xl font-poppins font-bold mb-4">
                        {service.title}
                      </h2>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-semibold text-foreground mb-4">Key Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-3 text-sm text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={service.href}
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary-mid transition-colors font-medium group"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Why Choose Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide end-to-end solutions with complete transparency and support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-poppins font-bold gradient-text mb-2">100%</div>
                <div className="text-muted-foreground">Government Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-poppins font-bold gradient-text mb-2">24/7</div>
                <div className="text-muted-foreground">Client Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-poppins font-bold gradient-text mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-poppins font-bold gradient-text mb-2">0</div>
                <div className="text-muted-foreground">Hidden Fees</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h2 className="text-4xl font-poppins font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your requirements and let us help you 
                achieve your global career or spiritual journey goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="btn-secondary text-lg px-8 py-4">
                    Get Consultation
                  </button>
                </Link>
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-ghost text-lg px-8 py-4">
                    WhatsApp Us
                  </button>
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

export default Services;