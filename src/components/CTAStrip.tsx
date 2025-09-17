import React from 'react';
import { MessageCircle, Bell, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTAStrip = () => {
  return (
    <section className="py-16 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <MessageCircle className="w-8 h-8" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Get Job Alerts on WhatsApp
          </h2>
          
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Be the first to know about new opportunities. Get instant notifications 
            for jobs matching your profile directly on WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/8801XXXXXXXXX?text=I%20want%20to%20subscribe%20to%20job%20alerts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                <Bell className="w-5 h-5 mr-2" />
                Subscribe to Alerts
              </Button>
            </a>
            
            <div className="flex items-center text-white/80 text-sm">
              <span>✓ Free service</span>
              <span className="mx-3">•</span>
              <span>✓ Instant notifications</span>
              <span className="mx-3">•</span>
              <span>✓ Unsubscribe anytime</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-poppins font-bold mb-2">12K+</div>
              <div className="text-white/80">Active Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-poppins font-bold mb-2">50+</div>
              <div className="text-white/80">New Jobs Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-poppins font-bold mb-2">24/7</div>
              <div className="text-white/80">Instant Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;