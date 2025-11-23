
import React from 'react';
import { Search, Clock } from 'lucide-react';

const NeedBloodPage = ({ formData, setFormData, handleFind, setCurrentPage, setSearchCriteria }) => {

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.district || !formData.bloodGroup) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (setSearchCriteria) {
      setSearchCriteria({
        district: formData.district,
        bloodGroup: formData.bloodGroup,
        pincode: ''
      });
    }
    
    if (setCurrentPage) {
      setCurrentPage('donor-results');
    }
    
    if (handleFind) {
      handleFind(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-8">
          <Search className="text-red-600 mx-auto mb-4" size={48} />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Find Blood Donors</h1>
          <p className="text-gray-600">Search for available donors in your area</p>
          <p className="text-sm text-gray-500 mt-2">
            Example: Dehradun, O+
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select District *
            </label>
            <select
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              required
            >
              <option value="Almora">Almora</option>
              <option value="Bageshwar">Bageshwar</option>
              <option value="Chamoli">Chamoli</option>
              <option value="Champawat">Champawat</option>
              <option value="Dehradun">Dehradun</option>
              <option value="Haridwar">Haridwar</option>
              <option value="Nainital">Nainital</option>
              <option value="Pauri Garhwal">Pauri Garhwal</option>
              <option value="Pithoragarh">Pithoragarh</option>
              <option value="Rudraprayag">Rudraprayag</option>
              <option value="Tehri Garhwal">Tehri Garhwal</option>
              <option value="Udham Singh Nagar">Udham Singh Nagar</option>
              <option value="Uttarkashi">Uttarkashi</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Blood Group *
            </label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+ (A Positive)</option>
              <option value="A-">A- (A Negative)</option>
              <option value="B+">B+ (B Positive)</option>
              <option value="B-">B- (B Negative)</option>
              <option value="AB+">AB+ (AB Positive)</option>
              <option value="AB-">AB- (AB Negative)</option>
              <option value="O+">O+ (O Positive)</option>
              <option value="O-">O- (O Negative)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl font-bold py-4 rounded-xl transition transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          >
            <Search size={24} />
            <span>Find Donors</span>
          </button>
        </form>
        </div>

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
            <Clock className="mr-2" size={20} />
            Important Information
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Search results are based on registered donors in your area</li>
            <li>• Contact donors respectfully and verify availability</li>
            <li>• In emergencies, also contact your nearest blood bank</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default NeedBloodPage;