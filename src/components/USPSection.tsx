import React from 'react';
import { ShieldCheck, Clock, Eye, TrendingUp } from 'lucide-react';

const USPSection = () => {
  const usps = [
    {
      icon: ShieldCheck,
      title: 'Govt. Approved & Compliant',
      description: 'Licensed by BMET, IATA certified with full regulatory compliance',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: Clock,
      title: '24/7 Support & Guidance',
      description: 'Round-the-clock assistance throughout your journey abroad',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Eye,
      title: '100% Transparency',
      description: 'Clear processes, honest communication, no hidden fees',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: TrendingUp,
      title: 'Proven Placement Records',
      description: '5,000+ successful placements with 95% job satisfaction rate',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for overseas employment and spiritual journeys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className="text-center fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-20 h-20 ${usp.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`w-10 h-10 ${usp.color}`} />
                </div>
                
                <h3 className="text-xl font-poppins font-semibold mb-3">
                  {usp.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">BMET</div>
              <div className="text-xs text-muted-foreground">Licensed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">IATA</div>
              <div className="text-xs text-muted-foreground">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">ATAB</div>
              <div className="text-xs text-muted-foreground">Member</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">DCCI</div>
              <div className="text-xs text-muted-foreground">Registered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;