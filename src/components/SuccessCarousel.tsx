import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const SuccessCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Md. Rahim Ahmed',
      role: 'Welder',
      country: 'Saudi Arabia',
      flag: '🇸🇦',
      story: 'Working in KSA for 3 years now. ManpowerHub helped me get a great position with excellent salary. My family is very happy.',
      rating: 5,
      salary: 'SAR 3,200/month',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Afsana Begum',
      role: 'Registered Nurse',
      country: 'Qatar',
      flag: '🇶🇦',
      story: 'Completed my dream Hajj journey through their Gold package. Everything was perfectly organized and spiritual.',
      rating: 5,
      salary: 'QAR 4,500/month',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9997471?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Karim Hassan',
      role: 'IT Specialist',
      country: 'Malaysia',
      flag: '🇲🇾',
      story: 'Great support throughout the visa process. Now working in Kuala Lumpur with a tech company. Highly recommend!',
      rating: 5,
      salary: 'MYR 5,800/month',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Fatima Sultana',
      role: 'Hotel Manager',
      country: 'Kuwait',
      flag: '🇰🇼',
      story: 'From Bangladesh to Kuwait - my career growth has been amazing. The training programs really helped prepare me.',
      rating: 5,
      salary: 'KWD 650/month',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 5,
      name: 'Abdul Kader',
      role: 'Construction Supervisor',
      country: 'Romania',
      flag: '🇷🇴',
      story: 'Working in Europe was my dream. ManpowerHub made it possible with proper documentation and support.',
      rating: 5,
      salary: 'EUR 1,400/month',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real people, real success - hear from our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-white shadow-strong">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    {/* Profile Image */}
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-medium"
                      />
                      <div className="absolute -bottom-2 -right-2 text-3xl">
                        {testimonial.flag}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Quote Icon */}
                      <Quote className="w-8 h-8 text-primary/30 mb-4 mx-auto md:mx-0" />
                      
                      {/* Story */}
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                        "{testimonial.story}"
                      </p>

                      {/* Rating */}
                      <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Details */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-poppins font-semibold">
                          {testimonial.name}
                        </h3>
                        <p className="text-primary font-medium">
                          {testimonial.role} • {testimonial.country}
                        </p>
                        <p className="text-accent font-semibold">
                          {testimonial.salary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-medium flex items-center justify-center hover:bg-muted transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-medium flex items-center justify-center hover:bg-muted transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-poppins font-bold gradient-text mb-2">5,000+</div>
            <div className="text-muted-foreground">Successful Placements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-poppins font-bold gradient-text mb-2">2,000+</div>
            <div className="text-muted-foreground">Hajj & Umrah Pilgrims</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-poppins font-bold gradient-text mb-2">95%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-poppins font-bold gradient-text mb-2">10+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCarousel;