import React from 'react';
import { Link } from 'react-router-dom';

const CountryHighlights = () => {
  const countries = [
    {
      name: 'Saudi Arabia',
      flag: '🇸🇦',
      opportunities: '2,500+ Jobs',
      salaryRange: 'SAR 2,000-5,000',
      categories: ['Construction', 'Healthcare', 'Hospitality'],
    },
    {
      name: 'Qatar',
      flag: '🇶🇦', 
      opportunities: '800+ Jobs',
      salaryRange: 'QAR 2,500-6,000',
      categories: ['Engineering', 'IT', 'Finance'],
    },
    {
      name: 'Malaysia',
      flag: '🇲🇾',
      opportunities: '600+ Jobs',
      salaryRange: 'MYR 2,000-4,500',
      categories: ['Manufacturing', 'Palm Oil', 'Services'],
    },
    {
      name: 'Romania',
      flag: '🇷🇴',
      opportunities: '300+ Jobs',
      salaryRange: 'EUR 800-2,000',
      categories: ['Agriculture', 'Construction', 'Logistics'],
    },
    {
      name: 'Italy',
      flag: '🇮🇹',
      opportunities: '200+ Jobs',
      salaryRange: 'EUR 1,200-2,500',
      categories: ['Agriculture', 'Tourism', 'Manufacturing'],
    },
    {
      name: 'Kuwait',
      flag: '🇰🇼',
      opportunities: '400+ Jobs',
      salaryRange: 'KWD 200-600',
      categories: ['Oil & Gas', 'Construction', 'Healthcare'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Top Hiring Countries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore opportunities across our partner countries with competitive salaries and benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className="country-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4">{country.flag}</div>
              
              <h3 className="text-xl font-poppins font-semibold mb-2">
                {country.name}
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Available Jobs:</span>
                  <span className="font-semibold text-primary">{country.opportunities}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Salary Range:</span>
                  <span className="font-semibold text-accent">{country.salaryRange}</span>
                </div>
                
                <div>
                  <span className="text-muted-foreground block mb-2">Popular Categories:</span>
                  <div className="flex flex-wrap gap-1">
                    {country.categories.map((category) => (
                      <span
                        key={category}
                        className="px-2 py-1 bg-muted text-xs rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to={`/jobs?country=${country.name}`}
                className="mt-4 w-full btn-hero text-center py-2 text-sm rounded-lg inline-block"
              >
                View Jobs
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/jobs">
            <button className="btn-hero text-lg px-8 py-4">
              View All Opportunities
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CountryHighlights;