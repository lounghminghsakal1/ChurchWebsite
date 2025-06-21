import React from 'react';
import { Church, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8 text-sky-400" />
              <span className="font-bold text-xl">St. Antony's Church</span>
            </div>
            <p className="text-gray-300 mb-4">
              A place of faith, community, and worship in Illuppur.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Illuppur, Tamil Nadu</span>
            </div>
          </div>

          {/* Mass Timings */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Mass Timings</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Sunday: 7:00 AM, 9:30 AM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Weekdays: 6:30 AM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Saturday: 6:30 PM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@stantonyschurch.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/services" className="block text-gray-300 hover:text-sky-400 transition-colors text-sm">
                Book a Mass
              </a>
              <a href="/clubs-activities" className="block text-gray-300 hover:text-sky-400 transition-colors text-sm">
                Join Activities
              </a>
              <a href="/about" className="block text-gray-300 hover:text-sky-400 transition-colors text-sm">
                About Parish
              </a>
              <a href="/branch-churches" className="block text-gray-300 hover:text-sky-400 transition-colors text-sm">
                Branch Churches
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 St. Antony's Church Illuppur. All rights reserved. Built with faith and love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;