
import React from 'react';
import { Search, UserPlus, Users, Heart, Activity, Award, MapPin } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Save Lives with <span className="text-red-600">Blood Donation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with donors instantly. Every donation counts. Be a hero today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <div 
            onClick={() => setCurrentPage('need-blood')}
            className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-2 border-transparent hover:border-red-500"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-100 p-6 rounded-full mb-6">
                <Search className="text-red-600" size={48} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">I Need Blood</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Find blood donors near you quickly and easily
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition text-sm">
                Search Donors
              </button>
            </div>
          </div>

          <div 
            onClick={() => setCurrentPage('near-you')}
            className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-6 rounded-full mb-6">
                <MapPin className="text-blue-600" size={48} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Quick Find</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Find nearby blood donors using your location
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition text-sm">
                Find Near You
              </button>
            </div>
          </div>

          <div 
            onClick={() => setCurrentPage('register')}
            className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-2 border-transparent hover:border-green-500"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-6 rounded-full mb-6">
                <UserPlus className="text-green-600" size={48} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Register as Donor</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Join our community of life-savers and make a difference
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition text-sm">
                Become a Donor
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <Users className="text-red-600 mx-auto mb-3" size={36} />
            <h3 className="text-3xl font-bold text-gray-900">1000+</h3>
            <p className="text-gray-600">Active Donors</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <Heart className="text-red-600 mx-auto mb-3" size={36} />
            <h3 className="text-3xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600">Lives Saved</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <Activity className="text-red-600 mx-auto mb-3" size={36} />
            <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600">Available</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <Award className="text-red-600 mx-auto mb-3" size={36} />
            <h3 className="text-3xl font-bold text-gray-900">100+</h3>
            <p className="text-gray-600">Districts</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Register</h4>
              <p className="text-sm text-gray-600">Sign up as a donor with your details</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Get Notified</h4>
              <p className="text-sm text-gray-600">Receive alerts when blood is needed</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Save Lives</h4>
              <p className="text-sm text-gray-600">Donate and make a difference</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;