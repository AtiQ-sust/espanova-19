import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  MapPin, Calendar, Star, MessageCircle, ArrowRight, Camera, Mountain, 
  Waves, Play, CheckCircle, Clock, Users, Crown, ChevronRight,
  Home, Plane, Hotel, Car, FileText, Phone, X, Plus, ChevronLeft, 
  Download, Send, Mail, User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import saudiTourismData from '@/data/saudi-tourism.json';

const { experiences, packages, testimonials, destinations } = saudiTourismData;

const SaudiTourism = () => {
  // Modal states
  const [itineraryModal, setItineraryModal] = useState({ isOpen: false, package: null });
  const [tourPlanModal, setTourPlanModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [tourPlan, setTourPlan] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Form states
  const [emailForm, setEmailForm] = useState({ name: '', email: '' });

  // YouTube video ref
  const youtubeRef = useRef(null);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Package itinerary content
  const itineraryContent = {
    'Silver': "A 5-day spiritual journey focusing on Umrah rituals. Includes 3-star hotel stays in Makkah and Madinah, group Ziyarah to key historical sites, and all ground transportation.",
    'Gold': "Our popular 7-day package balances faith and exploration. Includes 4-star hotels near the Haram, private airport transfers, a comprehensive Ziyarah tour, and a guided one-day city tour of historical Jeddah.",
    'Platinum': "The ultimate 8-day luxury experience. Includes 5-star hotel stays with Haram views, VIP airport services, a private Mutawwif for Umrah, and exclusive guided tours to both Riyadh and the ancient wonders of Al-Ula."
  };

  // Add to tour plan function
  const addToTourPlan = (experience) => {
    const existingIndex = tourPlan.findIndex(item => item.name === experience.name);
    if (existingIndex === -1) {
      setTourPlan([...tourPlan, experience]);
    }
    setTourPlanModal(true);
  };

  // Remove from tour plan
  const removeFromTourPlan = (index) => {
    setTourPlan(tourPlan.filter((_, i) => i !== index));
  };

  // Calculate totals
  const totalPrice = tourPlan.reduce((sum, item) => sum + item.price, 0);
  const totalDuration = tourPlan.reduce((sum, item) => sum + item.duration, 0);

  // Handle email form submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!emailForm.name || !emailForm.email) {
      alert('Please fill in all fields');
      return;
    }
    if (!emailForm.email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    alert('Thank you! The itinerary has been sent to your email.');
    setEmailModal(false);
    setEmailForm({ name: '', email: '' });
  };
  const whyChooseFeatures = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Faith + Leisure',
      description: 'Combine Umrah with cultural tours'
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: 'End-to-End Services',
      description: 'Visa, flights, hotels, transport'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Exclusive Saudi Tourism Partner',
      description: 'Licensed + authentic access'
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: 'Premium Experiences',
      description: 'Handpicked tours with luxury options'
    }
  ];

  const itinerarySteps = [
    { day: 'Day 1–2', activity: 'Arrival, Umrah & Ziyarah', icon: <Home className="w-5 h-5" /> },
    { day: 'Day 3', activity: 'Riyadh City Tour + Shopping', icon: <MapPin className="w-5 h-5" /> },
    { day: 'Day 4–5', activity: 'Al-Ula Ancient Wonders', icon: <Mountain className="w-5 h-5" /> },
    { day: 'Day 6', activity: 'Jeddah Waterfront', icon: <Waves className="w-5 h-5" /> },
    { day: 'Day 7', activity: 'Departure Assistance', icon: <Plane className="w-5 h-5" /> }
  ];

  const faqData = [
    {
      question: 'Can I combine Umrah with tourism?',
      answer: 'Yes! Our specialized bundles combine Umrah visa with tourism add-ons, allowing you to explore Saudi Arabia\'s cultural and natural wonders after your pilgrimage.'
    },
    {
      question: 'How do I apply for a Saudi tourist visa?',
      answer: 'We handle the entire visa process for you. Simply provide your passport details and required documents, and our team will process your Umrah + Tourism bundle visa.'
    },
    {
      question: 'What is included in packages?',
      answer: 'Our packages include visa processing, accommodation, transportation, guided tours, and selected meals. Premium packages include VIP services and exclusive experiences.'
    },
    {
      question: 'Are trips family-friendly?',
      answer: 'Absolutely! All our packages are designed for families, with child-friendly activities, appropriate accommodations, and flexible itineraries to suit all ages.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Banner - YouTube Video Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* YouTube Video Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-transparent z-10"></div>
            <iframe
              ref={youtubeRef}
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              src="https://www.youtube.com/embed/hwyyoXgI1W8?autoplay=1&mute=1&loop=1&playlist=hwyyoXgI1W8&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1"
              title="Saudi Arabia Tourism Background"
              allow="autoplay; encrypted-media"
              allowFullScreen={false}
            />
          </div>

          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-poppins font-bold mb-8 leading-tight">
                Experience the 
                <span className="block bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  New Saudi Arabia
                </span>
                with Espanova
              </h1>
              
              <p className="text-2xl md:text-3xl font-light opacity-90 mb-12 leading-relaxed">
                Faith, leisure, and unforgettable journeys — bundled just for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="btn-hero text-xl px-12 py-6 group">
                  <Camera className="w-6 h-6 mr-3" />
                  Explore Experiences
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <a
                  href="https://wa.me/8801521217439?text=I%20want%20to%20explore%20Saudi%20Arabia%20tourism%20packages"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="btn-secondary text-xl px-12 py-6">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Book Packages via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Why Choose Espanova */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Why Choose Espanova for Saudi Tourism
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center group hover:scale-105 transition-transform fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center text-white group-hover:shadow-medium transition-shadow">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-poppins font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Experiences Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Featured Experiences
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover Saudi Arabia's stunning landscapes, rich heritage, and futuristic attractions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((experience, index) => (
                <div
                  key={experience.slug}
                  className="card-corporate fade-in-up group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={experience.hero_image}
                      alt={experience.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-${1500000000000 + index}?w=400&h=300&fit=crop`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{experience.duration_hint}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.best_season}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-poppins font-bold mb-2">{experience.title}</h3>
                  <p className="text-accent text-sm mb-4 font-medium">{experience.tagline}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Highlights:</h4>
                    <div className="space-y-2">
                      {experience.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-3 bg-accent/10 rounded-lg">
                    <p className="text-xs text-accent italic">{experience.bundle_hint}</p>
                  </div>

                  <Button 
                    className="w-full btn-hero group-hover:btn-secondary transition-all"
                    onClick={() => addToTourPlan({
                      name: experience.title,
                      price: experience.title.includes('Al-Ula') ? 450 : 
                             experience.title.includes('Red Sea') ? 550 :
                             experience.title.includes('Riyadh') ? 250 : 350,
                      duration: experience.title.includes('Riyadh') ? 2 : 3
                    })}
                    data-name={experience.title}
                    data-price={experience.title.includes('Al-Ula') ? "450" : 
                               experience.title.includes('Red Sea') ? "550" :
                               experience.title.includes('Riyadh') ? "250" : "350"}
                    data-duration={experience.title.includes('Riyadh') ? "2" : "3"}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to My Tour Plan
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Umrah + Tourism Bundles */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Umrah + Tourism Bundles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Carefully curated packages combining spiritual fulfillment with cultural exploration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.slug}
                  className={`relative bg-white rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden fade-in-up ${
                    pkg.tier === 'Gold' ? 'border-2 border-gold/30 transform scale-105' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.tier === 'Gold' && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold to-gold-light text-white px-6 py-2 rounded-b-lg text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-poppins font-bold mb-2">{pkg.name}</h3>
                      <div className="text-sm text-muted-foreground mb-4">{pkg.duration}</div>
                      <div className="text-3xl font-bold gradient-text">{pkg.price_hint}</div>
                    </div>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-semibold mb-3 text-sm text-foreground">✅ Included:</h4>
                        <ul className="space-y-2">
                          {pkg.inclusions.map((item, i) => (
                            <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {pkg.add_ons && (
                        <div>
                          <h4 className="font-semibold mb-3 text-sm text-foreground">🎯 Add-ons Available:</h4>
                          <div className="flex flex-wrap gap-2">
                            {pkg.add_ons.map((addon, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                              >
                                {addon}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <a
                        href={pkg.cta_whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          className={`w-full ${pkg.tier === 'Gold' ? 'btn-hero' : 'btn-primary'}`}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          {pkg.cta_label}
                        </Button>
                      </a>
                      
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        size="sm"
                        onClick={() => setItineraryModal({ isOpen: true, package: pkg.tier })}
                      >
                        View Detailed Itinerary
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destination Highlights Slider */}
        <section className="py-20 bg-gradient-to-br from-muted/50 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Destination Highlights
              </h2>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <Carousel 
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {destinations.map((destination, index) => (
                    <CarouselItem key={destination.slug} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="border-0 bg-transparent">
                          <CardContent className="p-0">
                            <div className="group cursor-pointer fade-in-up">
                              <div className="relative overflow-hidden rounded-2xl">
                                <img
                                  src={destination.hero_image}
                                  alt={destination.name}
                                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                  onError={(e) => {
                                    e.currentTarget.src = `https://images.unsplash.com/photo-${1600000000000 + index}?w=400&h=300&fit=crop`;
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                  <h3 className="text-xl font-poppins font-bold mb-1">{destination.name}</h3>
                                  <p className="text-sm opacity-90">{destination.blurb}</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12" />
                <CarouselNext className="hidden md:flex -right-12" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Interactive Timeline Itinerary */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Sample Gold Package Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                7 Days / 6 Nights of Faith, Culture & Adventure
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

                {itinerarySteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex items-center mb-8 fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white shadow-medium z-10">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                        <h3 className="text-lg font-poppins font-bold text-primary mb-2">{step.day}</h3>
                        <p className="text-muted-foreground">{step.activity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  className="btn-hero" 
                  size="lg"
                  onClick={() => setEmailModal(true)}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get Detailed Itinerary PDF
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Slider */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Customer Stories
              </h2>
              <p className="text-lg text-muted-foreground">Real experiences from our valued customers</p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl bg-white shadow-soft">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.name} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-[400px]">
                        {/* Video Column - 60% */}
                        <div className="lg:col-span-2 relative bg-black">
                          <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                          >
                            <source src={`https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4`} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                        </div>

                        {/* Content Column - 40% */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="flex items-center mb-6">
                            <img
                              src={testimonial.photo}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover mr-4"
                              onError={(e) => {
                                e.currentTarget.src = `https://images.unsplash.com/photo-${1550000000000 + index}?w=100&h=100&fit=crop&crop=face`;
                              }}
                            />
                            <div>
                              <h4 className="font-poppins font-bold text-lg">{testimonial.name}</h4>
                              <p className="text-sm text-muted-foreground">Doctor • January 2025</p>
                            </div>
                          </div>

                          <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                            ))}
                          </div>

                          <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                            "{testimonial.quote}"
                          </blockquote>

                          <div className="text-sm">
                            <span className="font-semibold text-primary">Package:</span> Gold Umrah Discover
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center mt-8 space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentTestimonial((prev) => 
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentTestimonial((prev) => 
                    (prev + 1) % testimonials.length
                  )}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                  Frequently Asked Questions
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-muted rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-poppins font-semibold text-lg hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl">🕌</div>
            <div className="absolute top-32 right-20 text-4xl">🏔️</div>
            <div className="absolute bottom-20 left-1/4 text-5xl">🌊</div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Saudi Awaits You. Make Your Journey Memorable.
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let us create a personalized Saudi tourism experience tailored to your faith, 
                interests, and travel style. Expert guidance guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://wa.me/8801521217439?text=I%20want%20to%20book%20a%20Saudi%20tourism%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="btn-secondary text-xl px-12 py-6">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Book via WhatsApp
                  </Button>
                </a>
                
                <Link to="/contact">
                  <Button size="lg" className="btn-ghost text-xl px-12 py-6">
                    <Phone className="w-6 h-6 mr-2" />
                    Plan My Trip
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Itinerary Modal */}
      {itineraryModal.isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-poppins font-bold">
                  {itineraryModal.package} Umrah Discover Itinerary
                </h3>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setItineraryModal({ isOpen: false, package: null })}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-muted-foreground leading-relaxed mb-6">
                {itineraryContent[itineraryModal.package]}
              </div>
              <Button
                className="w-full btn-primary"
                onClick={() => setItineraryModal({ isOpen: false, package: null })}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Tour Plan Modal */}
      {tourPlanModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-poppins font-bold">My Tour Plan</h3>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTourPlanModal(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {tourPlan.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Your tour plan is empty. Add experiences to get started!
                </p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {tourPlan.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div>
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.duration} days • ${item.price}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeFromTourPlan(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total Duration: {totalDuration} days</span>
                      <span>Estimated Total: ${totalPrice}</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/8801521217439?text=I%20want%20to%20book%20these%20experiences:%20${tourPlan.map(item => item.name).join(', ')}%20Total:%20$${totalPrice}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full btn-hero">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Request Booking
                    </Button>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Email Form Modal */}
      {emailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-poppins font-bold">Download the Full Itinerary</h3>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setEmailModal(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    <User className="w-4 h-4 inline mr-2" />
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={emailForm.name}
                    onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                    className="mt-1"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={emailForm.email}
                    onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                    className="mt-1"
                    placeholder="Enter your email address"
                  />
                </div>

                <Button type="submit" className="w-full btn-hero">
                  <Send className="w-4 h-4 mr-2" />
                  Send Me the PDF
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SaudiTourism;