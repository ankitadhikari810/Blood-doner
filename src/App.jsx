
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NeedBloodPage from './pages/NeedBloodPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { DonorResultsPage } from './pages/doners';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchCriteria, setSearchCriteria] = useState({
    district: '',
    bloodGroup: '',
    pincode: ''
  });
  const [formData, setFormData] = useState({
    district: 'Saharanpur',
    bloodGroup: '',
    name: '',
    contactNumber: '',
    whatsappNumber: '',
    pincode: '',
    email: ''
  });


  const handleFind = async (searchData) => {
    try {
      console.log('Searching for donors with:', searchData);
      // Alert removed - navigation to results page handles the feedback
    } catch (error) {
      console.error('Error finding donors:', error);
    }
  };

  const handleRegister = async (donorData) => {
    try {
      // Get existing donors from localStorage
      const existingDonors = JSON.parse(localStorage.getItem('registeredDonors') || '[]');
      
      // Create a new donor object with all required fields
      const newDonor = {
        id: Date.now(), // Generate unique ID
        name: donorData.name,
        district: donorData.district,
        bloodGroup: donorData.bloodGroup,
        pincode: String(donorData.pincode).trim(),
        contactNumber: donorData.contactNumber,
        whatsappNumber: donorData.whatsappNumber || donorData.contactNumber,
        email: donorData.email || '',
        address: `${donorData.district}, Pincode: ${donorData.pincode}`,
        lastDonationDate: 'N/A',
        isAvailable: true
      };
      
      // Add new donor to the array
      existingDonors.push(newDonor);
      
      // Save to localStorage
      localStorage.setItem('registeredDonors', JSON.stringify(existingDonors));
      
      console.log('Registering donor:', newDonor);
      
      // Reset form
      setFormData({
        district: 'Saharanpur',
        bloodGroup: '',
        name: '',
        contactNumber: '',
        whatsappNumber: '',
        pincode: '',
        email: ''
      });
    } catch (error) {
      console.error('Error registering donor:', error);
      alert('Error during registration. Please try again.');
    }
  };


  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'need-blood':
        return (
          <NeedBloodPage 
            formData={formData} 
            setFormData={setFormData} 
            handleFind={handleFind}
            setCurrentPage={setCurrentPage}
            setSearchCriteria={setSearchCriteria}
          />
        );
      case 'donor-results':
        return (
          <DonorResultsPage 
            searchCriteria={searchCriteria}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'register':
        return <RegisterPage formData={formData} setFormData={setFormData} handleRegister={handleRegister} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;