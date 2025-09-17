import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Plane, GraduationCap, ArrowRight } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Jobs Abroad',
      description: 'Professional overseas employment in GCC, Europe & Southeast Asia',
      href: '/jobs',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MapPin,
      title: 'Hajj & Umrah',
      description: 'Complete pilgrimage packages with certified guidance',
      href: '/services/hajj-umrah',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Plane,
      title: 'Visa & Ticketing',
      description: 'Streamlined visa processing and best-fare air tickets',
      href: '/services/visa-ticketing',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: GraduationCap,
      title: 'Training',
      description: 'Skill development and language coaching programs',
      href: '/services/training',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your global career and spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.href}
                className="service-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-poppins font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;