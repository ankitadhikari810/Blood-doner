import React from 'react';
import { Phone, Mail, MapPin, User, ArrowLeft, Heart } from 'lucide-react';

// Hardcoded donor data matching the structure from NeedBloodPage.jsx
const donorsData = [
  // Saharanpur Donors
  {
    id: 1,
    name: 'Rajesh Kumar',
    district: 'Saharanpur',
    bloodGroup: 'O+',
    pincode: '247001',
    contactNumber: '+91 9876543210',
    whatsappNumber: '+91 9876543210',
    email: 'rajesh.kumar@example.com',
    address: '123 Main Street, Saharanpur',
    lastDonationDate: '2024-01-15',
    isAvailable: true
  },
  {
    id: 2,
    name: 'Priya Sharma',
    district: 'Saharanpur',
    bloodGroup: 'A+',
    pincode: '247001',
    contactNumber: '+91 9876543211',
    whatsappNumber: '+91 9876543211',
    email: 'priya.sharma@example.com',
    address: '456 Park Avenue, Saharanpur',
    lastDonationDate: '2024-02-10',
    isAvailable: true
  },
  {
    id: 3,
    name: 'Amit Singh',
    district: 'Saharanpur',
    bloodGroup: 'B+',
    pincode: '247002',
    contactNumber: '+91 9876543212',
    whatsappNumber: '+91 9876543212',
    email: 'amit.singh@example.com',
    address: '789 Gandhi Road, Saharanpur',
    lastDonationDate: '2024-01-20',
    isAvailable: true
  },
  {
    id: 4,
    name: 'Sneha Patel',
    district: 'Saharanpur',
    bloodGroup: 'AB+',
    pincode: '247001',
    contactNumber: '+91 9876543213',
    whatsappNumber: '+91 9876543213',
    email: 'sneha.patel@example.com',
    address: '321 Nehru Nagar, Saharanpur',
    lastDonationDate: '2024-02-05',
    isAvailable: true
  },
  {
    id: 5,
    name: 'Vikram Verma',
    district: 'Saharanpur',
    bloodGroup: 'O-',
    pincode: '247002',
    contactNumber: '+91 9876543214',
    whatsappNumber: '+91 9876543214',
    email: 'vikram.verma@example.com',
    address: '654 Market Street, Saharanpur',
    lastDonationDate: '2024-01-25',
    isAvailable: true
  },

  // Muzaffarnagar Donors
  {
    id: 6,
    name: 'Anjali Gupta',
    district: 'Muzaffarnagar',
    bloodGroup: 'A+',
    pincode: '251001',
    contactNumber: '+91 9876543215',
    whatsappNumber: '+91 9876543215',
    email: 'anjali.gupta@example.com',
    address: '123 Civil Lines, Muzaffarnagar',
    lastDonationDate: '2024-02-12',
    isAvailable: true
  },
  {
    id: 7,
    name: 'Rahul Yadav',
    district: 'Muzaffarnagar',
    bloodGroup: 'B+',
    pincode: '251001',
    contactNumber: '+91 9876543216',
    whatsappNumber: '+91 9876543216',
    email: 'rahul.yadav@example.com',
    address: '456 Station Road, Muzaffarnagar',
    lastDonationDate: '2024-01-18',
    isAvailable: true
  },
  {
    id: 8,
    name: 'Kavita Mishra',
    district: 'Muzaffarnagar',
    bloodGroup: 'O+',
    pincode: '251002',
    contactNumber: '+91 9876543217',
    whatsappNumber: '+91 9876543217',
    email: 'kavita.mishra@example.com',
    address: '789 MG Road, Muzaffarnagar',
    lastDonationDate: '2024-02-08',
    isAvailable: true
  },
  {
    id: 9,
    name: 'Mohit Tiwari',
    district: 'Muzaffarnagar',
    bloodGroup: 'A-',
    pincode: '251001',
    contactNumber: '+91 9876543218',
    whatsappNumber: '+91 9876543218',
    email: 'mohit.tiwari@example.com',
    address: '321 Sector 5, Muzaffarnagar',
    lastDonationDate: '2024-01-30',
    isAvailable: true
  },
  {
    id: 10,
    name: 'Deepika Joshi',
    district: 'Muzaffarnagar',
    bloodGroup: 'AB+',
    pincode: '251002',
    contactNumber: '+91 9876543219',
    whatsappNumber: '+91 9876543219',
    email: 'deepika.joshi@example.com',
    address: '654 Green Park, Muzaffarnagar',
    lastDonationDate: '2024-02-15',
    isAvailable: true
  },

  // Meerut Donors
  {
    id: 11,
    name: 'Arjun Malhotra',
    district: 'Meerut',
    bloodGroup: 'O+',
    pincode: '250001',
    contactNumber: '+91 9876543220',
    whatsappNumber: '+91 9876543220',
    email: 'arjun.malhotra@example.com',
    address: '123 Begum Bridge Road, Meerut',
    lastDonationDate: '2024-02-01',
    isAvailable: true
  },
  {
    id: 12,
    name: 'Neha Kapoor',
    district: 'Meerut',
    bloodGroup: 'B+',
    pincode: '250001',
    contactNumber: '+91 9876543221',
    whatsappNumber: '+91 9876543221',
    email: 'neha.kapoor@example.com',
    address: '456 Hapur Road, Meerut',
    lastDonationDate: '2024-01-22',
    isAvailable: true
  },
  {
    id: 13,
    name: 'Suresh Reddy',
    district: 'Meerut',
    bloodGroup: 'A+',
    pincode: '250002',
    contactNumber: '+91 9876543222',
    whatsappNumber: '+91 9876543222',
    email: 'suresh.reddy@example.com',
    address: '789 Delhi Road, Meerut',
    lastDonationDate: '2024-02-10',
    isAvailable: true
  },
  {
    id: 14,
    name: 'Meera Nair',
    district: 'Meerut',
    bloodGroup: 'O-',
    pincode: '250001',
    contactNumber: '+91 9876543223',
    whatsappNumber: '+91 9876543223',
    email: 'meera.nair@example.com',
    address: '321 Shastri Nagar, Meerut',
    lastDonationDate: '2024-01-28',
    isAvailable: true
  },
  {
    id: 15,
    name: 'Karan Mehta',
    district: 'Meerut',
    bloodGroup: 'AB-',
    pincode: '250002',
    contactNumber: '+91 9876543224',
    whatsappNumber: '+91 9876543224',
    email: 'karan.mehta@example.com',
    address: '654 Avas Vikas, Meerut',
    lastDonationDate: '2024-02-05',
    isAvailable: true
  },

  // Delhi Donors
  {
    id: 16,
    name: 'Rohan Agarwal',
    district: 'Delhi',
    bloodGroup: 'O+',
    pincode: '110001',
    contactNumber: '+91 9876543225',
    whatsappNumber: '+91 9876543225',
    email: 'rohan.agarwal@example.com',
    address: '123 Connaught Place, New Delhi',
    lastDonationDate: '2024-02-14',
    isAvailable: true
  },
  {
    id: 17,
    name: 'Shreya Iyer',
    district: 'Delhi',
    bloodGroup: 'A+',
    pincode: '110001',
    contactNumber: '+91 9876543226',
    whatsappNumber: '+91 9876543226',
    email: 'shreya.iyer@example.com',
    address: '456 Karol Bagh, New Delhi',
    lastDonationDate: '2024-01-19',
    isAvailable: true
  },
  {
    id: 18,
    name: 'Aditya Shah',
    district: 'Delhi',
    bloodGroup: 'B+',
    pincode: '110002',
    contactNumber: '+91 9876543227',
    whatsappNumber: '+91 9876543227',
    email: 'aditya.shah@example.com',
    address: '789 Rohini, New Delhi',
    lastDonationDate: '2024-02-11',
    isAvailable: true
  },
  {
    id: 19,
    name: 'Divya Menon',
    district: 'Delhi',
    bloodGroup: 'AB+',
    pincode: '110001',
    contactNumber: '+91 9876543228',
    whatsappNumber: '+91 9876543228',
    email: 'divya.menon@example.com',
    address: '321 Dwarka, New Delhi',
    lastDonationDate: '2024-01-26',
    isAvailable: true
  },
  {
    id: 20,
    name: 'Nikhil Desai',
    district: 'Delhi',
    bloodGroup: 'O-',
    pincode: '110002',
    contactNumber: '+91 9876543229',
    whatsappNumber: '+91 9876543229',
    email: 'nikhil.desai@example.com',
    address: '654 Saket, New Delhi',
    lastDonationDate: '2024-02-07',
    isAvailable: true
  },
  {
    id: 21,
    name: 'Ananya Rao',
    district: 'Delhi',
    bloodGroup: 'B-',
    pincode: '110001',
    contactNumber: '+91 9876543230',
    whatsappNumber: '+91 9876543230',
    email: 'ananya.rao@example.com',
    address: '123 Vasant Kunj, New Delhi',
    lastDonationDate: '2024-01-31',
    isAvailable: true
  },

  // Ghaziabad Donors
  {
    id: 22,
    name: 'Vishal Chaturvedi',
    district: 'Ghaziabad',
    bloodGroup: 'O+',
    pincode: '201001',
    contactNumber: '+91 9876543231',
    whatsappNumber: '+91 9876543231',
    email: 'vishal.chaturvedi@example.com',
    address: '123 Raj Nagar, Ghaziabad',
    lastDonationDate: '2024-02-13',
    isAvailable: true
  },
  {
    id: 23,
    name: 'Pooja Saxena',
    district: 'Ghaziabad',
    bloodGroup: 'A+',
    pincode: '201001',
    contactNumber: '+91 9876543232',
    whatsappNumber: '+91 9876543232',
    email: 'pooja.saxena@example.com',
    address: '456 Kavi Nagar, Ghaziabad',
    lastDonationDate: '2024-01-24',
    isAvailable: true
  },
  {
    id: 24,
    name: 'Abhishek Pandey',
    district: 'Ghaziabad',
    bloodGroup: 'B+',
    pincode: '201002',
    contactNumber: '+91 9876543233',
    whatsappNumber: '+91 9876543233',
    email: 'abhishek.pandey@example.com',
    address: '789 Vaishali, Ghaziabad',
    lastDonationDate: '2024-02-09',
    isAvailable: true
  },
  {
    id: 25,
    name: 'Swati Trivedi',
    district: 'Ghaziabad',
    bloodGroup: 'AB+',
    pincode: '201001',
    contactNumber: '+91 9876543234',
    whatsappNumber: '+91 9876543234',
    email: 'swati.trivedi@example.com',
    address: '321 Indirapuram, Ghaziabad',
    lastDonationDate: '2024-01-27',
    isAvailable: true
  },
  {
    id: 26,
    name: 'Manish Dubey',
    district: 'Ghaziabad',
    bloodGroup: 'A-',
    pincode: '201002',
    contactNumber: '+91 9876543235',
    whatsappNumber: '+91 9876543235',
    email: 'manish.dubey@example.com',
    address: '654 Crossings Republik, Ghaziabad',
    lastDonationDate: '2024-02-04',
    isAvailable: true
  },

  // Noida Donors
  {
    id: 27,
    name: 'Ritika Bansal',
    district: 'Noida',
    bloodGroup: 'O+',
    pincode: '201301',
    contactNumber: '+91 9876543236',
    whatsappNumber: '+91 9876543236',
    email: 'ritika.bansal@example.com',
    address: '123 Sector 18, Noida',
    lastDonationDate: '2024-02-16',
    isAvailable: true
  },
  {
    id: 28,
    name: 'Harsh Vardhan',
    district: 'Noida',
    bloodGroup: 'A+',
    pincode: '201301',
    contactNumber: '+91 9876543237',
    whatsappNumber: '+91 9876543237',
    email: 'harsh.vardhan@example.com',
    address: '456 Sector 62, Noida',
    lastDonationDate: '2024-01-21',
    isAvailable: true
  },
  {
    id: 29,
    name: 'Isha Khurana',
    district: 'Noida',
    bloodGroup: 'B+',
    pincode: '201302',
    contactNumber: '+91 9876543238',
    whatsappNumber: '+91 9876543238',
    email: 'isha.khurana@example.com',
    address: '789 Sector 15, Noida',
    lastDonationDate: '2024-02-06',
    isAvailable: true
  },
  {
    id: 30,
    name: 'Yash Goyal',
    district: 'Noida',
    bloodGroup: 'AB+',
    pincode: '201301',
    contactNumber: '+91 9876543239',
    whatsappNumber: '+91 9876543239',
    email: 'yash.goyal@example.com',
    address: '321 Sector 137, Noida',
    lastDonationDate: '2024-01-29',
    isAvailable: true
  },
  {
    id: 31,
    name: 'Tanvi Arora',
    district: 'Noida',
    bloodGroup: 'O-',
    pincode: '201302',
    contactNumber: '+91 9876543240',
    whatsappNumber: '+91 9876543240',
    email: 'tanvi.arora@example.com',
    address: '654 Sector 50, Noida',
    lastDonationDate: '2024-02-03',
    isAvailable: true
  },
  {
    id: 32,
    name: 'Ravi Chopra',
    district: 'Noida',
    bloodGroup: 'B-',
    pincode: '201301',
    contactNumber: '+91 9876543241',
    whatsappNumber: '+91 9876543241',
    email: 'ravi.chopra@example.com',
    address: '123 Sector 104, Noida',
    lastDonationDate: '2024-01-23',
    isAvailable: true
  }
];

