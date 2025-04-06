import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Calendar, Clock, MapPin, Users, Car, Phone, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookNow = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    passengers: '',
    vehicleType: '',
    name: '',
    contactNumber: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const vehicleTypes = [
    { id: 'suv', label: 'SUV', capacity: '6-7 passengers', price: '$2.5/km' },
    { id: 'sedan', label: 'Sedan', capacity: '4 passengers', price: '$2.0/km' },
    { id: 'hatchback', label: 'Hatchback', capacity: '4 passengers', price: '$1.8/km' },
    { id: 'luxury', label: 'Luxury', capacity: '3-4 passengers', price: '$3.5/km' },
    { id: 'van', label: 'Van', capacity: '8-12 passengers', price: '$3.0/km' }
  ];
  
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
    
    
    if (!formData.pickupLocation) errors.pickupLocation = 'Pickup location is required';
    if (!formData.dropoffLocation) errors.dropoffLocation = 'Drop-off location is required';
    if (!formData.pickupDate) errors.pickupDate = 'Pickup date is required';
    if (!formData.pickupTime) errors.pickupTime = 'Pickup time is required';
    if (!formData.passengers) errors.passengers = 'Number of passengers is required';
    if (!formData.vehicleType) errors.vehicleType = 'Vehicle type is required';
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.contactNumber) {
      errors.contactNumber = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      errors.contactNumber = 'Contact number must be 10 digits';
    }
    
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
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };
  
  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="page-header">
          <h1>Book Your Ride</h1>
          <p>Fill out the form below to book a taxi for your journey</p>
        </div>
        
        {isSubmitted ? (
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="alert alert-success text-center p-5">
                <h2 className="mb-4">Booking Successful!</h2>
                <p className="mb-4">Thank you for choosing Keshri Travel & Tool. Your booking has been received.</p>
                <p className="mb-4">We will contact you shortly on {formData.contactNumber} to confirm your booking.</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      pickupLocation: '',
                      dropoffLocation: '',
                      pickupDate: '',
                      pickupTime: '',
                      passengers: '',
                      vehicleType: '',
                      name: '',
                      contactNumber: ''
                    });
                  }}
                >
                  Book Another Ride
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-8">
              <div className="booking-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="pickupLocation" className="form-label">
                        <MapPin size={18} className="me-2" />
                        Pickup Location
                      </label>
                      <input 
                        type="text" 
                        className={`form-control ${formErrors.pickupLocation ? 'is-invalid' : ''}`} 
                        id="pickupLocation" 
                        name="pickupLocation" 
                        value={formData.pickupLocation} 
                        onChange={handleInputChange} 
                        placeholder="Enter pickup address"
                      />
                      {formErrors.pickupLocation && (
                        <div className="invalid-feedback">{formErrors.pickupLocation}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="dropoffLocation" className="form-label">
                        <MapPin size={18} className="me-2" />
                        Drop-off Location
                      </label>
                      <input 
                        type="text" 
                        className={`form-control ${formErrors.dropoffLocation ? 'is-invalid' : ''}`} 
                        id="dropoffLocation" 
                        name="dropoffLocation" 
                        value={formData.dropoffLocation} 
                        onChange={handleInputChange} 
                        placeholder="Enter destination address"
                      />
                      {formErrors.dropoffLocation && (
                        <div className="invalid-feedback">{formErrors.dropoffLocation}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="pickupDate" className="form-label">
                        <Calendar size={18} className="me-2" />
                        Pickup Date
                      </label>
                      <input 
                        type="date" 
                        className={`form-control ${formErrors.pickupDate ? 'is-invalid' : ''}`} 
                        id="pickupDate" 
                        name="pickupDate" 
                        value={formData.pickupDate} 
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      {formErrors.pickupDate && (
                        <div className="invalid-feedback">{formErrors.pickupDate}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="pickupTime" className="form-label">
                        <Clock size={18} className="me-2" />
                        Pickup Time
                      </label>
                      <input 
                        type="time" 
                        className={`form-control ${formErrors.pickupTime ? 'is-invalid' : ''}`} 
                        id="pickupTime" 
                        name="pickupTime" 
                        value={formData.pickupTime} 
                        onChange={handleInputChange}
                      />
                      {formErrors.pickupTime && (
                        <div className="invalid-feedback">{formErrors.pickupTime}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="passengers" className="form-label">
                        <Users size={18} className="me-2" />
                        Number of Passengers
                      </label>
                      <select 
                        className={`form-select ${formErrors.passengers ? 'is-invalid' : ''}`} 
                        id="passengers" 
                        name="passengers" 
                        value={formData.passengers} 
                        onChange={handleInputChange}
                      >
                        <option value="">Select passengers</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                      {formErrors.passengers && (
                        <div className="invalid-feedback">{formErrors.passengers}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        <Car size={18} className="me-2" />
                        Vehicle Type
                      </label>
                      {formErrors.vehicleType && (
                        <div className="text-danger small mb-2">{formErrors.vehicleType}</div>
                      )}
                      <div className="row">
                        {vehicleTypes.map(vehicle => (
                          <div key={vehicle.id} className="col-md-6 mb-2">
                            <div className={`card p-2 ${formData.vehicleType === vehicle.id ? 'border-primary' : ''}`}>
                              <div className="form-check">
                                <input 
                                  className="form-check-input" 
                                  type="radio" 
                                  name="vehicleType" 
                                  id={vehicle.id} 
                                  value={vehicle.id}
                                  checked={formData.vehicleType === vehicle.id}
                                  onChange={handleInputChange}
                                />
                                <label className="form-check-label w-100" htmlFor={vehicle.id}>
                                  <span className="d-block fw-bold">{vehicle.label}</span>
                                  <small className="d-block text-muted">{vehicle.capacity}</small>
                                  <small className="text-primary">{vehicle.price}</small>
                                </label>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="row mt-4">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">
                        <User size={18} className="me-2" />
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        className={`form-control ${formErrors.name ? 'is-invalid' : ''}`} 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="Enter your full name"
                      />
                      {formErrors.name && (
                        <div className="invalid-feedback">{formErrors.name}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="contactNumber" className="form-label">
                        <Phone size={18} className="me-2" />
                        Contact Number
                      </label>
                      <input 
                        type="tel" 
                        className={`form-control ${formErrors.contactNumber ? 'is-invalid' : ''}`} 
                        id="contactNumber" 
                        name="contactNumber" 
                        value={formData.contactNumber} 
                        onChange={handleInputChange} 
                        placeholder="Enter your phone number"
                      />
                      {formErrors.contactNumber && (
                        <div className="invalid-feedback">{formErrors.contactNumber}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary btn-lg">Book Your Ride</button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="custom-card p-4">
                <h4 className="mb-4">Booking Information</h4>
                
                <div className="mb-3">
                  <h5>How It Works</h5>
                  <ol className="ps-3">
                    <li className="mb-2">Fill out the booking form</li>
                    <li className="mb-2">Receive booking confirmation</li>
                    <li className="mb-2">Driver will arrive at pickup location</li>
                    <li>Enjoy your ride!</li>
                  </ol>
                </div>
                
                <div className="mb-3">
                  <h5>Payment Options</h5>
                  <p>We accept cash, credit/debit cards, and mobile payments.</p>
                </div>
                
                <div>
                  <h5>Need Help?</h5>
                  <p>Call us at <strong>+1 234 567 8900</strong></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default BookNow;
