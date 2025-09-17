import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Users, 
  Globe, 
  Shield, 
  Clock, 
  FileText, 
  CheckCircle, 
  MapPin, 
  ArrowRight,
  Star,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const ManpowerExport = () => {
  const [activeTab, setActiveTab] = useState('skilled');

  const whyChooseStats = [
    { icon: Shield, title: 'Government Approved', description: 'Fully licensed BOESL agency' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance' },
    { icon: Users, title: '5000+ Placements', description: 'Successfully placed workers' },
    { icon: CheckCircle, title: '100% Transparent', description: 'No hidden fees or charges' },
  ];

  const jobCategories = {
    skilled: [
      'Welders & Fabricators',
      'Electricians & Technicians', 
      'Heavy Equipment Operators',
      'Construction Supervisors',
      'Auto Mechanics',
      'IT Professionals'
    ],
    'semi-skilled': [
      'Factory Workers',
      'Warehouse Staff',
      'Security Guards',
      'Cleaners & Housekeepers',
      'Farm Workers',
      'Helpers & Assistants'
    ],
    professionals: [
      'Engineers (Civil, Mechanical)',
      'Doctors & Nurses',
      'Teachers & Trainers',
      'Accountants & Finance',
      'Sales & Marketing',
      'Hotel & Restaurant Managers'
    ],
    graduates: [
      'Fresh Engineering Graduates',
      'Business Administration',
      'Computer Science Graduates',
      'Management Trainees',
      'Sales Associates',
      'Administrative Officers'
    ]
  };

  const topCountries = [
    { name: 'Saudi Arabia', flag: '🇸🇦', jobs: '2000+', sectors: 'Construction, Oil & Gas, Healthcare' },
    { name: 'Qatar', flag: '🇶🇦', jobs: '800+', sectors: 'Infrastructure, Hospitality, IT' },
    { name: 'Malaysia', flag: '🇲🇾', jobs: '1200+', sectors: 'Manufacturing, Palm Oil, Services' },
    { name: 'Romania', flag: '🇷🇴', jobs: '600+', sectors: 'Agriculture, Construction, Logistics' },
    { name: 'Italy', flag: '🇮🇹', jobs: '400+', sectors: 'Agriculture, Manufacturing, Tourism' },
    { name: 'Kuwait', flag: '🇰🇼', jobs: '500+', sectors: 'Oil & Gas, Construction, Healthcare' },
  ];

  const processSteps = [
    { 
      step: 1, 
      title: 'Registration', 
      description: 'Submit your CV and documents',
      duration: '1 Day' 
    },
    { 
      step: 2, 
      title: 'Employer Shortlist', 
      description: 'Get matched with suitable employers',
      duration: '7-15 Days' 
    },
    { 
      step: 3, 
      title: 'Medical & Training', 
      description: 'Complete medical tests and skill training',
      duration: '10-20 Days' 
    },
    { 
      step: 4, 
      title: 'Visa & Ticket', 
      description: 'Visa processing and ticket arrangement',
      duration: '30-45 Days' 
    },
    { 
      step: 5, 
      title: 'Departure', 
      description: 'Final briefing and departure',
      duration: '1 Day' 
    },
  ];

  const faqs = [
    {
      question: 'How long does the entire process take?',
      answer: 'Typically 2-4 months from registration to departure, depending on the destination country and job category.'
    },
    {
      question: 'What documents do I need?',
      answer: 'Updated CV, passport, educational certificates, experience certificates, medical reports, and passport-size photos.'
    },
    {
      question: 'Are there any fees involved?',
      answer: 'We maintain complete transparency. All fees are clearly mentioned upfront with no hidden charges.'
    },
    {
      question: 'Do you provide training before departure?',
      answer: 'Yes, we offer comprehensive training including language coaching, skill development, and cultural orientation.'
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
                Your Global Career Starts Here
              </h1>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Licensed manpower recruiting agency connecting Bangladeshi talent with 
                opportunities across the Middle East, Europe, and Asia. Your dreams, our commitment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/jobs">
                  <Button variant="secondary" size="xl">
                    Apply Now
                  </Button>
                </Link>
                <Link to="/jobs">
                  <Button variant="ghost" size="xl" className="text-white border-white hover:bg-white/10">
                    View Jobs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Why Choose Espanova?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your trusted partner for overseas employment with proven track record
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.title}
                    className="text-center fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold mb-2">{stat.title}</h3>
                    <p className="text-muted-foreground">{stat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Job Categories
              </h2>
              <p className="text-lg text-muted-foreground">
                Find opportunities that match your skills and experience level
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="skilled">Skilled</TabsTrigger>
                <TabsTrigger value="semi-skilled">Semi-Skilled</TabsTrigger>
                <TabsTrigger value="professionals">Professionals</TabsTrigger>
                <TabsTrigger value="graduates">Fresh Graduates</TabsTrigger>
              </TabsList>

              {Object.entries(jobCategories).map(([category, jobs]) => (
                <TabsContent key={category} value={category} className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {jobs.map((job, index) => (
                      <Card key={job} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="font-medium">{job}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Top Countries */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Top Destination Countries
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore opportunities in our partner countries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topCountries.map((country, index) => (
                <Card
                  key={country.name}
                  className="card-corporate fade-in-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{country.flag}</div>
                      <h3 className="text-2xl font-poppins font-bold mb-2">{country.name}</h3>
                      <div className="text-primary font-semibold text-lg mb-3">{country.jobs} Jobs</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{country.sectors}</p>
                      
                      <div className="mt-6">
                        <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                          View Jobs <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Our Process Timeline
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple, transparent steps to your dream job abroad
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <div key={step.step} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      {index < processSteps.length - 1 && (
                        <ArrowRight className="hidden md:block absolute top-6 -right-12 w-8 h-8 text-muted-foreground" />
                      )}
                    </div>
                    <h3 className="font-poppins font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                    <span className="text-xs text-primary font-medium">{step.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="card-corporate">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h2 className="text-4xl font-poppins font-bold mb-6">
                Submit Your CV Today – Secure Your Future Abroad
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Don't wait for opportunities to pass by. Take the first step towards 
                your international career today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/jobs">
                  <Button variant="secondary" size="xl">
                    Submit CV Now
                  </Button>
                </Link>
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="xl">
                    WhatsApp Us
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

export default ManpowerExport;