// Function to get all donors including localStorage data
export const getAllDonorsData = () => {
  // Get hardcoded donors
  const hardcodedDonors = [...donorsData];
  
  // Get registered donors from localStorage
  try {
    const registeredDonors = JSON.parse(localStorage.getItem('registeredDonors') || '[]');
    return [...hardcodedDonors, ...registeredDonors];
  } catch (error) {
    console.error('Error loading registered donors from localStorage:', error);
    return hardcodedDonors;
  }
};

// Function to filter donors based on search criteria
export const filterDonors = (district, bloodGroup, pincode) => {
  // Convert pincode to string for consistent comparison
  const searchPincode = String(pincode).trim();
  
  // Get all donors (hardcoded + localStorage)
  const allDonors = getAllDonorsData();
  
  return allDonors.filter(donor => {
    const districtMatch = donor.district.toLowerCase() === district.toLowerCase();
    const bloodGroupMatch = donor.bloodGroup === bloodGroup;
    const pincodeMatch = String(donor.pincode).trim() === searchPincode;
    const isAvailable = donor.isAvailable;
    
    return districtMatch && bloodGroupMatch && pincodeMatch && isAvailable;
  });
};

// Function to get all donors (for admin or listing purposes)
export const getAllDonors = () => {
  return getAllDonorsData();
};

