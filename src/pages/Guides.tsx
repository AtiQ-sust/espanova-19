import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Download, 
  FileText, 
  CheckCircle, 
  Globe, 
  Plane,
  Users,
  ArrowRight,
  BookOpen,
  Languages,
  Shield,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Guides = () => {
  const guideCategories = [
    {
      title: 'Job Application Guides',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      guides: [
        {
          title: 'Perfect CV Format for GCC Jobs',
          description: 'Professional CV templates and formatting guidelines specifically designed for Middle Eastern employers.',
          type: 'PDF Template',
          pages: '8 pages',
          downloads: '2.5K+',
          lastUpdated: 'March 2024',
          featured: true
        },
        {
          title: 'Interview Preparation Checklist',
          description: 'Common interview questions, cultural etiquette, and presentation tips for overseas job interviews.',
          type: 'PDF Guide',
          pages: '12 pages',
          downloads: '1.8K+',
          lastUpdated: 'February 2024',
          featured: false
        },
        {
          title: 'Salary Negotiation Guide',
          description: 'How to negotiate salaries and benefits for international positions with confidence.',
          type: 'PDF Guide',
          pages: '6 pages',
          downloads: '1.2K+',
          lastUpdated: 'January 2024',
          featured: false
        }
      ]
    },
    {
      title: 'Visa & Documentation',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      guides: [
        {
          title: 'Visa Application Flowchart',
          description: 'Step-by-step visual guide for work visa applications across different countries.',
          type: 'PDF Flowchart',
          pages: '4 pages',
          downloads: '3.1K+',
          lastUpdated: 'March 2024',
          featured: true
        },
        {
          title: 'Document Authentication Process',
          description: 'Complete guide to document attestation and authentication for overseas employment.',
          type: 'PDF Guide',
          pages: '10 pages',
          downloads: '2.2K+',
          lastUpdated: 'February 2024',
          featured: false
        },
        {
          title: 'Medical Test Requirements',
          description: 'Country-wise medical test requirements and approved medical centers list.',
          type: 'PDF List',
          pages: '15 pages',
          downloads: '1.9K+',
          lastUpdated: 'January 2024',
          featured: false
        }
      ]
    },
    {
      title: 'Travel & Departure',
      icon: Plane,
      color: 'from-purple-500 to-purple-600',
      guides: [
        {
          title: 'Pre-Departure Checklist',
          description: 'Comprehensive checklist to ensure you\'re fully prepared before traveling abroad for work.',
          type: 'PDF Checklist',
          pages: '5 pages',
          downloads: '4.2K+',
          lastUpdated: 'March 2024',
          featured: true
        },
        {
          title: 'Airport & Travel Guide',
          description: 'Navigation tips for Dhaka airport, baggage rules, and transit procedures.',
          type: 'PDF Guide',
          pages: '8 pages',
          downloads: '2.8K+',
          lastUpdated: 'February 2024',
          featured: false
        },
        {
          title: 'First Week Survival Guide',
          description: 'Essential tips for your first week in a new country - accommodation, transport, and basics.',
          type: 'PDF Guide',
          pages: '12 pages',
          downloads: '2.1K+',
          lastUpdated: 'January 2024',
          featured: false
        }
      ]
    },
    {
      title: 'Hajj & Umrah',
      icon: Globe,
      color: 'from-orange-500 to-orange-600',
      guides: [
        {
          title: 'Umrah Packing Checklist',
          description: 'Complete packing list for Umrah pilgrimage including prohibited items and recommendations.',
          type: 'PDF Checklist',
          pages: '6 pages',
          downloads: '5.5K+',
          lastUpdated: 'March 2024',
          featured: true
        },
        {
          title: 'Hajj Preparation Manual',
          description: 'Comprehensive guide covering rituals, preparations, and practical tips for Hajj pilgrimage.',
          type: 'PDF Manual',
          pages: '25 pages',
          downloads: '3.8K+',
          lastUpdated: 'February 2024',
          featured: false
        },
        {
          title: 'Makkah & Madinah City Guide',
          description: 'Essential locations, services, and navigation tips for the holy cities.',
          type: 'PDF Guide',
          pages: '18 pages',
          downloads: '4.1K+',
          lastUpdated: 'January 2024',
          featured: false
        }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How often are the guides updated?',
      answer: 'Our guides are regularly updated based on current regulations and user feedback. Most guides are reviewed and updated monthly or quarterly.'
    },
    {
      question: 'Are the guides available in Bengali?',
      answer: 'Currently, most guides are available in English. We are working on Bengali translations for key guides, which will be available soon.'
    },
    {
      question: 'Do I need to register to download guides?',
      answer: 'Basic guides are available for free download. For premium guides and regular updates, we may require email registration.'
    },
    {
      question: 'Can I share these guides with others?',
      answer: 'Yes, you can share our guides for educational purposes. However, commercial redistribution requires permission.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
                Practical Guidance You Can Trust
              </h1>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Free step-by-step guides for overseas jobs, visa applications, Umrah preparation, 
                and travel checklists. Everything you need to succeed, in one place.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
                <div className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>25+ Free Guides</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>50K+ Downloads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Regularly Updated</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guides by Category */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {guideCategories.map((category, categoryIndex) => {
                const CategoryIcon = category.icon;
                const featuredGuide = category.guides.find(guide => guide.featured);
                const regularGuides = category.guides.filter(guide => !guide.featured);

                return (
                  <div key={category.title} className="fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                    {/* Category Header */}
                    <div className="text-center mb-12">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-6`}>
                        <CategoryIcon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-4xl font-poppins font-bold gradient-text mb-4">{category.title}</h2>
                    </div>

                    {/* Featured Guide */}
                    {featuredGuide && (
                      <div className="mb-12">
                        <div className="text-center mb-6">
                          <Badge className="bg-accent text-accent-foreground">Featured Guide</Badge>
                        </div>
                        
                        <Card className="card-corporate overflow-hidden max-w-4xl mx-auto">
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className={`aspect-square md:aspect-auto bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                              <div className="text-center text-white">
                                <FileText className="w-16 h-16 mx-auto mb-4" />
                                <Badge variant="secondary" className="text-white bg-white/20">
                                  {featuredGuide.type}
                                </Badge>
                              </div>
                            </div>
                            
                            <CardContent className="md:col-span-2 p-8">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-4">
                                  <Badge variant="outline">{featuredGuide.pages}</Badge>
                                  <span className="text-sm text-muted-foreground">
                                    {featuredGuide.downloads} downloads
                                  </span>
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Updated {featuredGuide.lastUpdated}
                                </span>
                              </div>
                              
                              <h3 className="text-2xl font-poppins font-bold mb-4">
                                {featuredGuide.title}
                              </h3>
                              
                              <p className="text-muted-foreground leading-relaxed mb-6">
                                {featuredGuide.description}
                              </p>
                              
                              <div className="flex flex-col sm:flex-row gap-3">
                                <Button className="bg-gradient-primary hover:bg-gradient-primary/90 flex-1 sm:flex-none">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download Free PDF
                                </Button>
                                <Button variant="outline">
                                  Preview Guide
                                </Button>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      </div>
                    )}

                    {/* Regular Guides Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {regularGuides.map((guide, index) => (
                        <Card key={guide.title} className="card-corporate group hover:shadow-lg transition-all">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                                  <FileText className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <Badge variant="secondary" className="text-xs mb-1">
                                    {guide.type}
                                  </Badge>
                                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                    <span>{guide.pages}</span>
                                    <span>•</span>
                                    <span>{guide.downloads} downloads</span>
                                  </div>
                                </div>
                              </div>
                              <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            
                            <h3 className="text-lg font-poppins font-semibold mb-3 group-hover:text-primary transition-colors">
                              {guide.title}
                            </h3>
                            
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                              {guide.description}
                            </p>
                            
                            <div className="flex items-center justify-between pt-4 border-t">
                              <span className="text-xs text-muted-foreground">
                                Updated {guide.lastUpdated}
                              </span>
                              <Button variant="ghost" size="sm" className="text-primary">
                                Download <ArrowRight className="w-3 h-3 ml-1" />
                              </Button>
                            </div>
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

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
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
                Download Free Guides – Start Your Journey Smartly
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Get instant access to all our guides and resources. No hidden fees, 
                no complicated registration – just practical guidance when you need it.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="xl">
                  <Download className="w-5 h-5 mr-2" />
                  Browse All Guides
                </Button>
                <Button variant="ghost" size="xl" className="text-white border-white hover:bg-white/10">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Request New Guide
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Guides;