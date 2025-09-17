import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroManpower from '@/assets/hero-manpower.jpg';
import heroHajj from '@/assets/hero-hajj.jpg';
import heroTourism from '@/assets/hero-saudi-tourism.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroManpower,
      title: "Your Gateway to Global Opportunities",
      subtitle: "বিশ্বে কাজ ও ভ্রমণের বিশ্বস্ত সঙ্গী",
      description: "Government-approved overseas manpower recruiting with 5,000+ successful placements across 10+ countries.",
    },
    {
      image: heroHajj,
      title: "Sacred Journey Made Simple",
      subtitle: "পবিত্র হজ ও উমরাহ সফর",
      description: "Complete Hajj & Umrah packages with IATA-certified guidance and premium accommodations.",
    },
    {
      image: heroTourism,
      title: "Discover Modern Saudi Arabia", 
      subtitle: "নতুন সৌদি আরবে পর্যটন",
      description: "Explore Al-Ula, Red Sea Project, and Riyadh Season with our exclusive tourism packages.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="space-y-6 text-white">
              {/* Animated Title */}
              <h1 
                key={currentSlide}
                className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight animate-fade-in-up"
              >
                {slides[currentSlide].title}
              </h1>
              
              {/* Bengali Subtitle */}
              <p 
                key={`subtitle-${currentSlide}`}
                className="text-xl md:text-2xl font-medium opacity-90 animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                {slides[currentSlide].subtitle}
              </p>
              
              {/* Description */}
              <p 
                key={`desc-${currentSlide}`}
                className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up"
                style={{ animationDelay: '0.6s' }}
              >
                <Link to="/jobs">
                  <Button size="lg" className="btn-hero text-lg px-8 py-4">
                    <Play className="w-5 h-5 mr-2" />
                    Apply Now
                  </Button>
                </Link>
                
                <a
                  href="https://wa.me/8801521217439"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
                
                <Link to="/services">
                  <Button size="lg" className="btn-ghost text-lg px-8 py-4">
                    Explore Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2 rotate-90 origin-center whitespace-nowrap">Scroll</span>
          <div className="w-px h-12 bg-white/40"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;