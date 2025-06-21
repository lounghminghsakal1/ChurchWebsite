import React from 'react';
import { MapPin, Users, Phone, Mail, Clock, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">About Our Parish</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the heart and soul of St. Antony's Church Illuppur
          </p>
        </div>
      </section>

      {/* Church History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-sky-500">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Sacred History</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    St. Antony's Church Illuppur has been a beacon of faith and community service for over five decades. 
                    Established in 1970, our parish was founded by a small group of devoted Catholic families who dreamed 
                    of creating a spiritual home for the growing Christian community in Illuppur.
                  </p>
                  <p className="mb-4">
                    Named after St. Anthony of Padua, known for his powerful preaching and devotion to the poor, 
                    our church has always embodied the saint's spirit of service and compassion. From humble beginnings 
                    with just a few families, we have grown into a vibrant parish community.
                  </p>
                  <p>
                    Today, our church stands as a testament to faith, perseverance, and community unity, 
                    continuing to serve as a spiritual sanctuary and center for social outreach in the region.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-4">
                <img 
                  src="https://images.pexels.com/photos/208356/pexels-photo-208356.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Church Interior"
                  className="rounded-xl w-full h-80 object-cover"
                />
                <div className="absolute inset-4 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parish Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Parish Family</h2>
            <p className="text-xl text-gray-600">Numbers that tell our story of growth and community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-8 shadow-lg text-center border border-sky-200">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">800+</h3>
              <p className="text-gray-600">Total Families</p>
            </div>
            
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-8 shadow-lg text-center border border-sky-200">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10</h3>
              <p className="text-gray-600">Active Clubs</p>
            </div>
            
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-8 shadow-lg text-center border border-sky-200">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">54+</h3>
              <p className="text-gray-600">Years of Service</p>
            </div>
            
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-8 shadow-lg text-center border border-sky-200">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
              <p className="text-gray-600">Branch Churches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Church Address & Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Church</h2>
            <p className="text-xl text-gray-600">Find us and get in touch</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-sky-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-sky-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        St. Antony's Church<br />
                        Main Street, Illuppur<br />
                        Tamil Nadu 621606<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-sky-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">+91 98765 43211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-sky-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@stantonyschurch.org</p>
                      <p className="text-gray-600">parish@stantonyschurch.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-sky-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: After Mass until 1:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="https://maps.google.com/?q=St.+Antony's+Church+Illuppur+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <MapPin className="h-5 w-5" />
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-sky-200 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-sky-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Interactive Map</p>
                  <p className="text-gray-500">Click "View on Google Maps" to get directions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mass Timings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mass Timings</h2>
            <p className="text-xl text-gray-600">Join us for worship and prayer</p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-sky-200">
            <div className="bg-gradient-to-r from-sky-600 to-sky-700 p-6 text-white text-center">
              <h3 className="text-2xl font-bold">Weekly Schedule</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Sunday</span>
                  <span className="text-gray-600">7:00 AM, 9:30 AM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">6:30 AM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Saturday</span>
                  <span className="text-gray-600">6:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900">Special Occasions</span>
                  <span className="text-gray-600">As announced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;