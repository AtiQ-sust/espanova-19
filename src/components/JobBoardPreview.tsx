import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JobBoardPreview = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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
    },
    {
      id: 2,
      title: 'Hotel Housekeeping',
      company: 'Qatar Hospitality Group',
      country: 'Qatar',
      flag: '🇶🇦',
      salary: 'QAR 1,800–2,200',
      category: 'semi-skilled',
      deadline: '2025-11-15',
      type: 'Full-time',
      experience: '1+ years',
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
    },
    {
      id: 5,
      title: 'Construction Worker',
      company: 'Romanian Infrastructure',
      country: 'Romania',
      flag: '🇷🇴',
      salary: 'EUR 800–1,200',
      category: 'skilled',
      deadline: '2025-11-20',
      type: 'Full-time',
      experience: '1+ years',
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
    },
  ];

  const filters = [
    { id: 'all', label: 'All Jobs', count: jobs.length },
    { id: 'skilled', label: 'Skilled', count: jobs.filter(j => j.category === 'skilled').length },
    { id: 'professional', label: 'Professional', count: jobs.filter(j => j.category === 'professional').length },
    { id: 'semi-skilled', label: 'Semi-skilled', count: jobs.filter(j => j.category === 'semi-skilled').length },
    { id: 'fresh-graduate', label: 'Fresh Graduate', count: jobs.filter(j => j.category === 'fresh-graduate').length },
  ];

  const filteredJobs = activeFilter === 'all' 
    ? jobs.slice(0, 6) 
    : jobs.filter(job => job.category === activeFilter).slice(0, 6);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
            Latest Job Openings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our current opportunities and apply today
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-primary text-white shadow-medium'
                  : 'bg-white text-foreground hover:bg-muted'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                <Link to={`/jobs/${job.id}`}>
                  <Button size="sm" className="btn-hero">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/jobs">
            <Button size="lg" className="btn-hero text-lg px-8 py-4">
              <Filter className="w-5 h-5 mr-2" />
              View All Jobs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobBoardPreview;