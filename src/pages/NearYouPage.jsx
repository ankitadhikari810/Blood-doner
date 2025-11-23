import React, { useState, useEffect } from 'react';
import { MapPin, Search, Loader, AlertCircle, Phone, Mail, User, ArrowLeft, Heart } from 'lucide-react';
import { getAllDonorsData } from './doners';

const NearYouPage = ({ setCurrentPage, setSearchCriteria }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nearbyDonors, setNearbyDonors] = useState([]);
  const [userDistrict, setUserDistrict] = useState(null);
  const [bloodGroup, setBloodGroup] = useState('');

  const getDistrictFromCoordinates = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'BloodDonorApp'
          }
        }
      );
      const data = await response.json();
      
      const address = data.address || {};
      const district = address.state_district || address.district || address.county || address.state;
      
      const uttarakhandDistricts = [
        'Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun',
        'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh',
        'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'
      ];
      
      const matchedDistrict = uttarakhandDistricts.find(d => 
        district && district.toLowerCase().includes(d.toLowerCase())
      );
      
      return matchedDistrict || 'Dehradun';
    } catch (err) {
      console.error('Reverse geocoding error:', err);
      return 'Dehradun';
    }
  };

  const getLocation = async () => {
    setLoading(true);
    setError(null);
    
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser. Please use the manual search instead.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        
        const district = await getDistrictFromCoordinates(latitude, longitude);
        setUserDistrict(district);
        
        const allDonors = getAllDonorsData();
        const districtDonors = allDonors.filter(donor => 
          donor.district.toLowerCase() === district.toLowerCase() && donor.isAvailable
        );
        setNearbyDonors(districtDonors);
        setLoading(false);
      },
      (err) => {
        setError('Location access denied. Please allow location access or use manual search.');
        setLoading(false);
        console.error('Geolocation error:', err);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  const handleBloodGroupSearch = (selectedBloodGroup) => {
    if (!userDistrict) {
      alert('Please allow location access first');
      return;
    }

    setBloodGroup(selectedBloodGroup);
    
    const allDonors = getAllDonorsData();
    const filtered = allDonors.filter(donor => 
      donor.district.toLowerCase() === userDistrict.toLowerCase() &&
      donor.bloodGroup === selectedBloodGroup &&
      donor.isAvailable
    );
    
    setNearbyDonors(filtered);
    
    if (setSearchCriteria) {
      setSearchCriteria({
        district: userDistrict,
        bloodGroup: selectedBloodGroup,
        pincode: ''
      });
    }
    
    if (setCurrentPage) {
      setCurrentPage('donor-results');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center text-gray-600 hover:text-red-600 mb-6 transition"
        >
          <ArrowLeft className="mr-2" size={20} />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <MapPin className="text-blue-600 mx-auto mb-4" size={48} />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Find Blood Near You</h1>
          <p className="text-gray-600">Get location-based donor search</p>
        </div>

        {/* Location Permission Section */}
        {!location && !loading && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
              <div className="bg-blue-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <MapPin className="text-blue-600" size={48} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Allow Location Access</h2>
              <p className="text-gray-600 mb-6">
                We need your location to find nearby blood donors. Your location data is not stored and is only used to find donors in your area.
              </p>
              <button
                onClick={getLocation}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition transform hover:scale-105 shadow-lg"
              >
                Allow Location & Find Donors
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <Loader className="text-blue-600 mx-auto mb-4 animate-spin" size={48} />
              <p className="text-gray-600">Getting your location...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <AlertCircle className="text-red-600" size={24} />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Location Access Required</h3>
                  <p className="text-sm text-red-800 mb-3">{error}</p>
                  <button
                    onClick={() => setCurrentPage('need-blood')}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition text-sm"
                  >
                    Use Manual Search Instead
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Section */}
        {location && userDistrict && !loading && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-semibold">
                📍 Location: {userDistrict} | Found {nearbyDonors.length} available donor{nearbyDonors.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Blood Group Selection */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Select Blood Group</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bg) => (
                  <button
                    key={bg}
                    onClick={() => handleBloodGroupSearch(bg)}
                    className={`px-4 py-3 rounded-lg font-semibold transition ${
                      bloodGroup === bg
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {bg}
                  </button>
                ))}
              </div>
            </div>

            {/* Donors List */}
            {nearbyDonors.length > 0 && bloodGroup ? (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {bloodGroup} Donors in {userDistrict}
                </h3>
                {nearbyDonors.slice(0, 10).map((donor) => (
                  <div
                    key={donor.id}
                    className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-red-100 p-3 rounded-full">
                          <User className="text-red-600" size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{donor.name}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {donor.bloodGroup}
                            </span>
                            <span className="text-gray-600 text-sm">{donor.district}</span>
                            <span className="text-gray-500 text-sm">• Pincode: {donor.pincode}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center space-x-3 text-gray-700">
                        <Phone className="text-red-600" size={20} />
                        <a href={`tel:${donor.contactNumber}`} className="font-semibold hover:text-red-600 transition">
                          {donor.contactNumber}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700">
                        <Mail className="text-blue-600" size={20} />
                        <a href={`mailto:${donor.email}`} className="font-semibold text-sm hover:text-blue-600 transition">
                          {donor.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                {nearbyDonors.length > 10 && (
                  <button
                    onClick={() => handleBloodGroupSearch(bloodGroup)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                  >
                    View All {nearbyDonors.length} Donors
                  </button>
                )}
              </div>
            ) : bloodGroup ? (
              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                <p className="text-yellow-800">
                  No {bloodGroup} donors found in {userDistrict}. Try selecting a different blood group or use manual search.
                </p>
              </div>
            ) : (
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <p className="text-blue-800">
                  Please select a blood group to see nearby donors.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NearYouPage;

