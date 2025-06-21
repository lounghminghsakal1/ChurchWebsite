import React, { useState } from 'react';
import { Heart, Users, Award, BookOpen, Calendar, MapPin, Clock, UserPlus, CheckCircle } from 'lucide-react';

const ClubsActivities = () => {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    phone: '',
    email: '',
    familyCard: '',
    address: '',
    reason: ''
  });

  const serviceClubs = [
    {
      id: 'vincent-de-paul',
      name: 'Vincent de Paul Club',
      icon: <Heart className="h-8 w-8" />,
      description: 'Dedicated to serving the poor and needy in our community',
      activities: [
        'Feed 10 poor families every month',
        'Provide clothing and essentials',
        'Home visits to elderly and sick',
        'Emergency financial assistance'
      ],
      meeting: 'First Sunday of every month',
      color: 'sky',
      canApply: true
    },
    {
      id: 'antonys-youngsters',
      name: "Antony's Youngsters Club",
      icon: <Award className="h-8 w-8" />,
      description: 'Empowering youth through education and achievement recognition',
      activities: [
        'Conduct educational competitions',
        'Prize distribution for students',
        'Youth leadership programs',
        'Sports and cultural events'
      ],
      meeting: 'Second Sunday of every month',
      color: 'sky',
      canApply: true
    },
    {
      id: 'womens-club',
      name: "Women's Club",
      icon: <Users className="h-8 w-8" />,
      description: 'Bringing together women for fellowship and community service',
      activities: [
        'Monthly devotional meetings',
        'Community kitchen service',
        'Altar decoration and maintenance',
        'Prayer groups and retreats'
      ],
      meeting: 'Third Sunday of every month',
      color: 'sky',
      canApply: true
    }
  ];

  const prayerClubs = [
    {
      name: 'Sacred Heart Area',
      members: 115,
      coordinator: 'Mrs. Mary Joseph',
      areas: ['Main Street', 'Church Road', 'Station Road']
    },
    {
      name: 'Our Lady Area',
      members: 108,
      coordinator: 'Mr. Peter Paul',
      areas: ['Market Street', 'School Lane', 'Gandhi Nagar']
    },
    {
      name: 'St. Joseph Area',
      members: 122,
      coordinator: 'Mrs. Rose Francis',
      areas: ['New Colony', 'Teachers Colony', 'Bank Street']
    },
    {
      name: 'Holy Spirit Area',
      members: 130,
      coordinator: 'Mr. John Xavier',
      areas: ['Bus Stand Area', 'Hospital Road', 'Court Street']
    },
    {
      name: 'Divine Mercy Area',
      members: 105,
      coordinator: 'Mrs. Agnes Michael',
      areas: ['River Side', 'Garden Street', 'Old Town']
    },
    {
      name: 'St. Anthony Area',
      members: 118,
      coordinator: 'Mr. Thomas Benedict',
      areas: ['Industrial Area', 'Railway Colony', 'Farmers Street']
    },
    {
      name: 'Holy Family Area',
      members: 132,
      coordinator: 'Mrs. Elizabeth David',
      areas: ['Residential Area', 'Green Park', 'Sunrise Colony']
    }
  ];

  const handleClubSelect = (clubId: string) => {
    setSelectedClub(clubId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Your application has been submitted! The club coordinator will contact you soon.');
    setApplicationData({
      name: '',
      phone: '',
      email: '',
      familyCard: '',
      address: '',
      reason: ''
    });
    setSelectedClub(null);
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Clubs & Activities</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join our vibrant community through various clubs and activities that serve God and others
          </p>
        </div>
      </section>

      {/* Service Clubs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Clubs</h2>
            <p className="text-xl text-gray-600">Serving our community with love and dedication</p>
          </div>
          
          <div className="space-y-8">
            {serviceClubs.map((club, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-sky-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Club Info */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-sky-100 p-3 rounded-full">
                        {club.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{club.name}</h3>
                        <p className="text-gray-600">{club.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Activities & Services:</h4>
                        <ul className="space-y-2">
                          {club.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-sky-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
                          <div className="flex items-center space-x-2 mb-2">
                            <Calendar className="h-5 w-5 text-sky-600" />
                            <span className="font-semibold text-gray-900">Meeting Schedule</span>
                          </div>
                          <p className="text-gray-600">{club.meeting}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Apply Button */}
                  <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-8 flex items-center justify-center border-l border-sky-200">
                    <div className="text-center">
                      <UserPlus className="h-12 w-12 text-sky-600 mx-auto mb-4" />
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Join This Club</h4>
                      <p className="text-gray-600 mb-4 text-sm">Apply to become a member and serve the community</p>
                      <button
                        onClick={() => handleClubSelect(club.id)}
                        className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {selectedClub && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl shadow-xl p-8 border border-sky-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Club Application</h2>
                <p className="text-lg text-gray-600">
                  Applying for: {serviceClubs.find(c => c.id === selectedClub)?.name}
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={applicationData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="familyCard" className="block text-sm font-medium text-gray-700 mb-2">
                      Family Card Number *
                    </label>
                    <input
                      type="text"
                      id="familyCard"
                      name="familyCard"
                      required
                      value={applicationData.familyCard}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={applicationData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join this club? *
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    required
                    value={applicationData.reason}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Please share your motivation and how you'd like to contribute..."
                  ></textarea>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setSelectedClub(null)}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Prayer Groups */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seven Prayer Groups</h2>
            <p className="text-xl text-gray-600 mb-8">Area-based prayer communities that take turns in Sunday services</p>
            
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200 rounded-xl p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6 text-sky-600" />
                <h3 className="text-lg font-semibold text-sky-800">How It Works</h3>
              </div>
              <p className="text-sky-700">
                Each prayer group takes turns conducting Sunday services in a weekly cycle. 
                They lead Bible readings, prayers, and handle offerings. 
                Membership is based on residential area and cannot be changed.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {prayerClubs.map((group, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sky-200">
                <div className="text-center mb-4">
                  <div className="bg-sky-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{group.name}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Members:</span>
                    <span className="font-semibold text-gray-900">{group.members}</span>
                  </div>
                  
                  <div>
                    <span className="text-gray-600 text-sm">Coordinator:</span>
                    <p className="font-semibold text-gray-900">{group.coordinator}</p>
                  </div>
                  
                  <div>
                    <span className="text-gray-600 text-sm">Areas Covered:</span>
                    <div className="mt-1 space-y-1">
                      {group.areas.map((area, areaIndex) => (
                        <div key={areaIndex} className="flex items-center space-x-2">
                          <MapPin className="h-3 w-3 text-sky-500" />
                          <span className="text-sm text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-8 shadow-xl max-w-2xl mx-auto border border-sky-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sunday Service Schedule</h3>
              <p className="text-gray-600 mb-6">
                Each prayer group rotates weekly to conduct the Sunday service, 
                ensuring active participation from all areas of our parish.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-sky-600" />
                  <span className="text-gray-700">7:00 AM Mass Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-sky-600" />
                  <span className="text-gray-700">9:30 AM Mass Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubsActivities;