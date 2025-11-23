
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NeedBloodPage from './pages/NeedBloodPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
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
      alert(`Searching for ${searchData.bloodGroup} blood donors in ${searchData.district}, ${searchData.pincode}`);
    } catch (error) {
      console.error('Error finding donors:', error);
      alert('Error searching for donors. Please try again.');
    }
  };

  const handleRegister = async (donorData) => {
    try {
   
      console.log('Registering donor:', donorData);
      alert('Registration successful! Thank you for becoming a life-saver.');
      
   
      setFormData({
        district: 'Saharanpur',
        bloodGroup: '',
        name: '',
        contactNumber: '',
        whatsappNumber: '',
        pincode: '',
        email: ''
      });
      
      setCurrentPage('home');
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
        return <NeedBloodPage formData={formData} setFormData={setFormData} handleFind={handleFind} />;
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