

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    console.log('Contact form submitted:', contactForm);
    setShowPopup(true);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12">
    
      {showPopup && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-5 duration-300">
          <div className="bg-white rounded-xl shadow-2xl p-6 border-l-4 border-green-500 flex items-center space-x-4 min-w-[320px] max-w-md">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg">Message Sent Successfully!</h3>
              <p className="text-sm text-gray-600">We will get back to you soon.</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <Mail className="text-red-600 mx-auto mb-4" size={56} />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We're here to help 24/7</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Phone className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 89XXXXXXXX</p>
                  </div>
                </div>
                  
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@blooddoner.com</p>
                    <p className="text-gray-600">support@blooddoner.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      W-1 Pampapuri,<br />
                      Ramnagar, Uttrakhand<br />
                      India - 244715
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Emergency Helpline</h3>
              <p className="text-red-100 mb-4">
                For urgent blood requirements, call our 24/7 helpline:
              </p>
              <p className="text-4xl font-bold mb-2">1800-XXX-XXXX</p>
              <div className="flex items-center text-red-100 text-sm">
                <Clock className="mr-2" size={16} />
                Available 24/7, 365 days
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  placeholder="How can we help you?"
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-4 rounded-xl transition transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3 text-lg">Frequently Asked Questions</h3>
          <div className="space-y-3 text-sm text-blue-800">
            <details className="cursor-pointer">
              <summary className="font-semibold py-2">How often can I donate blood?</summary>
              <p className="mt-2 ml-4 text-blue-700">You can donate whole blood every 56 days (8 weeks).</p>
            </details>
            <details className="cursor-pointer">
              <summary className="font-semibold py-2">Is blood donation safe?</summary>
              <p className="mt-2 ml-4 text-blue-700">
                Yes, blood donation is completely safe. Sterile equipment is used for each donor.
              </p>
            </details>
            <details className="cursor-pointer">
              <summary className="font-semibold py-2">How long does donation take?</summary>
              <p className="mt-2 ml-4 text-blue-700">
                The actual donation takes about 10-15 minutes, but the entire process takes around 30-45 minutes.
              </p>
            </details>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;