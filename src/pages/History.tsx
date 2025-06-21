import React from 'react';
import { Calendar, User, Award, Clock } from 'lucide-react';

const History = () => {
  const timelineEvents = [
    {
      year: '1970',
      title: 'Foundation of the Parish',
      description: 'St. Antony\'s Church Illuppur was established by a group of devoted Catholic families.',
      icon: <Calendar className="h-6 w-6" />
    },
    {
      year: '1972',
      title: 'First Church Building',
      description: 'Construction of the original church building was completed with seating for 200 people.',
      icon: <Award className="h-6 w-6" />
    },
    {
      year: '1985',
      title: 'Parish School Established',
      description: 'St. Antony\'s Primary School was opened to serve the educational needs of the community.',
      icon: <Award className="h-6 w-6" />
    },
    {
      year: '1995',
      title: 'Church Renovation',
      description: 'Major renovation and expansion of the church to accommodate the growing congregation.',
      icon: <Award className="h-6 w-6" />
    },
    {
      year: '2005',
      title: 'Community Hall Construction',
      description: 'A new community hall was built for parish gatherings and social events.',
      icon: <Award className="h-6 w-6" />
    },
    {
      year: '2010',
      title: 'Branch Churches Established',
      description: 'Two branch churches were established to serve outlying communities.',
      icon: <Award className="h-6 w-6" />
    },
    {
      year: '2020',
      title: 'Golden Jubilee Preparations',
      description: 'Celebrations planned for the 50th anniversary of the parish.',
      icon: <Award className="h-6 w-6" />
    },
    {
      year: '2024',
      title: 'Digital Ministry Launch',
      description: 'Introduction of online services and digital community engagement platforms.',
      icon: <Award className="h-6 w-6" />
    }
  ];

  const pastPriests = [
    {
      name: 'Rev. Fr. Joseph Maria',
      period: '1970 - 1985',
      description: 'Founding pastor who established the parish and oversaw the construction of the first church building.',
      achievements: ['Founded the parish', 'Built first church', 'Established Sunday School']
    },
    {
      name: 'Rev. Fr. Thomas Xavier',
      period: '1985 - 2000',
      description: 'Led the parish through significant growth and established the parish school.',
      achievements: ['Opened parish school', 'Expanded congregation', 'Started youth programs']
    },
    {
      name: 'Rev. Fr. Paul Benedict',
      period: '2000 - 2015',
      description: 'Oversaw major renovations and the establishment of branch churches.',
      achievements: ['Church renovation', 'Branch churches', 'Community outreach programs']
    },
    {
      name: 'Rev. Fr. Michael Antony',
      period: '2015 - Present',
      description: 'Current pastor focusing on digital ministry and community service expansion.',
      achievements: ['Digital ministry', 'Enhanced social service', 'Youth engagement']
    }
  ];

  const milestones = [
    { year: 1970, families: 25, description: 'Parish founded' },
    { year: 1980, families: 85, description: 'Steady growth' },
    { year: 1990, families: 150, description: 'Community expansion' },
    { year: 2000, families: 250, description: 'Major milestone' },
    { year: 2010, families: 350, description: 'Branch churches added' },
    { year: 2024, families: 450, description: 'Present day' }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Our Rich History</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Five decades of faith, service, and community building
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Parish Timeline</h2>
            <p className="text-xl text-gray-600">Key moments in our church's journey</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="text-blue-600">
                          {event.icon}
                        </div>
                        <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth Chart */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Parish Growth</h2>
            <p className="text-xl text-gray-600">Our community has grown steadily over the decades</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{milestone.families}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{milestone.year}</h3>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Priests */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Priests Who Served</h2>
            <p className="text-xl text-gray-600">Spiritual leaders who shaped our parish</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastPriests.map((priest, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <User className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{priest.name}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-blue-600 font-semibold">{priest.period}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{priest.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {priest.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Legacy</h2>
            <p className="text-xl text-gray-600">Building on our past, looking to the future</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Faith Foundation</h3>
              <p className="text-gray-600">
                Built on the solid foundation of Catholic faith and teachings, 
                our parish continues to be a beacon of hope and spiritual guidance.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Service</h3>
              <p className="text-gray-600">
                From feeding the poor to educating children, our commitment to 
                serving the community remains at the heart of our mission.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Future Vision</h3>
              <p className="text-gray-600">
                As we look to the future, we continue to adapt and grow, 
                embracing new ways to serve God and our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;