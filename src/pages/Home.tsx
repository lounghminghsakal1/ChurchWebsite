import React from 'react';
import { Calendar, Camera, Clock, Phone, Mail, MapPin, Users, Heart } from 'lucide-react';

const Home = () => {
  const ongoingActivities = [
    {
      title: 'Daily Morning Mass',
      time: '6:30 AM',
      description: 'Join us for daily morning prayers and mass',
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: 'Sunday School',
      time: 'Sundays 10:30 AM',
      description: 'Religious education for children',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Vincent de Paul Service',
      time: 'Monthly',
      description: 'Feeding 10 poor families every month',
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'Prayer Group Meetings',
      time: 'Every Sunday',
      description: '7 area-based prayer groups take turns',
      icon: <Users className="h-6 w-6" />
    }
  ];

  const upcomingEvents = [
    {
      date: 'Jan 15, 2024',
      title: 'St. Antony Feast Preparation',
      description: 'Planning meeting for annual feast celebrations'
    },
    {
      date: 'Jan 20, 2024',
      title: 'Youth Club Prize Distribution',
      description: 'Awards ceremony for students by Antony\'s Youngsters Club'
    },
    {
      date: 'Feb 5, 2024',
      title: 'Women\'s Club Meeting',
      description: 'Monthly gathering and community service planning'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(2, 132, 199, 0.8), rgba(3, 105, 161, 0.9)), url("https://images.pexels.com/photos/161089/church-building-religion-christian-161089.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Welcome to<br />
            <span className="text-sky-200">St. Antony's Church</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Illuppur - A place of faith, community, and worship where everyone is welcome
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services" 
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Book a Mass
            </a>
            <a 
              href="/about" 
              className="border-2 border-white hover:bg-white hover:text-sky-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Priest Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Parish Priest</h2>
            <p className="text-xl text-gray-600">Spiritual guidance and pastoral care</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-sky-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/6469142/pexels-photo-6469142.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                    alt="Parish Priest"
                    className="w-32 h-32 rounded-full object-cover border-4 border-sky-200 shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Rev. Fr. Eugine</h3>
                  <p className="text-lg text-gray-600 mb-4">Parish Priest</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <Phone className="h-5 w-5 text-sky-600" />
                      <span className="text-gray-700">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <Mail className="h-5 w-5 text-sky-600" />
                      <span className="text-gray-700">fr.eugine@stantonyschurch.org</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                    <span className="font-semibold">Available</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Office Hours: 9 AM - 5 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ongoing Activities</h2>
            <p className="text-xl text-gray-600">Join us in our daily spiritual journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ongoingActivities.map((activity, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sky-200">
                <div className="text-sky-600 mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-sky-600 font-semibold mb-2">{activity.time}</p>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Mark your calendars for these special occasions</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sky-200">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex items-center space-x-2 text-sky-600">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Church Photos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Beautiful Church</h2>
            <p className="text-xl text-gray-600">Take a visual journey through our sacred spaces</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/161089/church-building-religion-christian-161089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Church Exterior"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">Church Exterior</h3>
                  <p className="text-sm opacity-90">Beautiful architecture and peaceful surroundings</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/208356/pexels-photo-208356.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Church Interior"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">Main Altar</h3>
                  <p className="text-sm opacity-90">Sacred space for worship and prayer</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/5206040/pexels-photo-5206040.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Community Gathering"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">Community Hall</h3>
                  <p className="text-sm opacity-90">Where our parish family gathers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="inline-flex items-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              <Camera className="h-5 w-5" />
              <span>View More Photos</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;