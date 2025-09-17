import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  Tag, 
  ArrowRight, 
  Megaphone,
  Newspaper,
  TrendingUp,
  Award,
  Globe,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const News = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const newsCategories = [
    { id: 'all', name: 'All News', icon: Newspaper },
    { id: 'announcement', name: 'Announcements', icon: Megaphone },
    { id: 'press', name: 'Press Releases', icon: Award },
    { id: 'industry', name: 'Industry Updates', icon: TrendingUp },
  ];

  const featuredNews = {
    title: 'Espanova Wins "Best Recruiting Agency 2024" Award',
    excerpt: 'We are honored to receive the Bangladesh Manpower Exporters Association\'s prestigious award for excellence in overseas recruitment and worker welfare.',
    category: 'press',
    date: '2024-03-15',
    image: '/news-award.jpg',
    featured: true
  };

  const newsArticles = [
    {
      id: 1,
      title: 'New Partnership with Qatar Construction Companies',
      excerpt: 'Espanova signs exclusive partnership agreements with three major Qatari construction firms, opening 2000+ new job opportunities.',
      category: 'announcement',
      date: '2024-03-12',
      readTime: '3 min read',
      image: '/news-qatar.jpg'
    },
    {
      id: 2,
      title: 'Saudi Arabia Increases Worker Quota for Bangladesh',
      excerpt: 'Saudi Ministry of Labor announces 50% increase in work visa quotas for Bangladeshi workers across multiple sectors.',
      category: 'industry',
      date: '2024-03-10',
      readTime: '4 min read',
      image: '/news-saudi-quota.jpg'
    },
    {
      id: 3,
      title: 'Hajj 2024: Registration Now Open',
      excerpt: 'We are now accepting applications for Hajj 2024 packages. Early bird discounts available until April 15th.',
      category: 'announcement',
      date: '2024-03-08',
      readTime: '2 min read',
      image: '/news-hajj.jpg'
    },
    {
      id: 4,
      title: 'Malaysia Introduces New Work Permit Categories',
      excerpt: 'Malaysian government launches specialized work permit categories for skilled Bangladeshi workers in technology and healthcare.',
      category: 'industry',
      date: '2024-03-05',
      readTime: '5 min read',
      image: '/news-malaysia.jpg'
    },
    {
      id: 5,
      title: 'Free Training Program Graduates 500 Workers',
      excerpt: 'Our latest batch of skill development program graduates 500 workers, with 95% securing overseas employment within 60 days.',
      category: 'press',
      date: '2024-03-01',
      readTime: '3 min read',
      image: '/news-training.jpg'
    },
    {
      id: 6,
      title: 'Italy Opens New Agricultural Worker Visa Scheme',
      excerpt: 'Italian government announces seasonal agricultural worker program with pathway to permanent residency for Bangladeshi workers.',
      category: 'industry',
      date: '2024-02-28',
      readTime: '4 min read',
      image: '/news-italy.jpg'
    },
    {
      id: 7,
      title: 'Espanova Opens New Branch in Sylhet',
      excerpt: 'We are expanding our services with a new full-service branch in Sylhet to better serve clients from the northeastern region.',
      category: 'announcement',
      date: '2024-02-25',
      readTime: '2 min read',
      image: '/news-sylhet.jpg'
    },
    {
      id: 8,
      title: 'UAE Extends Golden Visa Program to Skilled Workers',
      excerpt: 'UAE announces extension of 5-year Golden Visa program to include skilled blue-collar workers in construction and manufacturing.',
      category: 'industry',
      date: '2024-02-22',
      readTime: '6 min read',
      image: '/news-uae.jpg'
    },
  ];

  const mediaLogos = [
    { name: 'The Daily Star', logo: '/media-daily-star.png' },
    { name: 'Prothom Alo', logo: '/media-prothom-alo.png' },
    { name: 'Bangladesh Today', logo: '/media-bd-today.png' },
    { name: 'Channel i', logo: '/media-channel-i.png' },
    { name: 'ATN News', logo: '/media-atn.png' },
    { name: 'Somoy TV', logo: '/media-somoy.png' },
  ];

  const filteredNews = newsArticles.filter(article => 
    activeFilter === 'all' || article.category === activeFilter
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
                All the Latest in One Place
              </h1>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Stay updated with official news, company announcements, press releases, 
                and industry developments that matter to your career and journey.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
                <div className="flex items-center space-x-2">
                  <Newspaper className="w-4 h-4" />
                  <span>Weekly Updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>Global Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>10K+ Subscribers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {newsCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                      activeFilter === category.id
                        ? 'bg-gradient-primary text-white shadow-md'
                        : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="bg-accent text-accent-foreground mb-4">Breaking News</Badge>
              <h2 className="text-3xl font-poppins font-bold gradient-text">Featured Story</h2>
            </div>

            <Card className="card-corporate overflow-hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-video md:aspect-auto bg-gradient-accent"></div>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">Press Release</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredNews.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-poppins font-bold mb-4 leading-tight">
                    {featuredNews.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredNews.excerpt}
                  </p>
                  
                  <Button className="bg-gradient-primary hover:bg-gradient-primary/90 group">
                    Read Full Story 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-poppins font-bold gradient-text mb-4">
                Latest News & Updates
              </h2>
              <p className="text-muted-foreground">
                {filteredNews.length} article{filteredNews.length !== 1 ? 's' : ''} in this category
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article, index) => (
                <Card
                  key={article.id}
                  className="card-corporate group hover:shadow-xl transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-gradient-primary rounded-t-xl"></div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {newsCategories.find(cat => cat.id === article.category)?.name}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-poppins font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-primary group-hover:translate-x-1 transition-transform">
                        Read More <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Mentions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                In the Media
              </h2>
              <p className="text-lg text-muted-foreground">
                Trusted and featured by leading media outlets
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {mediaLogos.map((media, index) => (
                <div
                  key={media.name}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-muted/70 transition-colors">
                    <span className="text-xs font-medium text-muted-foreground">{media.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h2 className="text-4xl font-poppins font-bold mb-6">
                Stay Updated – Subscribe for Alerts
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Get the latest news, job announcements, and industry updates 
                delivered directly to your inbox. Never miss an opportunity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="secondary" className="whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
              
              <p className="text-sm opacity-75 mt-4">
                Join 10,000+ subscribers • No spam • Unsubscribe anytime
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;