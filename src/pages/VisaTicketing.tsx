import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Plane, 
  FileText, 
  Clock, 
  DollarSign, 
  Shield, 
  Headphones,
  CheckCircle,
  Calendar,
  Users,
  Search,
  MessageCircle,
  Phone,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const VisaTicketing = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const whyChooseFeatures = [
    { icon: Shield, title: 'Government Licensed', description: 'Fully authorized travel agency' },
    { icon: DollarSign, title: 'Transparent Pricing', description: 'No hidden fees or charges' },
    { icon: Clock, title: 'Fast Turnaround', description: 'Quick processing and approval' },
    { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock assistance' },
  ];

  const visaRequirements = {
    'saudi-arabia': {
      requirements: ['Valid Passport (6 months validity)', 'Passport Photos', 'Employment Letter', 'Medical Certificate'],
      processingTime: '7-10 working days',
      fees: 'BDT 8,500',
      checklist: ['Fill application form', 'Collect documents', 'Submit & pay', 'Receive visa']
    },
    'qatar': {
      requirements: ['Valid Passport (6 months validity)', 'Passport Photos', 'NOC from Employer', 'Bank Statement'],
      processingTime: '5-7 working days', 
      fees: 'BDT 7,200',
      checklist: ['Online application', 'Document upload', 'Fee payment', 'Visa collection']
    },
    'uae': {
      requirements: ['Valid Passport', 'Photos', 'Flight Ticket', 'Hotel Booking', 'Bank Statement'],
      processingTime: '3-5 working days',
      fees: 'BDT 6,800',
      checklist: ['Apply online', 'Upload docs', 'Pay fees', 'Download e-visa']
    }
  };

  const flightRoutes = [
    {
      route: 'Dhaka → Riyadh',
      airline: 'Saudi Airlines',
      price: 'BDT 35,000',
      duration: '6h 30m'
    },
    {
      route: 'Dhaka → Doha',
      airline: 'Qatar Airways',
      price: 'BDT 42,000',
      duration: '5h 45m'
    },
    {
      route: 'Dhaka → Dubai',
      airline: 'Emirates',
      price: 'BDT 38,500',
      duration: '4h 20m'
    },
    {
      route: 'Dhaka → Kuwait',
      airline: 'Kuwait Airways',
      price: 'BDT 33,000',
      duration: '6h 15m'
    }
  ];

  const faqs = [
    {
      question: "How long does visa processing take?",
      answer: "Processing time varies by country. Tourist visas typically take 3-7 days, while work visas may take 7-15 days depending on the destination."
    },
    {
      question: "Do you handle group bookings?",
      answer: "Yes, we offer special rates for group bookings of 10+ passengers. Contact us for customized group travel packages."
    },
    {
      question: "Which airlines do you work with?",
      answer: "We work with all major airlines including Emirates, Qatar Airways, Saudi Airlines, Malaysia Airlines, and many more."
    },
    {
      question: "Can I modify my flight booking?",
      answer: "Yes, modifications are possible subject to airline policies and additional charges. We'll assist you with any changes needed."
    },
    {
      question: "What documents do I need for visa application?",
      answer: "Required documents vary by country. Generally you need a valid passport, photos, financial documents, and purpose-specific papers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Journey,{' '}
              <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              From visa applications to flight bookings, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <FileText className="w-5 h-5 mr-2" />
                Apply for Visa
              </Button>
              <Button variant="gold" size="xl" className="w-full sm:w-auto">
                <Plane className="w-5 h-5 mr-2" />
                Book Tickets
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visa Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick visa processing for all major destinations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Select Destination Country</h3>
              </div>
              
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose your destination..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                  <SelectItem value="qatar">Qatar</SelectItem>
                  <SelectItem value="uae">United Arab Emirates</SelectItem>
                  <SelectItem value="kuwait">Kuwait</SelectItem>
                  <SelectItem value="oman">Oman</SelectItem>
                  <SelectItem value="malaysia">Malaysia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedCountry && visaRequirements[selectedCountry] && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Visa Requirements for {selectedCountry.replace('-', ' ').toUpperCase()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Required Documents
                      </h4>
                      <ul className="space-y-2">
                        {visaRequirements[selectedCountry].requirements.map((req, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        Processing Time
                      </h4>
                      <p className="text-lg font-semibold text-primary">
                        {visaRequirements[selectedCountry].processingTime}
                      </p>
                      
                      <h4 className="font-semibold mb-3 mt-6 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        Service Fees
                      </h4>
                      <p className="text-lg font-semibold text-accent">
                        {visaRequirements[selectedCountry].fees}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Application Process</h4>
                      <div className="space-y-3">
                        {visaRequirements[selectedCountry].checklist.map((step, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <span className="text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex gap-4">
                    <Button className="flex-1">
                      Apply Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Inquiry
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Ticketing Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flight Booking Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Best fares for international destinations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">From</label>
                    <Select defaultValue="dhaka">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dhaka">Dhaka (DAC)</SelectItem>
                        <SelectItem value="chittagong">Chittagong (CGP)</SelectItem>
                        <SelectItem value="sylhet">Sylhet (ZYL)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">To</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="riyadh">Riyadh (RUH)</SelectItem>
                        <SelectItem value="doha">Doha (DOH)</SelectItem>
                        <SelectItem value="dubai">Dubai (DXB)</SelectItem>
                        <SelectItem value="kuwait">Kuwait (KWI)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Date</label>
                    <Input type="date" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Passengers</label>
                    <Select defaultValue="1">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Passenger</SelectItem>
                        <SelectItem value="2">2 Passengers</SelectItem>
                        <SelectItem value="3">3 Passengers</SelectItem>
                        <SelectItem value="4+">4+ Passengers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Search Flights
                </Button>
              </CardContent>
            </Card>

            {/* Popular Routes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {flightRoutes.map((flight, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{flight.route}</h3>
                        <p className="text-muted-foreground">{flight.airline}</p>
                      </div>
                      <Badge variant="secondary">{flight.duration}</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-2xl font-bold text-primary">
                        {flight.price}
                      </div>
                      <Button size="sm">
                        Request Booking
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Travel Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plan Your Travel with Confidence
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We'll handle the details so you can focus on your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="xl">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button variant="gold" size="xl">
              <Phone className="w-5 h-5 mr-2" />
              Contact Form
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisaTicketing;