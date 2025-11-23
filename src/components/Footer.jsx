import React from 'react';
import { Droplet } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Droplet size={24} fill="white" />
          <span className="text-xl font-bold">BloodDoner</span>
        </div>
        <p className="text-gray-400 mb-4">Saving lives, one donation at a time</p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <button 
            onClick={() => setCurrentPage('home')} 
            className="hover:text-white transition"
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('about')} 
            className="hover:text-white transition"
          >
            About
          </button>
          <button 
            onClick={() => setCurrentPage('contact')} 
            className="hover:text-white transition"
          >
            Contact
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-6">
          © 2025 BloodDoner. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;