// Function to get donors by district
export const getDonorsByDistrict = (district) => {
  return donorsData.filter(donor => 
    donor.district.toLowerCase() === district.toLowerCase()
  );
};

// Function to get donors by blood group
export const getDonorsByBloodGroup = (bloodGroup) => {
  return donorsData.filter(donor => donor.bloodGroup === bloodGroup);
};

// Export the donors data
export default donorsData;

// Donor Results Page Component
export const DonorResultsPage = ({ searchCriteria, setCurrentPage }) => {
  const { district, bloodGroup, pincode } = searchCriteria || {};
  const results = filterDonors(district || '', bloodGroup || '', pincode || '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => setCurrentPage('need-blood')}
            className="flex items-center text-gray-600 hover:text-red-600 mb-4 transition"
          >
            <ArrowLeft className="mr-2" size={20} />
            <span>Back to Search</span>
          </button>
          
          <div className="text-center">
            <Heart className="text-red-600 mx-auto mb-4" size={48} />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Donor Results</h1>
            {district && bloodGroup && pincode && (
              <p className="text-gray-600">
                Searching for <span className="font-semibold text-red-600">{bloodGroup}</span> blood in{' '}
                <span className="font-semibold">{district}</span> ({pincode})
              </p>
            )}
          </div>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-semibold">
                Found {results.length} Donor{results.length > 1 ? 's' : ''} Available
              </p>
            </div>
            
            <div className="grid gap-6">
              {results.map((donor) => (
                <div
                  key={donor.id}
                  className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-red-500 hover:shadow-2xl transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-3 rounded-full">
                        <User className="text-red-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{donor.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {donor.bloodGroup}
                          </span>
                          <span className="text-gray-600 text-sm">{donor.district}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Phone className="text-red-600" size={20} />
                      <div>
                        <p className="text-xs text-gray-500">Phone</p>
                        <a href={`tel:${donor.contactNumber}`} className="font-semibold hover:text-red-600 transition">
                          {donor.contactNumber}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-gray-700">
                      <Phone className="text-green-600" size={20} />
                      <div>
                        <p className="text-xs text-gray-500">WhatsApp</p>
                        <a 
                          href={`https://wa.me/${donor.whatsappNumber.replace(/[^0-9]/g, '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-green-600 transition"
                        >
                          {donor.whatsappNumber}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-gray-700">
                      <Mail className="text-blue-600" size={20} />
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <a 
                          href={`mailto:${donor.email}`} 
                          className="font-semibold text-sm hover:text-blue-600 transition"
                        >
                          {donor.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-gray-700">
                      <MapPin className="text-purple-600" size={20} />
                      <div>
                        <p className="text-xs text-gray-500">Address</p>
                        <p className="font-semibold text-sm">{donor.address}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      Last Donation: <span className="font-semibold text-gray-700">{donor.lastDonationDate}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <Heart className="text-yellow-600" size={24} />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-1">No Donors Found</h3>
                <p className="text-sm text-yellow-800 mb-2">
                  We couldn't find any available donors matching your criteria. Please try:
                </p>
                <ul className="text-sm text-yellow-800 ml-4 list-disc">
                  <li>Checking different pincode in the same district</li>
                  <li>Contacting your nearest blood bank</li>
                  <li>Checking back later as new donors register daily</li>
                </ul>
                <button
                  onClick={() => setCurrentPage('need-blood')}
                  className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transition"
                >
                  Try Another Search
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

