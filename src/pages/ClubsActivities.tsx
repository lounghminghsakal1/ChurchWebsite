import React from 'react';
import { Heart, Users, Award, BookOpen, Calendar, MapPin, Clock } from 'lucide-react';

const ClubsActivities = () => {
  const serviceClubs = [
    {
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
      color: 'blue'
    },
    {
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
      color: 'green'
    },
    {
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
      color: 'purple'
    }
  ];

  const prayerClubs = [
    {
      name: 'Sacred Heart Area',
      members: 65,
      coordinator: 'Mrs. Mary Joseph',
      areas: ['Main Street', 'Church Road', 'Station Road']
    },
    {
      name: 'Our Lady Area',
      members: 58,
      coordinator: 'Mr. Peter Paul',
      areas: ['Market Street', 'School Lane', 'Gandhi Nagar']
    },
    {
      name: 'St. Joseph Area',
      members: 62,
      coordinator: 'Mrs. Rose Francis',
      areas: ['New Colony', 'Teachers Colony', 'Bank Street']
    },
    {
      name: 'Holy Spirit Area',
      members: 70,
      coordinator: 'Mr. John Xavier',
      areas: ['Bus Stand Area', 'Hospital Road', 'Court Street']
    },
    {
      name: 'Divine Mercy Area',
      members: 55,
      coordinator: 'Mrs. Agnes Michael',
      areas: ['River Side', 'Garden Street', 'Old Town']
    },
    {
      name: 'St. Anthony Area',
      members: 68,
      coordinator: 'Mr. Thomas Benedict',
      areas: ['Industrial Area', 'Railway Colony', 'Farmers Street']
    },
    {
      name: 'Holy Family Area',
      members: 72,
      coordinator: 'Mrs. Elizabeth David',
      areas: ['Residential Area', 'Green Park', 'Sunrise Colony']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600',
      green: 'from-green-500 to-green-600 bg-green-100 text-green-600',
      purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Clubs & Activities</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join our vibrant community through various clubs and activities that serve God and others
          </p>
        </div>
      </section>

      {/* Service Clubs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Clubs</h2>
            <p className="text-xl text-gray-600">Serving our community with love and dedication</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceClubs.map((club, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`bg-gradient-to-r ${getColorClasses(club.color).split(' ')[0]} ${getColorClasses(club.color).split(' ')[1]} p-6 text-white`}>
                  <div className="flex items-center space-x-3 mb-4">
                    {club.icon}
                    <h3 className="text-2xl font-bold">{club.name}</h3>
                  </div>
                  <p className="text-blue-100">{club.description}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Activities & Services:</h4>
                  <ul className="space-y-3 mb-6">
                    {club.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${getColorClasses(club.color).split(' ')[1]}`}></div>
                        <span className="text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">{club.meeting}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Groups */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seven Prayer Groups</h2>
            <p className="text-xl text-gray-600 mb-8">Area-based prayer communities that take turns in Sunday services</p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-yellow-800">How It Works</h3>
              </div>
              <p className="text-yellow-700">
                Each prayer group takes turns conducting Sunday services in a weekly cycle. 
                They lead Bible readings, prayers, and handle offerings. 
                Membership is based on residential area and cannot be changed.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {prayerClubs.map((group, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-blue-600">{index + 1}</span>
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
                          <MapPin className="h-3 w-3 text-gray-400" />
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
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sunday Service Schedule</h3>
              <p className="text-gray-600 mb-6">
                Each prayer group rotates weekly to conduct the Sunday service, 
                ensuring active participation from all areas of our parish.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">7:00 AM Mass Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">9:30 AM Mass Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-xl text-gray-600">Join our service clubs and make a difference in the community</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Join Service Clubs</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Attend Sunday Mass regularly</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Speak with the club coordinator after service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Participate in club activities and meetings</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Show commitment to serving the community</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Prayer Group Assignment</h3>
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                  <p className="text-yellow-800 font-semibold mb-2">
                    <BookOpen className="inline h-5 w-5 mr-2" />
                    Important Note
                  </p>
                  <p className="text-yellow-700 text-sm">
                    Prayer group membership is automatically assigned based on your residential area. 
                    This ensures equal representation from all parts of our parish community 
                    and cannot be changed voluntarily.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                For more information about joining our clubs and activities, 
                please contact the parish office or speak with our priest.
              </p>
              <a 
                href="/about" 
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Users className="h-5 w-5" />
                <span>Contact Parish Office</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubsActivities;