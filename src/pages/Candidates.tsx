import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  User, 
  Download,
  Eye,
  Briefcase,
  GraduationCap,
  Star,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Candidates = () => {
  const [filters, setFilters] = useState({
    category: '',
    country: '',
    skills: '',
    experience: '',
    education: ''
  });

  const candidates = [
    {
      id: 1,
      name: "Mohammad Rahman",
      avatar: "/placeholder.svg",
      skills: ["Welding", "Fabrication", "Blueprint Reading"],
      experience: "5+ years",
      education: "Diploma in Mechanical Engineering",
      preferredCountry: "Saudi Arabia",
      rating: 4.8,
      verified: true
    },
    {
      id: 2,
      name: "Fatima Khatun",
      avatar: "/placeholder.svg",
      skills: ["Nursing", "Patient Care", "Medical Records"],
      experience: "3+ years",
      education: "Bachelor in Nursing",
      preferredCountry: "Qatar",
      rating: 4.9,
      verified: true
    },
    {
      id: 3,
      name: "Abdul Karim",
      avatar: "/placeholder.svg",
      skills: ["Electrical", "PLC Programming", "Maintenance"],
      experience: "7+ years",
      education: "BSc in Electrical Engineering",
      preferredCountry: "UAE",
      rating: 4.7,
      verified: true
    },
    {
      id: 4,
      name: "Rashida Begum",
      avatar: "/placeholder.svg",
      skills: ["Housekeeping", "Cooking", "Child Care"],
      experience: "2+ years",
      education: "Secondary School Certificate",
      preferredCountry: "Kuwait",
      rating: 4.6,
      verified: true
    },
    {
      id: 5,
      name: "Mizanur Rahman",
      avatar: "/placeholder.svg",
      skills: ["Heavy Equipment Operation", "Safety Management"],
      experience: "6+ years",
      education: "Trade Certificate",
      preferredCountry: "Oman",
      rating: 4.8,
      verified: true
    },
    {
      id: 6,
      name: "Nasreen Akter",
      avatar: "/placeholder.svg",
      skills: ["Accounting", "Bookkeeping", "Financial Analysis"],
      experience: "4+ years",
      education: "BBA in Accounting",
      preferredCountry: "Malaysia",
      rating: 4.9,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Next Employee is Just a{' '}
              <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
                Search Away
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Browse thousands of verified candidates across industries, skills, and countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Search className="w-5 h-5 mr-2" />
                Search Candidates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    placeholder="Search by name or skills..."
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Job Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="skilled">Skilled</SelectItem>
                  <SelectItem value="semi-skilled">Semi-skilled</SelectItem>
                  <SelectItem value="professionals">Professionals</SelectItem>
                  <SelectItem value="fresh-graduates">Fresh Graduates</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Preferred Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                  <SelectItem value="qatar">Qatar</SelectItem>
                  <SelectItem value="uae">UAE</SelectItem>
                  <SelectItem value="kuwait">Kuwait</SelectItem>
                  <SelectItem value="oman">Oman</SelectItem>
                  <SelectItem value="malaysia">Malaysia</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">0-1 years</SelectItem>
                  <SelectItem value="2-3">2-3 years</SelectItem>
                  <SelectItem value="4-5">4-5 years</SelectItem>
                  <SelectItem value="6+">6+ years</SelectItem>
                </SelectContent>
              </Select>

              <Button className="w-full">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
            
            <div className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">1,247</span> verified candidates
            </div>
          </div>
        </div>
      </section>

      {/* Candidates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidates.map((candidate) => (
              <Card key={candidate.id} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={candidate.avatar}
                        alt={candidate.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      {candidate.verified && (
                        <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{candidate.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{candidate.experience}</span>
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{candidate.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Key Skills:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Education:</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{candidate.education}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Preferred Country:</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{candidate.preferredCountry}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View Profile
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      CV
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Candidates
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Looking for a Specific Skill?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let us connect you directly with the perfect candidate for your needs.
          </p>
          <Button variant="gold" size="xl">
            Contact Us for Custom Search
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Candidates;