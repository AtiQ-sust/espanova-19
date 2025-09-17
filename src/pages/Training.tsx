import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  GraduationCap, 
  Globe, 
  Shield, 
  Clock, 
  FileText, 
  CheckCircle, 
  Users, 
  ArrowRight,
  Star,
  Award,
  BookOpen,
  Languages,
  HardHat,
  Scale
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Training = () => {
  const whyTrainingMatters = [
    { 
      icon: Award, 
      title: 'Industry-Relevant Skills', 
      description: 'Training aligned with international standards' 
    },
    { 
      icon: Shield, 
      title: 'Government Certified', 
      description: 'Recognized by BOESL and international bodies' 
    },
    { 
      icon: HardHat, 
      title: 'Safety-First Approach', 
      description: 'Comprehensive safety and compliance training' 
    },
    { 
      icon: Globe, 
      title: 'Cultural Awareness', 
      description: 'Prepare for diverse work environments' 
    },
  ];

  const trainingPrograms = [
    {
      category: 'Trade Skills',
      icon: HardHat,
      color: 'from-blue-500 to-blue-600',
      programs: [
        { name: 'Welding & Fabrication', duration: '3 months', level: 'Beginner to Advanced' },
        { name: 'Electrical & Electronics', duration: '2 months', level: 'Basic to Professional' },
        { name: 'Heavy Equipment Operation', duration: '1.5 months', level: 'Certified Training' },
        { name: 'Hospitality Services', duration: '2 months', level: 'International Standards' },
        { name: 'Driving & Logistics', duration: '1 month', level: 'International License' },
        { name: 'Plumbing & HVAC', duration: '2.5 months', level: 'Technical Certification' },
      ]
    },
    {
      category: 'Language Coaching',
      icon: Languages,
      color: 'from-green-500 to-green-600',
      programs: [
        { name: 'Arabic Language (Basic)', duration: '2 months', level: 'Conversational' },
        { name: 'Arabic Language (Advanced)', duration: '4 months', level: 'Professional' },
        { name: 'English Communication', duration: '3 months', level: 'Workplace English' },
        { name: 'Spoken English', duration: '2 months', level: 'Daily Communication' },
        { name: 'Business English', duration: '3 months', level: 'Professional Level' },
        { name: 'Technical English', duration: '2 months', level: 'Industry Specific' },
      ]
    },
    {
      category: 'Safety & Compliance',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      programs: [
        { name: 'Workplace Safety Basics', duration: '1 week', level: 'Mandatory' },
        { name: 'Construction Safety', duration: '2 weeks', level: 'OSHA Standards' },
        { name: 'Fire Safety Training', duration: '3 days', level: 'Emergency Response' },
        { name: 'First Aid & CPR', duration: '1 week', level: 'Certified Course' },
        { name: 'Chemical Handling', duration: '1 week', level: 'Safety Protocols' },
        { name: 'Equipment Operation Safety', duration: '1 week', level: 'Risk Management' },
      ]
    },
    {
      category: 'Rights & Legal',
      icon: Scale,
      color: 'from-purple-500 to-purple-600',
      programs: [
        { name: 'Worker Rights Awareness', duration: '2 days', level: 'Essential Knowledge' },
        { name: 'Contract Understanding', duration: '1 day', level: 'Legal Basics' },
        { name: 'Labor Law Basics', duration: '2 days', level: 'Country Specific' },
        { name: 'Grievance Procedures', duration: '1 day', level: 'Process Understanding' },
        { name: 'Documentation Importance', duration: '1 day', level: 'Record Keeping' },
        { name: 'Embassy Support Services', duration: 'Half day', level: 'Emergency Contacts' },
      ]
    }
  ];

  const pdoHighlights = [
    {
      icon: FileText,
      title: 'Document Verification',
      description: 'Final check of all travel and employment documents'
    },
    {
      icon: Globe,
      title: 'Travel Preparation',
      description: 'Airport procedures, baggage rules, and travel tips'
    },
    {
      icon: Users,
      title: 'Cultural Orientation',
      description: 'Do\'s and don\'ts, local customs, and social etiquette'
    },
    {
      icon: CheckCircle,
      title: 'Employer Expectations',
      description: 'Job responsibilities, work culture, and performance standards'
    }
  ];

  const successStories = [
    {
      name: 'Mohammad Karim',
      job: 'Certified Welder',
      country: 'Saudi Arabia',
      quote: 'The welding training gave me confidence. Now I earn 5x more than before.',
      image: '/placeholder-avatar.jpg'
    },
    {
      name: 'Rashida Begum',
      job: 'Hospitality Manager',
      country: 'Qatar',
      quote: 'English and hospitality training opened doors I never imagined.',
      image: '/placeholder-avatar.jpg'
    },
    {
      name: 'Abdul Rahman',
      job: 'Heavy Equipment Operator',
      country: 'Kuwait',
      quote: 'Professional training made all the difference in my career growth.',
      image: '/placeholder-avatar.jpg'
    }
  ];

  const faqs = [
    {
      question: 'How long do the training programs take?',
      answer: 'Training duration varies from 3 days to 4 months depending on the program. Most skill-based training ranges from 1-3 months.'
    },
    {
      question: 'What is the cost of training?',
      answer: 'Training costs vary by program. Basic PDO is often complimentary for our job placements, while specialized skill training has separate fees.'
    },
    {
      question: 'Are the certificates internationally recognized?',
      answer: 'Yes, our certificates are recognized by international employers and comply with industry standards in destination countries.'
    },
    {
      question: 'Is training mandatory for overseas jobs?',
      answer: 'PDO is mandatory for all overseas workers. Additional skill training is recommended and often required by specific employers.'
    }
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
                Be Job-Ready Before You Fly
              </h1>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Certified training and pre-departure orientation to ensure your success abroad. 
                Master new skills, learn languages, and understand workplace culture.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" size="xl">
                    Enroll Now
                  </Button>
                </Link>
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="xl" className="text-white border-white hover:bg-white/10">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <GraduationCap className="absolute top-20 left-10 w-20 h-20" />
            <BookOpen className="absolute top-40 right-20 w-16 h-16" />
            <Award className="absolute bottom-20 left-1/4 w-12 h-12" />
          </div>
        </section>

        {/* Why Training Matters */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Why Training Matters
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional training is the bridge between your potential and success abroad
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyTrainingMatters.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="text-center fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Programs Offered
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive training programs designed for international employment success
              </p>
            </div>

            <div className="space-y-16">
              {trainingPrograms.map((category, categoryIndex) => {
                const CategoryIcon = category.icon;
                return (
                  <div key={category.category} className="fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-4`}>
                        <CategoryIcon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-poppins font-bold gradient-text">{category.category}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.programs.map((program, index) => (
                        <Card key={program.name} className="card-corporate group hover:shadow-lg transition-all">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-semibold text-lg">{program.name}</h4>
                              <Badge variant="secondary">{program.duration}</Badge>
                            </div>
                            <p className="text-muted-foreground text-sm mb-4">{program.level}</p>
                            <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                              Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PDO Highlights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Pre-Departure Orientation (PDO)
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Mandatory orientation ensuring you're fully prepared for your overseas journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pdoHighlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card
                    key={highlight.title}
                    className="card-corporate text-center fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-poppins font-semibold mb-3">{highlight.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Training Success Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                Real people, real transformations through our training programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card
                  key={story.name}
                  className="card-corporate fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                      "{story.quote}"
                    </blockquote>
                    <div>
                      <h4 className="font-poppins font-semibold text-lg">{story.name}</h4>
                      <p className="text-primary font-medium">{story.job}</p>
                      <p className="text-muted-foreground text-sm">{story.country}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                Train Today – Fly Confidently Tomorrow
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Don't leave your success to chance. Invest in professional training 
                and make your overseas journey a guaranteed success story.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" size="xl">
                    Enroll in Training
                  </Button>
                </Link>
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="xl">
                    Get Training Details
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

export default Training;