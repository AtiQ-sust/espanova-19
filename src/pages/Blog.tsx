import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight, 
  Filter,
  BookOpen,
  Globe,
  Plane,
  Briefcase,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, color: 'bg-gradient-primary' },
    { id: 'recruitment', name: 'Recruitment', icon: Briefcase, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { id: 'visa', name: 'Visa & Migration', icon: Plane, color: 'bg-gradient-to-r from-green-500 to-green-600' },
    { id: 'hajj-umrah', name: 'Hajj & Umrah', icon: MapPin, color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    { id: 'tourism', name: 'Tourism', icon: Globe, color: 'bg-gradient-to-r from-orange-500 to-orange-600' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: '2024 Guide: Complete Requirements for Saudi Arabia Work Visa',
      excerpt: 'Everything you need to know about Saudi Arabia work visa requirements, processing time, and documentation for Bangladeshi workers.',
      category: 'visa',
      author: 'Aminul Islam',
      date: '2024-03-15',
      readTime: '8 min read',
      image: '/blog-saudi-visa.jpg',
      featured: true,
      tags: ['Saudi Arabia', 'Work Visa', 'Documentation']
    },
    {
      id: 2,
      title: 'Hajj 2024: Package Comparison and Booking Guide',
      excerpt: 'Compare Silver, Gold, and Platinum Hajj packages. Find the perfect pilgrimage experience within your budget.',
      category: 'hajj-umrah',
      author: 'Fatima Rahman',
      date: '2024-03-12',
      readTime: '6 min read',
      image: '/blog-hajj-packages.jpg',
      featured: false,
      tags: ['Hajj', 'Packages', 'Pilgrimage']
    },
    {
      id: 3,
      title: 'Top 10 High-Demand Jobs in Qatar for 2024',
      excerpt: 'Discover the most in-demand professions in Qatar and salary expectations for Bangladeshi professionals.',
      category: 'recruitment',
      author: 'Mohammad Karim',
      date: '2024-03-10',
      readTime: '5 min read',
      image: '/blog-qatar-jobs.jpg',
      featured: false,
      tags: ['Qatar', 'Jobs', 'Salary']
    },
    {
      id: 4,
      title: 'Saudi Tourism Visa: Your Gateway to Modern Arabia',
      excerpt: 'Explore Saudi Arabia beyond pilgrimage. Learn about tourist visa requirements and must-visit destinations.',
      category: 'tourism',
      author: 'Sara Ahmed',
      date: '2024-03-08',
      readTime: '7 min read',
      image: '/blog-saudi-tourism.jpg',
      featured: false,
      tags: ['Tourism', 'Saudi Arabia', 'Travel']
    },
    {
      id: 5,
      title: 'CV Writing Tips for GCC Job Applications',
      excerpt: 'Craft the perfect CV for Middle Eastern employers. Format, keywords, and common mistakes to avoid.',
      category: 'recruitment',
      author: 'Abdul Rahman',
      date: '2024-03-05',
      readTime: '4 min read',
      image: '/blog-cv-tips.jpg',
      featured: false,
      tags: ['CV', 'GCC Jobs', 'Career Tips']
    },
    {
      id: 6,
      title: 'Umrah During Ramadan: Special Packages and Guidelines',
      excerpt: 'Perform Umrah during the holy month of Ramadan. Special packages, guidelines, and spiritual benefits.',
      category: 'hajj-umrah',
      author: 'Imam Abdullah',
      date: '2024-03-01',
      readTime: '6 min read',
      image: '/blog-ramadan-umrah.jpg',
      featured: false,
      tags: ['Umrah', 'Ramadan', 'Spiritual Journey']
    },
    {
      id: 7,
      title: 'Malaysia Work Permit Process Simplified',
      excerpt: 'Step-by-step guide to obtaining work permits for Malaysia. Documentation, timeline, and success tips.',
      category: 'visa',
      author: 'Rashida Begum',
      date: '2024-02-28',
      readTime: '5 min read',
      image: '/blog-malaysia-permit.jpg',
      featured: false,
      tags: ['Malaysia', 'Work Permit', 'Process']
    },
    {
      id: 8,
      title: 'Al-Ula: Saudi Arabia\'s Hidden Archaeological Gem',
      excerpt: 'Discover the ancient Nabatean city of Al-Ula, a UNESCO World Heritage site in Saudi Arabia.',
      category: 'tourism',
      author: 'Ahmed Hassan',
      date: '2024-02-25',
      readTime: '8 min read',
      image: '/blog-alula.jpg',
      featured: false,
      tags: ['Al-Ula', 'Heritage', 'Tourism']
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
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
                Insights & Guidance
              </h1>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Expert insights on overseas recruitment, visa tips, Umrah guidance, 
                and Saudi tourism experiences from industry professionals.
              </p>
              
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-3 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                      activeCategory === category.id
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

        {/* Featured Post */}
        {featuredPost && activeCategory === 'all' && !searchQuery && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <Badge className="bg-accent text-accent-foreground mb-4">Featured Article</Badge>
                <h2 className="text-3xl font-poppins font-bold gradient-text">Editor's Pick</h2>
              </div>

              <Card className="card-corporate overflow-hidden max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto bg-gradient-primary"></div>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-poppins font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                        <Calendar className="w-4 h-4 ml-2" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      
                      <Button variant="outline" className="group">
                        Read More 
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-poppins font-bold gradient-text mb-4">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Articles'}
              </h2>
              <p className="text-muted-foreground">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Card
                    key={post.id}
                    className="card-corporate group hover:shadow-xl transition-all duration-300 fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video bg-gradient-primary rounded-t-xl"></div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="secondary" className="text-xs">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-poppins font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-primary group-hover:translate-x-1 transition-transform">
                          Read <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Articles Found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your search or browse different categories.</p>
                <Button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                  View All Articles
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h2 className="text-4xl font-poppins font-bold mb-6">
                Want Job Alerts & Travel Tips?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest job opportunities, 
                visa updates, and travel guidance delivered to your inbox.
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;