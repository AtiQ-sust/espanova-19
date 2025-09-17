import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Clock, DollarSign, ArrowRight, Filter, Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'HVAC Technician',
      company: 'Saudi Construction Co.',
      country: 'Saudi Arabia',
      flag: '🇸🇦',
      salary: 'SAR 2,500–3,000',
      category: 'skilled',
      deadline: '2025-10-31',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Experienced HVAC technician needed for major construction projects in Riyadh.'
    },
    {
      id: 2,
      title: 'Hotel Housekeeping Supervisor',
      company: 'Qatar Hospitality Group',
      country: 'Qatar',
      flag: '🇶🇦',
      salary: 'QAR 1,800–2,200',
      category: 'semi-skilled',
      deadline: '2025-11-15',
      type: 'Full-time',
      experience: '1+ years',
      description: 'Lead housekeeping operations in luxury hotel chain.'
    },
    {
      id: 3,
      title: 'Software Developer',
      company: 'Tech Solutions Malaysia',
      country: 'Malaysia',
      flag: '🇲🇾',
      salary: 'MYR 4,000–6,000',
      category: 'professional',
      deadline: '2025-11-30',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Full-stack developer for fintech applications.'
    },
    {
      id: 4,
      title: 'Registered Nurse',
      company: 'Kuwait Medical Center',
      country: 'Kuwait',
      flag: '🇰🇼',
      salary: 'KWD 400–600',
      category: 'professional',
      deadline: '2025-12-15',
      type: 'Full-time',
      experience: '2+ years',
      description: 'ICU and emergency department nursing positions available.'
    },
    {
      id: 5,
      title: 'Construction Foreman',
      company: 'Romanian Infrastructure',
      country: 'Romania',
      flag: '🇷🇴',
      salary: 'EUR 800–1,200',
      category: 'skilled',
      deadline: '2025-11-20',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Supervise construction crews for infrastructure projects.'
    },
    {
      id: 6,
      title: 'Marketing Assistant',
      company: 'Italian Tourism Board',
      country: 'Italy',
      flag: '🇮🇹',
      salary: 'EUR 1,200–1,800',
      category: 'fresh-graduate',
      deadline: '2025-12-01',
      type: 'Full-time',
      experience: 'Entry level',
      description: 'Support tourism marketing initiatives and customer service.'
    },
  ];

  const countries = ['all', 'Saudi Arabia', 'Qatar', 'Malaysia', 'Kuwait', 'Romania', 'Italy'];
  const categories = ['all', 'skilled', 'semi-skilled', 'professional', 'fresh-graduate'];
  const experiences = ['all', 'Entry level', '1+ years', '2+ years', '3+ years'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || job.country === selectedCountry;
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesExperience = selectedExperience === 'all' || job.experience === selectedExperience;
    
    return matchesSearch && matchesCountry && matchesCategory && matchesExperience;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-4">
                Current Job Openings
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Browse through {jobs.length}+ current opportunities across 10+ countries
              </p>

              {/* Job Alerts Opt-in */}
              <div className="bg-white rounded-xl p-6 shadow-soft max-w-lg mx-auto">
                <div className="flex items-center space-x-3 mb-4">
                  <Bell className="w-6 h-6 text-accent" />
                  <h3 className="font-poppins font-semibold">Get Job Alerts</h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Your email or WhatsApp number"
                    className="flex-1"
                  />
                  <Button className="btn-hero">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search jobs or companies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Countries" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country === 'all' ? 'All Countries' : country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  {experiences.map((experience) => (
                    <SelectItem key={experience} value={experience}>
                      {experience === 'all' ? 'All Experience' : experience}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={() => {
                setSearchQuery('');
                setSelectedCountry('all');
                setSelectedCategory('all');
                setSelectedExperience('all');
              }}>
                <Filter className="w-4 h-4 mr-2" />
                Clear
              </Button>
            </div>
          </div>
        </section>

        {/* Jobs Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredJobs.length > 0 ? (
              <>
                <div className="mb-8">
                  <p className="text-muted-foreground">
                    Showing {filteredJobs.length} of {jobs.length} jobs
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredJobs.map((job, index) => (
                    <div
                      key={job.id}
                      className="card-corporate fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{job.flag}</span>
                          <div>
                            <h3 className="font-poppins font-semibold text-lg mb-1">
                              {job.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {job.company}
                            </p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                          {job.type}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{job.country}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-medium text-accent">{job.salary}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Experience: {job.experience}
                        </span>
                        <Link to={`/jobs/apply?job=${job.id}`}>
                          <Button size="sm" className="btn-hero">
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No jobs found matching your criteria
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCountry('all');
                    setSelectedCategory('all');
                    setSelectedExperience('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h2 className="text-3xl font-poppins font-bold mb-4">
                Don't See Your Dream Job?
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Submit your CV and we'll match you with suitable opportunities
              </p>
              <Link to="/jobs/apply">
                <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                  Submit Your CV
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Jobs;