import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Stethoscope, 
  Monitor, 
  Car, 
  ChefHat, 
  Tractor, 
  GraduationCap,
  ArrowRight 
} from 'lucide-react';

const JobCategories = () => {
  const categories = [
    {
      icon: Wrench,
      title: 'Engineers',
      subtitle: 'Civil, Mechanical, Electrical',
      count: '450+ Jobs',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Stethoscope,
      title: 'Doctors',
      subtitle: 'Medical professionals',
      count: '180+ Jobs',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: Monitor,
      title: 'IT',
      subtitle: 'Software, Network, Support',
      count: '320+ Jobs',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Car,
      title: 'Drivers',
      subtitle: 'Heavy, Light vehicles',
      count: '680+ Jobs',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: ChefHat,
      title: 'Hospitality',
      subtitle: 'Hotels, Restaurants',
      count: '290+ Jobs',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Tractor,
      title: 'Agro Workers',
      subtitle: 'Farming, Agriculture',
      count: '150+ Jobs',
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: GraduationCap,
      title: 'Fresh Graduates',
      subtitle: 'Entry-level positions',
      count: '420+ Jobs',
      gradient: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
            Job Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find opportunities that match your skills and experience level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.title}
                to={`/jobs?category=${category.title}`}
                className="group bg-white rounded-2xl p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg font-poppins font-semibold mb-1 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {category.subtitle}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">
                    {category.count}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-corporate text-center">
            <h3 className="text-2xl font-poppins font-semibold gradient-text mb-2">2,800+</h3>
            <p className="text-muted-foreground">Active Job Openings</p>
          </div>
          
          <div className="card-corporate text-center">
            <h3 className="text-2xl font-poppins font-semibold gradient-text mb-2">10+</h3>
            <p className="text-muted-foreground">Countries</p>
          </div>
          
          <div className="card-corporate text-center">
            <h3 className="text-2xl font-poppins font-semibold gradient-text mb-2">95%</h3>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;