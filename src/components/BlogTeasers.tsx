import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const BlogTeasers = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Prepare for Working Abroad',
      slug: 'prepare-for-working-abroad',
      excerpt: 'Essential steps to take before starting your overseas career journey. From documentation to cultural preparation.',
      category: 'Career Guide',
      readTime: '5 min read',
      publishDate: '2024-09-10',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop',
      author: 'Career Team',
    },
    {
      id: 2,
      title: 'Umrah 2025: Complete Guide',
      slug: 'umrah-2025-guide',
      excerpt: 'Everything you need to know about performing Umrah in 2025. Package options, requirements, and spiritual preparation.',
      category: 'Hajj & Umrah',
      readTime: '8 min read',
      publishDate: '2024-09-08',
      image: 'https://images.unsplash.com/photo-1564769625392-651b2d37b0a6?w=400&h=250&fit=crop',
      author: 'Islamic Services',
    },
    {
      id: 3,
      title: 'Saudi Arabia Tourism: Hidden Gems',
      slug: 'saudi-tourism-hidden-gems',
      excerpt: 'Discover Al-Ula, Red Sea Project, and other amazing destinations beyond the holy cities of Makkah and Madinah.',
      category: 'Tourism',
      readTime: '6 min read',
      publishDate: '2024-09-05',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
      author: 'Travel Team',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed with our latest guides and industry updates
            </p>
          </div>
          
          <Link 
            to="/blog"
            className="hidden md:flex items-center space-x-2 text-primary hover:text-primary-mid transition-colors font-medium"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article className="card-corporate h-full overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-primary rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-poppins font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                      <span className="font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-12 md:hidden">
          <Link to="/blog">
            <button className="btn-hero px-8 py-3">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogTeasers;