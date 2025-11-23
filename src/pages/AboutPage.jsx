
import React from 'react';
import { Droplet, Heart, Users, Activity, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <Droplet className="text-red-600 mx-auto mb-4" size={56} />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About BloodDoner</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting donors with those in need, one drop at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-red-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To create a seamless network connecting blood donors with those in urgent need. 
              We believe every person deserves access to life-saving blood when they need it most.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="text-blue-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              A world where no one suffers due to blood shortage. We envision a community of 
              active donors ready to save lives at a moment's notice.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl shadow-2xl p-12 text-white text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Donate Blood?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">3</div>
              <p className="text-red-100">Lives saved per donation</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">56</div>
              <p className="text-red-100">Days between donations</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30</div>
              <p className="text-red-100">Minutes to save a life</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <Activity className="text-green-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Health Benefits</h3>
            <p className="text-gray-600 text-sm">
              Regular donation can reduce health risks and promote overall wellness
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <Award className="text-purple-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Be a Hero</h3>
            <p className="text-gray-600 text-sm">
              Join thousands of heroes making a real difference in their communities
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <Heart className="text-red-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Save Lives</h3>
            <p className="text-gray-600 text-sm">
              Your donation can save up to three lives in emergency situations
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;