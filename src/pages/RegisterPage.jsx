import React from 'react';
import { UserPlus, Heart } from 'lucide-react';

const RegisterPage = ({ formData, setFormData, handleRegister }) => {
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleRegister(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        
        <div className="text-center mb-8">
          <UserPlus className="text-green-600 mx-auto mb-4" size={48} />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Register as Blood Donor</h1>
          <p className="text-gray-600">Join our community of life-savers</p>
        </div>

        <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Blood Group *
              </label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
              >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Number *
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder="10-digit mobile number"
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleInputChange}
                placeholder="Optional"
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                District *
              </label>
              <select
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
              >
                <option value="Saharanpur">Saharanpur</option>
                <option value="Muzaffarnagar">Muzaffarnagar</option>
                <option value="Meerut">Meerut</option>
                <option value="Delhi">Delhi</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Noida">Noida</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pincode *
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                placeholder="6-digit pincode"
                pattern="[0-9]{6}"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
              placeholder="your.email@example.com (Optional)"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
            />
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Eligibility Criteria:</h4>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• Age: 18-65 years</li>
              <li>• Weight: Minimum 50 kg</li>
              <li>• Good health condition</li>
              <li>• No recent illness or medication</li>
            </ul>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl font-bold py-4 rounded-xl transition transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          >
            <Heart size={24} />
            <span>Register as Donor</span>
          </button>
        </form>

      </div>
    </div>
  );
};

export default RegisterPage;