import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Phone, Mail, MapPin, Clock, Award, Car, Clipboard } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  // Mock data for drivers
  const drivers = [
    {
      id: 1,
      name: 'Robert Johnson',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      experience: '8 years',
      license: 'DL-123456',
      phone: '+1 234 567 8901',
      area: 'North & Central City'
    },
    {
      id: 2,
      name: 'Emily Williams',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      experience: '5 years',
      license: 'DL-789012',
      phone: '+1 234 567 8902',
      area: 'South & East City'
    },
    {
      id: 3,
      name: 'Michael Brown',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      experience: '10 years',
      license: 'DL-345678',
      phone: '+1 234 567 8903',
      area: 'West & Downtown'
    },
  ];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is updated
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Form is valid, show success message
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };
  
  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with our team and drivers</p>
        </div>
        
        <div className="row mb-5">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="custom-card p-4 h-100">
              <h3 className="mb-4">Contact Information</h3>
              
              <div className="d-flex align-items-center mb-3">
                <MapPin size={20} className="me-3 text-primary" />
                <div>
                  <p className="mb-0 fw-bold">Address</p>
                  <p className="mb-0">123 Street Name, City, Country</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <Phone size={20} className="me-3 text-primary" />
                <div>
                  <p className="mb-0 fw-bold">Phone</p>
                  <p className="mb-0">+1 234 567 8900</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <Mail size={20} className="me-3 text-primary" />
                <div>
                  <p className="mb-0 fw-bold">Email</p>
                  <p className="mb-0">info@keshritravel.com</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <Clock size={20} className="me-3 text-primary" />
                <div>
                  <p className="mb-0 fw-bold">Working Hours</p>
                  <p className="mb-0">Monday - Saturday: 8AM - 8PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-8">
            <div className="custom-card p-4">
              <h3 className="mb-4">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="alert alert-success p-4">
                  <h4 className="mb-3">Thank You!</h4>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                  <button 
                    className="btn btn-primary mt-3"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Enter your name"
                    />
                    {formErrors.name && (
                      <div className="invalid-feedback">{formErrors.name}</div>
                    )}
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="Enter your email"
                    />
                    {formErrors.email && (
                      <div className="invalid-feedback">{formErrors.email}</div>
                    )}
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Enter your message"
                    ></textarea>
                    {formErrors.message && (
                      <div className="invalid-feedback">{formErrors.message}</div>
                    )}
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        <h2 className="section-title">Meet Our Professional Drivers</h2>
        
        <div className="row">
          {drivers.map(driver => (
            <div key={driver.id} className="col-md-4 mb-4">
              <div className="driver-card">
                <img src={driver.image} alt={driver.name} />
                <h4>{driver.name}</h4>
                
                <div className="mt-3 d-flex align-items-center justify-content-center">
                  <Award size={18} className="me-2 text-primary" />
                  <p className="mb-0">{driver.experience} Experience</p>
                </div>
                
                <div className="mt-2 d-flex align-items-center justify-content-center">
                  <Clipboard size={18} className="me-2 text-primary" />
                  <p className="mb-0">License: {driver.license}</p>
                </div>
                
                <div className="mt-2 d-flex align-items-center justify-content-center">
                  <Phone size={18} className="me-2 text-primary" />
                  <p className="mb-0">{driver.phone}</p>
                </div>
                
                <div className="mt-2 d-flex align-items-center justify-content-center">
                  <Car size={18} className="me-2 text-primary" />
                  <p className="mb-0">{driver.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-12">
            <div className="custom-card p-0">
              <div className="ratio ratio-21x9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596798663!2d-74.25986548248684!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1617713875007!5m2!1sen!2sin" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  title="Office Location Map"
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <h4>Visit Our Office</h4>
                <p className="mb-0">
                  <MapPin className="me-2" size={18} /> 
                  123 Street Name, City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
