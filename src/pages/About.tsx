import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Award, Globe, ShieldCheck, Clock, Eye, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Successful Placements', value: '5,000+', icon: Users },
    { label: 'Hajj & Umrah Served', value: '2,000+', icon: Target },
    { label: 'Countries We Serve', value: '10+', icon: Globe },
    { label: 'Years of Experience', value: '15+', icon: Award },
  ];

  const certifications = [
    {
      name: 'BMET',
      description: 'Bureau of Manpower, Employment and Training Licensed',
      logo: '🏛️',
    },
    {
      name: 'IATA',
      description: 'International Air Transport Association Certified',
      logo: '✈️',
    },
    {
      name: 'ATAB',
      description: 'Association of Travel Agents Bangladesh Member',
      logo: '🌍',
    },
    {
      name: 'DCCI',
      description: 'Dhaka Chamber of Commerce & Industry Registered',
      logo: '🏢',
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: 'Trust & Compliance',
      description: 'We maintain the highest standards of regulatory compliance and ethical practices.',
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'Efficient processing and timely delivery of all services with 24/7 support.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication, honest guidance, and no hidden fees in all our services.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Constantly expanding our network and improving our services for better outcomes.',
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
                About ManpowerHub
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your trusted partner for overseas employment and spiritual journeys. 
                We've been connecting dreams with opportunities for over 15 years.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-poppins font-bold mb-6">Who We Are</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    ManpowerHub is a government-approved overseas manpower recruiting agency 
                    with an integrated Hajj, Umrah, and Saudi tourism vertical. We specialize 
                    in connecting skilled professionals with international opportunities while 
                    providing comprehensive spiritual travel services.
                  </p>
                  <p>
                    Founded with a vision to bridge the gap between talent and opportunity, 
                    we have successfully placed over 5,000 professionals across 10+ countries 
                    and facilitated over 2,000 Hajj and Umrah pilgrimages.
                  </p>
                  <p>
                    Our commitment to excellence, transparency, and ethical practices has made 
                    us a trusted name in the industry, with full compliance to all regulatory 
                    requirements and international standards.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="text-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-3xl font-poppins font-bold gradient-text mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="card-corporate">
                <h3 className="text-3xl font-poppins font-bold gradient-text mb-6">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower individuals with global career opportunities and facilitate 
                  meaningful spiritual journeys while maintaining the highest standards 
                  of service, ethics, and compliance.
                </p>
              </div>
              
              <div className="card-corporate">
                <h3 className="text-3xl font-poppins font-bold gradient-text mb-6">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the leading South Asian overseas recruiting and pilgrimage 
                  travel company, known for our integrity, innovation, and exceptional 
                  client success stories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certs" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Licenses & Certifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fully licensed and certified to provide our services with complete compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div key={cert.name} className="card-corporate text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-6xl mb-4">{cert.logo}</div>
                  <h3 className="text-2xl font-poppins font-bold gradient-text mb-3">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;