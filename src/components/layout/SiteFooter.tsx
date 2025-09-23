import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SiteFooter = () => {
  const footerLinks = {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Licenses & Certifications', href: '/about#certs' },
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms & Conditions', href: '/legal/terms' },
    ],
    services: [
      { label: 'Manpower Export', href: '/services/manpower' },
      { label: 'Hajj & Umrah', href: '/services/hajj-umrah' },
      { label: 'Saudi Tourism', href: '/services/saudi-tourism' },
      { label: 'Visa & Ticketing', href: '/services/visa-ticketing' },
      { label: 'Training & Guidance', href: '/services/training' },
      { label: 'Holiday Packages', href: '/services/holiday-packages' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Career Guides', href: '/resources/guides' },
      { label: 'News', href: '/news' },
      { label: 'Success Stories', href: '/success' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info & Contact */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-xl gradient-text">
                    Espanova
                  </h3>
                  <p className="text-xs text-white/60">Global Opportunities</p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                Government-approved overseas manpower recruiting and Hajj/Umrah tourism agency. 
                Your trusted partner for global opportunities.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-sm">Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-sm">+880 1521-217439</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-sm">info@espanova.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-sm">Sat-Thu 10:00–19:00</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-8">
              {/* Company */}
              <div>
                <h4 className="font-poppins font-semibold text-lg mb-4">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-poppins font-semibold text-lg mb-4">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-poppins font-semibold text-lg mb-4">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h4 className="font-poppins font-semibold text-lg mb-4">
                Get Job Alerts & Travel Deals
              </h4>
              <p className="text-white/70 text-sm mb-4">
                Subscribe to receive the latest job openings and exclusive travel packages.
              </p>
              
              <div className="space-y-3 mb-6">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="w-full btn-secondary">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-white/70">
                  <input type="checkbox" className="rounded" />
                  <span>Job alerts via email</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/70">
                  <input type="checkbox" className="rounded" />
                  <span>WhatsApp notifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-white/60">
              © 2024 Espanova. All rights reserved. Licensed by BMET: RL-1234/2019, IATA: 12345678
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/8801521217439?text=Hello%20Espanova,%20I%20need%20information%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801521217439"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float animate-pulse-glow"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default SiteFooter;