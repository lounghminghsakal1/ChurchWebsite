import React from 'react';
import { MapPin, Calendar, Clock, Phone, Users, Church, Heart, DollarSign, Building } from 'lucide-react';

const BranchChurches = () => {
  const branchChurches = [
    {
      name: 'Vellai Mariyal Church',
      description: 'A serene branch church dedicated to Our Lady, serving the faithful in the northern region of our parish.',
      address: 'Vellai Mariyal Street, North Illuppur, Tamil Nadu 621607',
      patron: 'Our Lady of Lourdes',
      established: '1985',
      festival: {
        name: 'Our Lady of Lourdes Feast',
        month: 'April',
        date: 'Second Sunday of April',
        description: 'Annual feast celebration with special masses, procession, and community feast'
      },
      mass_timings: [
        'Sunday: 8:00 AM',
        'Wednesday: 6:30 AM',
        'Saturday: 6:00 PM'
      ],
      facilities: ['Main Chapel', 'Community Hall', 'Parking Area', 'Parish Office'],
      families: 85,
      coordinator: 'Mr. Anthony Raj',
      phone: '+91 98765 43215',
      image: 'https://images.pexels.com/photos/161089/church-building-religion-christian-161089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      specialProject: {
        title: 'Major Development Initiative',
        description: 'Building a prayer hall, community kitchen for free food service, and surrounding walls',
        cost: '₹60 Lakhs',
        features: ['New Prayer Hall', 'Community Kitchen', 'Free Food Service Area', 'Boundary Walls', 'Enhanced Facilities']
      }
    },
    {
      name: 'Sathiyanatha Puram Antony Church',
      description: 'Named after our patron saint, this branch church serves the eastern community with the same spirit of St. Anthony.',
      address: 'Main Road, Sathiyanatha Puram, East Illuppur, Tamil Nadu 621608',
      patron: 'St. Anthony of Padua',
      established: '1992',
      festival: {
        name: 'St. Anthony Feast',
        month: 'June',
        date: 'June 13th (St. Anthony\'s Day)',
        description: 'Traditional feast day celebration with novenas, special masses, and community gathering'
      },
      mass_timings: [
        'Sunday: 7:30 AM, 9:00 AM',
        'Tuesday: 6:30 AM',
        'Friday: 6:00 PM'
      ],
      facilities: ['Main Church', 'Adoration Chapel', 'Meeting Rooms', 'Children\'s Area'],
      families: 120,
      coordinator: 'Mrs. Maria Joseph',
      phone: '+91 98765 43216',
      image: 'https://images.pexels.com/photos/208356/pexels-photo-208356.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Sacred Heart Chapel',
      description: 'A peaceful chapel dedicated to the Sacred Heart of Jesus, providing spiritual solace to the southern community.',
      address: 'Sacred Heart Lane, South Illuppur, Tamil Nadu 621609',
      patron: 'Sacred Heart of Jesus',
      established: '2005',
      festival: {
        name: 'Sacred Heart Feast',
        month: 'August',
        date: 'Third Friday of August',
        description: 'Devotional celebration focusing on the Sacred Heart devotion with special prayers and blessing'
      },
      mass_timings: [
        'Sunday: 8:30 AM',
        'Thursday: 6:30 AM',
        'First Friday: 7:00 PM'
      ],
      facilities: ['Chapel', 'Prayer Garden', 'Meditation Area', 'Small Hall'],
      families: 65,
      coordinator: 'Mr. Paul Xavier',
      phone: '+91 98765 43217',
      image: 'https://images.pexels.com/photos/161089/church-building-religion-christian-161089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Branch Churches</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Extending our faith community across the region with dedicated branch churches
          </p>
        </div>
      </section>

      {/* Branch Churches Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Branch Churches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our parish extends its ministry through three beautiful branch churches, 
              each serving local communities while maintaining our shared faith and traditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Church className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3 Branch Churches</h3>
              <p className="text-gray-600">Serving communities across the region</p>
            </div>
            
            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">270+ Families</h3>
              <p className="text-gray-600">Total families across all branches</p>
            </div>
            
            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Annual Festivals</h3>
              <p className="text-gray-600">Each church celebrates its patron saint</p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Branch Churches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {branchChurches.map((church, index) => (
            <div key={index} className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl shadow-xl overflow-hidden border border-sky-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Church Image */}
                <div className="relative">
                  <img 
                    src={church.image}
                    alt={church.name}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{church.name}</h3>
                    <p className="text-sm opacity-90">Est. {church.established}</p>
                  </div>
                </div>
                
                {/* Church Details */}
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{church.name}</h2>
                    <p className="text-gray-600 mb-4">{church.description}</p>
                    <div className="flex items-center space-x-2 text-sky-600 mb-4">
                      <Church className="h-5 w-5" />
                      <span className="font-semibold">Patron: {church.patron}</span>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="mb-6">
                    <div className="flex items-start space-x-3 mb-3">
                      <MapPin className="h-5 w-5 text-sky-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600 text-sm">{church.address}</p>
                        <a 
                          href={getGoogleMapsUrl(church.address)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:text-sky-700 text-sm font-medium"
                        >
                          View on Google Maps →
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center bg-white rounded-lg p-3 border border-sky-200">
                      <Users className="h-6 w-6 text-sky-600 mx-auto mb-1" />
                      <div className="text-xl font-bold text-gray-900">{church.families}</div>
                      <div className="text-sm text-gray-600">Families</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3 border border-sky-200">
                      <Clock className="h-6 w-6 text-sky-600 mx-auto mb-1" />
                      <div className="text-xl font-bold text-gray-900">{church.mass_timings.length}</div>
                      <div className="text-sm text-gray-600">Mass Times</div>
                    </div>
                  </div>
                  
                  {/* Contact */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-600">Coordinator</p>
                      <p className="font-semibold text-gray-900">{church.coordinator}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sky-600">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm font-medium">{church.phone}</span>
                    </div>
                  </div>

                  {/* Special Project for Vellai Mariyal Church */}
                  {church.specialProject && (
                    <div className="bg-white rounded-lg p-4 border-2 border-sky-300">
                      <div className="flex items-center space-x-2 mb-3">
                        <Building className="h-5 w-5 text-sky-600" />
                        <h4 className="font-bold text-gray-900">{church.specialProject.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{church.specialProject.description}</p>
                      <div className="flex items-center space-x-2 mb-3">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        <span className="font-bold text-green-600">{church.specialProject.cost}</span>
                      </div>
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Project Features:</h5>
                        <div className="grid grid-cols-2 gap-1">
                          {church.specialProject.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-1">
                              <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white p-3 rounded-lg text-center">
                        <Heart className="h-5 w-5 mx-auto mb-2" />
                        <p className="text-sm font-semibold mb-2">Support This Initiative</p>
                        <p className="text-xs mb-3">Your donations help build community facilities</p>
                        <a 
                          href="tel:+919876543210"
                          className="inline-flex items-center space-x-2 bg-white text-sky-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-sky-50 transition-colors duration-200"
                        >
                          <Phone className="h-4 w-4" />
                          <span>Contact Fr. Eugine</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Festival Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Annual Festival Calendar</h2>
            <p className="text-xl text-gray-600">Plan your visits for these special celebrations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branchChurches.map((church, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-sky-200">
                <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-6 text-white text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-xl font-bold">{church.festival.name}</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="bg-sky-100 rounded-lg p-4 mb-4">
                      <div className="text-2xl font-bold text-sky-600">{church.festival.month}</div>
                      <div className="text-sm text-sky-600">{church.festival.date}</div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{church.name}</h4>
                    <p className="text-gray-600 text-sm">{church.festival.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mass Timings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mass Timings</h2>
            <p className="text-xl text-gray-600">Regular worship schedule across all branch churches</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branchChurches.map((church, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 shadow-xl border border-sky-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{church.name}</h3>
                <div className="space-y-3">
                  {church.mass_timings.map((timing, timingIndex) => (
                    <div key={timingIndex} className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-sky-600" />
                      <span className="text-gray-700">{timing}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-sky-200">
                  <p className="text-sm text-gray-600">
                    <strong>Facilities:</strong> {church.facilities.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BranchChurches;