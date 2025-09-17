import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Star, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Play,
  Quote,
  Users,
  Globe,
  Award,
  Heart,
  Filter,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Success = () => {
  const [filterCountry, setFilterCountry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const countries = [
    { id: 'all', name: 'All Countries', flag: '🌍' },
    { id: 'saudi', name: 'Saudi Arabia', flag: '🇸🇦' },
    { id: 'qatar', name: 'Qatar', flag: '🇶🇦' },
    { id: 'malaysia', name: 'Malaysia', flag: '🇲🇾' },
    { id: 'kuwait', name: 'Kuwait', flag: '🇰🇼' },
    { id: 'italy', name: 'Italy', flag: '🇮🇹' },
    { id: 'romania', name: 'Romania', flag: '🇷🇴' },
  ];

  const successStats = [
    { number: '25,000+', label: 'Workers Placed', icon: Users },
    { number: '45+', label: 'Countries Served', icon: Globe },
    { number: '98%', label: 'Success Rate', icon: Award },
    { number: '15+', label: 'Years Experience', icon: Calendar },
  ];

  const featuredStory = {
    name: 'Abdul Karim Rahman',
    age: 32,
    from: 'Cumilla, Bangladesh',
    job: 'Project Supervisor',
    company: 'Saudi Aramco',
    country: 'Saudi Arabia',
    yearPlaced: 2019,
    currentSalary: 'SAR 8,500/month',
    quote: 'Espanova didn\'t just find me a job, they transformed my entire family\'s future. From earning ৳15,000 in Bangladesh to SAR 8,500 in Saudi Arabia, I now own my home and my children attend the best schools.',
    image: '/success-featured.jpg',
    video: true
  };

  const successStories = [
    {
      id: 1,
      name: 'Mohammad Hasan',
      age: 28,
      from: 'Sylhet',
      job: 'Welding Specialist',
      company: 'Qatar National Construction',
      country: 'qatar',
      countryName: 'Qatar',
      flag: '🇶🇦',
      yearPlaced: 2022,
      salary: 'QAR 2,800/month',
      beforeJob: 'Local Welder (৳12,000/month)',
      quote: 'The training program prepared me perfectly. Now I earn 8 times more than before.',
      rating: 5,
      image: '/success-hasan.jpg'
    },
    {
      id: 2,
      name: 'Fatima Khatun',
      age: 35,
      from: 'Dhaka',
      job: 'Nursing Supervisor',
      company: 'King Fahad Hospital',
      country: 'saudi',
      countryName: 'Saudi Arabia',
      flag: '🇸🇦',
      yearPlaced: 2020,
      salary: 'SAR 6,200/month',
      beforeJob: 'Hospital Nurse (৳25,000/month)',
      quote: 'Professional growth opportunities here are amazing. I became a supervisor within 2 years.',
      rating: 5,
      image: '/success-fatima.jpg'
    },
    {
      id: 3,
      name: 'Rashid Ahmed',
      age: 30,
      from: 'Chittagong',
      job: 'IT Support Manager',
      company: 'Petronas Digital',
      country: 'malaysia',
      countryName: 'Malaysia',
      flag: '🇲🇾',
      yearPlaced: 2021,
      salary: 'MYR 4,500/month',
      beforeJob: 'Computer Technician (৳18,000/month)',
      quote: 'Malaysia\'s tech industry gave me opportunities I never imagined. Alhamdulillah.',
      rating: 5,
      image: '/success-rashid.jpg'
    },
    {
      id: 4,
      name: 'Salma Begum',
      age: 42,
      from: 'Barisal',
      job: 'Hospitality Manager',
      company: 'Marriott Hotel Kuwait',
      country: 'kuwait',
      countryName: 'Kuwait',
      flag: '🇰🇼',
      yearPlaced: 2018,
      salary: 'KWD 850/month',
      beforeJob: 'Restaurant Owner (৳30,000/month)',
      quote: 'From running a small restaurant to managing a 5-star hotel. Dreams do come true.',
      rating: 5,
      image: '/success-salma.jpg'
    },
    {
      id: 5,
      name: 'Aminul Islam',
      age: 26,
      from: 'Rajshahi',
      job: 'Agricultural Supervisor',
      company: 'Tuscany Farms',
      country: 'italy',
      countryName: 'Italy',
      flag: '🇮🇹',
      yearPlaced: 2023,
      salary: 'EUR 1,800/month',
      beforeJob: 'Farm Worker (৳10,000/month)',
      quote: 'Working in Italy\'s beautiful countryside, learning modern farming. Life is good.',
      rating: 5,
      image: '/success-aminul.jpg'
    },
    {
      id: 6,
      name: 'Nasir Uddin',
      age: 33,
      from: 'Rangpur',
      job: 'Logistics Coordinator',
      company: 'Romanian Transport Ltd',
      country: 'romania',
      countryName: 'Romania',
      flag: '🇷🇴',
      yearPlaced: 2021,
      salary: 'RON 3,200/month',
      beforeJob: 'Truck Driver (৳15,000/month)',
      quote: 'Romania welcomed me with open arms. I\'m now planning to bring my family here.',
      rating: 4,
      image: '/success-nasir.jpg'
    },
  ];

  const testimonials = [
    {
      quote: 'Espanova\'s support didn\'t end when I got the job. They still check on me regularly.',
      author: 'Kamal Hossain, Construction Manager, Qatar',
      rating: 5
    },
    {
      quote: 'The pre-departure training was excellent. I felt confident from day one.',
      author: 'Rehana Akter, Healthcare Assistant, Saudi Arabia',
      rating: 5
    },
    {
      quote: 'Transparent process, no hidden fees, excellent support. Highly recommended.',
      author: 'Ibrahim Ali, Factory Supervisor, Malaysia',
      rating: 5
    },
  ];

  const filteredStories = successStories.filter(story => {
    const matchesCountry = filterCountry === 'all' || story.country === filterCountry;
    const matchesSearch = story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.job.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.countryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
                From Bangladesh to the World
              </h1>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Real people, real transformations, inspiring journeys. Discover how we've 
                helped thousands achieve their dreams of working abroad and building better futures.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {successStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <Icon className="w-8 h-8 mx-auto mb-2 opacity-75" />
                      <div className="text-2xl md:text-3xl font-poppins font-bold">{stat.number}</div>
                      <div className="text-sm opacity-75">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Success Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="bg-accent text-accent-foreground mb-4">Featured Success Story</Badge>
              <h2 className="text-4xl font-poppins font-bold gradient-text">Transformation Spotlight</h2>
            </div>

            <Card className="card-corporate overflow-hidden max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto bg-gradient-primary">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {featuredStory.video && (
                      <Button variant="secondary" size="lg" className="rounded-full w-16 h-16">
                        <Play className="w-6 h-6" />
                      </Button>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <Badge variant="secondary">{featuredStory.country}</Badge>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-poppins font-bold mb-2">{featuredStory.name}</h3>
                  <p className="text-muted-foreground mb-1">{featuredStory.job} at {featuredStory.company}</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    From {featuredStory.from} • Placed in {featuredStory.yearPlaced} • {featuredStory.currentSalary}
                  </p>
                  
                  <blockquote className="text-lg leading-relaxed mb-8 relative">
                    <Quote className="w-8 h-8 text-accent absolute -top-2 -left-2" />
                    <p className="italic pl-6">{featuredStory.quote}</p>
                  </blockquote>
                  
                  <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
                    Watch Full Story <Play className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Success Stories Filter */}
        <section className="py-8 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {countries.map((country) => (
                  <button
                    key={country.id}
                    onClick={() => setFilterCountry(country.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all text-sm ${
                      filterCountry === country.id
                        ? 'bg-gradient-primary text-white'
                        : 'bg-white hover:bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-poppins font-bold gradient-text mb-4">
                Success Stories from Around the World
              </h2>
              <p className="text-muted-foreground">
                {filteredStories.length} inspiring {filteredStories.length !== 1 ? 'journeys' : 'journey'}
              </p>
            </div>

            {filteredStories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredStories.map((story, index) => (
                  <Card
                    key={story.id}
                    className="card-corporate group hover:shadow-xl transition-all duration-300 fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video bg-gradient-primary rounded-t-xl relative overflow-hidden">
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/20 text-white border-0">
                          {story.flag} {story.countryName}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">Placed {story.yearPlaced}</span>
                      </div>
                      
                      <h3 className="text-xl font-poppins font-bold mb-1">{story.name}</h3>
                      <p className="text-primary font-medium text-sm mb-1">{story.job}</p>
                      <p className="text-xs text-muted-foreground mb-3">{story.company}</p>
                      
                      <div className="bg-muted/50 rounded-lg p-3 mb-4 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Before:</span>
                          <span>{story.beforeJob}</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-muted-foreground">Now:</span>
                          <span className="font-semibold text-primary">{story.salary}</span>
                        </div>
                      </div>
                      
                      <blockquote className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                        "{story.quote}"
                      </blockquote>
                      
                      <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                        Read Full Story <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Stories Found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your search or filters.</p>
                <Button onClick={() => { setSearchQuery(''); setFilterCountry('all'); }}>
                  View All Stories
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Authentic feedback from our satisfied workers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="card-corporate text-center fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg leading-relaxed mb-6 relative">
                      <Quote className="w-6 h-6 text-accent mx-auto mb-4" />
                      <p className="italic">{testimonial.quote}</p>
                    </blockquote>
                    
                    <p className="font-medium text-muted-foreground">{testimonial.author}</p>
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
                Your Story Could Be Next
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of successful Bangladeshi workers who trusted us with their 
                dreams. Your journey to a better future starts with a single step.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="xl">
                  <Heart className="w-5 h-5 mr-2" />
                  Apply Now
                </Button>
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="xl">
                    Share Your Dreams
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

export default Success;