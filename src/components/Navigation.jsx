    import React, { useState } from 'react';
    import { Droplet, Menu, X } from 'lucide-react';

    const Navigation = ({ currentPage, setCurrentPage }) => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

      return (
        <nav className="bg-gradient-to-r from-red-600 to-red-500 text-white shadow-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              
              <div 
                className="flex items-center space-x-2 cursor-pointer" 
                onClick={() => setCurrentPage('home')}
              >
                <Droplet className="text-white" size={32} fill="white" />
                <span className="text-2xl font-bold">Blood Doner</span>
              </div>
              
              
              <div className="hidden md:flex items-center space-x-1">
                <button
                  onClick={() => setCurrentPage('home')}
                  className={`px-4 py-2 rounded-lg transition font-medium ${
                    currentPage === 'home' 
                      ? 'bg-white text-red-600' 
                      : 'text-white hover:bg-red-700'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => setCurrentPage('about')}
                  className={`px-4 py-2 rounded-lg transition font-medium ${
                    currentPage === 'about' 
                      ? 'bg-white text-red-600' 
                      : 'text-white hover:bg-red-700'
                  }`}
                >
                  About Us
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className={`px-4 py-2 rounded-lg transition font-medium ${
                    currentPage === 'contact' 
                      ? 'bg-white text-red-600' 
                      : 'text-white hover:bg-red-700'
                  }`}
                >
                  Contact
                </button>
              </div>
              
            
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
            
            {mobileMenuOpen && (
              <div className="md:hidden pb-4 space-y-2 border-t border-red-400 pt-4">
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition ${
                    currentPage === 'home' 
                      ? 'bg-white text-red-600 font-semibold' 
                      : 'text-white hover:bg-red-700'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition ${
                    currentPage === 'about' 
                      ? 'bg-white text-red-600 font-semibold' 
                      : 'text-white hover:bg-red-700'
                  }`}
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition ${
                    currentPage === 'contact' 
                      ? 'bg-white text-red-600 font-semibold' 
                      : 'text-white hover:bg-red-700'
                  }`}
                >
                  Contact
                </button>
              </div>
            )}
          </div>
        </nav>
      );
    };

    export default Navigation;