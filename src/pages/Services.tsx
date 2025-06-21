import React, { useState } from 'react';
import { Calendar, Clock, Users, FileText, Heart, Baby, Church, Cross, Gift, Star, CheckCircle } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    familyCard: '',
    date: '',
    time: '',
    specialRequests: ''
  });

  const services = [
    {
      id: 'mass-booking',
      title: 'Mass Booking',
      icon: <Church className="h-8 w-8" />,
      description: 'Book a special mass for your intentions, anniversaries, or special occasions.',
      color: 'blue',
      requirements: ['Family Card Number', 'Preferred Date and Time', 'Intention Details']
    },
    {
      id: 'baptism',
      title: 'Baptism',
      icon: <Baby className="h-8 w-8" />,
      description: 'Register for the sacrament of baptism for infants and adults.',
      color: 'green',
      requirements: ['Birth Certificate', 'Family Card', 'Godparents Information', 'Baptism Preparation Certificate']
    },
    {
      id: 'marriage',
      title: 'Marriage',
      icon: <Heart className="h-8 w-8" />,
      description: 'Book your wedding ceremony and complete pre-marriage requirements.',
      color: 'red',
      requirements: ['Family Cards of Both Families', 'Birth Certificates', 'Freedom to Marry Certificate', 'Pre-Marriage Course Certificate']
    },
    {
      id: 'confirmation',
      title: 'Confirmation',
      icon: <Cross className="h-8 w-8" />,
      description: 'Register for the sacrament of confirmation for young adults.',
      color: 'purple',
      requirements: ['Baptism Certificate', 'Family Card', 'Confirmation Class Completion', 'Sponsor Information']
    },
    {
      id: 'first-communion',
      title: 'First Holy Communion',
      icon: <Star className="h-8 w-8" />,
      description: 'Prepare children for their first reception of the Eucharist.',
      color: 'yellow',
      requirements: ['Baptism Certificate', 'Family Card', 'Catechism Class Completion', 'Age Requirement (7+ years)']
    },
    {
      id: 'funeral',
      title: 'Funeral Services',
      icon: <Cross className="h-8 w-8" />,
      description: 'Arrange funeral mass and burial services for your loved ones.',
      color: 'gray',
      requirements: ['Death Certificate', 'Family Card', 'Burial Plot Information', 'Family Contact Details']
    },
    {
      id: 'blessing',
      title: 'House Blessing',
      icon: <Gift className="h-8 w-8" />,
      description: 'Request priest visit for house blessing and special occasions.',
      color: 'indigo',
      requirements: ['Family Card', 'Address Details', 'Preferred Date and Time', 'Special Occasion Details']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600 border-blue-200',
      green: 'from-green-500 to-green-600 bg-green-100 text-green-600 border-green-200',
      red: 'from-red-500 to-red-600 bg-red-100 text-red-600 border-red-200',
      purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600 border-purple-200',
      yellow: 'from-yellow-500 to-yellow-600 bg-yellow-100 text-yellow-600 border-yellow-200',
      gray: 'from-gray-500 to-gray-600 bg-gray-100 text-gray-600 border-gray-200',
      indigo: 'from-indigo-500 to-indigo-600 bg-indigo-100 text-indigo-600 border-indigo-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Your service request has been submitted! The priest will contact you soon for confirmation.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      familyCard: '',
      date: '',
      time: '',
      specialRequests: ''
    });
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Parish Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Book sacraments and special services - All requests are reviewed and finalized by our priest
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-yellow-600" />
              <h3 className="text-lg font-semibold text-yellow-800">Important Information</h3>
            </div>
            <ul className="text-yellow-700 space-y-2">
              <li>• <strong>Family Card Required:</strong> All service bookings require a valid family card number</li>
              <li>• <strong>Priest Approval:</strong> All requests are subject to priest approval and scheduling</li>
              <li>• <strong>Advance Booking:</strong> Please book at least 2 weeks in advance for special occasions</li>
              <li>• <strong>Contact:</strong> You will be contacted within 48 hours for confirmation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Services</h2>
            <p className="text-xl text-gray-600">Select a service to book your appointment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  selectedService === service.id 
                    ? `${getColorClasses(service.color).split(' ')[3]} border-opacity-100` 
                    : 'border-transparent hover:border-gray-200'
                }`}
                onClick={() => handleServiceSelect(service.id)}
              >
                <div className={`bg-gradient-to-r ${getColorClasses(service.color).split(' ')[0]} ${getColorClasses(service.color).split(' ')[1]} p-6 text-white rounded-t-xl`}>
                  <div className="flex items-center space-x-3 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-opacity-90">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {service.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full mt-2 ${getColorClasses(service.color).split(' ')[2]}`}></div>
                        <span className="text-sm text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`mt-4 w-full ${getColorClasses(service.color).split(' ')[1].replace('to-', 'bg-')} text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200`}
                  >
                    Select This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      {selectedService && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Service</h2>
                <p className="text-lg text-gray-600">
                  Booking: {services.find(s => s.id === selectedService)?.title}
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
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      value={formData.familyCard}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests or Additional Information
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows={4}
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please provide any additional details or special requirements..."
                  ></textarea>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-xl text-gray-600">Contact our parish office for assistance with service bookings</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Saturday<br />9:00 AM - 5:00 PM</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Document Help</h3>
              <p className="text-gray-600">Assistance with required<br />certificates and documents</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Consultation</h3>
              <p className="text-gray-600">Meet with our priest for<br />detailed service planning</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;