import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, DollarSign, Car, User, Clock, Star, MapPin } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
  // Mock data for vehicles
  const vehicles = [
    { id: 1, name: 'SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3' },
    { id: 2, name: 'Sedan', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3' },
    { id: 3, name: 'Hatchback', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3' },
    { id: 4, name: 'Luxury', image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3' },
    { id: 5, name: 'Van', image: 'https://images.unsplash.com/photo-1597685204565-110abf469a1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZhbnxlbnwwfHwwfHx8MA%3D%3D' },
  ];

  // Mock testimonials
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: "I've been using Keshri Travel services for my business trips. Always punctual and professional. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: "The best taxi service I've ever used! Clean vehicles and friendly drivers. My go-to choice for all my transportation needs.",
      rating: 5,
    },
    {
      id: 3,
      name: 'Mike Thompson',
      photo: 'https://randomuser.me/api/portraits/men/67.jpg',
      text: 'Excellent service and very reasonable pricing. The booking process is simple and the drivers are always on time.',
      rating: 4,
    },
  ];

  return (
    <>
  <Navbar/>
      {/* Hero Section */}
      <div className="container-fluid p-0">
        <div 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1559189063-8e59e4a018e5?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '600px'
          }} 
          className="d-flex align-items-center justify-content-center text-white text-center"
        >
          <div className="container">
            <h1 className="display-3 fw-bold mb-4">Your Trusted Ride Partner</h1>
            <h3 className="mb-5">Safe, Reliable, and Comfortable Travel</h3>
            <Link to="bookNow" className="btn btn-primary btn-lg">Book Your Ride Now</Link>
          </div>
        </div>
      </div>

      {/* Vehicle Types Section */}
      <div className="container mt-5">
        <h2 className="section-title">Our Fleet</h2>
        <div className="d-flex justify-content-center flex-wrap">
          {vehicles.map(vehicle => (
            <div key={vehicle.id} className="text-center mx-3 mb-4">
              <img src={vehicle.image} alt={vehicle.name} className="vehicle-thumbnail" />
              <p className="mt-2 fw-bold">{vehicle.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mt-5 py-5">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="custom-card p-4 h-100">
              <Shield className="why-us-icon" />
              <h4>Safety First</h4>
              <p>All our drivers undergo thorough background checks and our vehicles are regularly inspected to ensure your safety.</p>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="custom-card p-4 h-100">
              <DollarSign className="why-us-icon" />
              <h4>Affordable Pricing</h4>
              <p>Competitive rates with no hidden charges. We offer the best value for your money with transparent pricing.</p>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="custom-card p-4 h-100">
              <Car className="why-us-icon" />
              <h4>Clean Vehicles</h4>
              <p>We take pride in maintaining our fleet in pristine condition. Enjoy a comfortable ride in our clean vehicles.</p>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="custom-card p-4 h-100">
              <User className="why-us-icon" />
              <h4>Professional Drivers</h4>
              <p>Our drivers are experienced, well-trained, and courteous. They know the city inside out to get you to your destination efficiently.</p>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="custom-card p-4 h-100">
              <Clock className="why-us-icon" />
              <h4>24/7 Support</h4>
              <p>Our customer service team is available round the clock to assist you with any queries or issues you might have.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Status Map */}
      <div className="container mt-5">
        <h2 className="section-title">Our Service Areas</h2>
        <div className="row">
          <div className="col-12">
            <div className="custom-card p-0">
              <div className="ratio ratio-21x9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596798663!2d-74.25986548248684!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1617713875007!5m2!1sen!2sin" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  title="Service Area Map"
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <h4>We provide service across the entire metropolitan area</h4>
                <p className="mb-0">
                  <MapPin className="me-2" size={18} /> 
                  Main Coverage: New York City and surrounding areas up to 100 miles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mt-5 py-5">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="row">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="col-md-4 mb-4">
              <div className="testimonial-card h-100">
                <div className="d-flex mb-3 align-items-center">
                  <img src={testimonial.photo} alt={testimonial.name} />
                  <div>
                    <h5 className="mb-0">{testimonial.name}</h5>
                    <div>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#ffc107" color="#ffc107" />
                      ))}
                    </div>
                  </div>
                </div>
                <p>"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container-fluid p-0 mt-5">
        <div 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '80px 0'
          }} 
          className="d-flex align-items-center justify-content-center text-white text-center"
        >
          <div className="container">
            <h2 className="mb-4">Ready to Experience Our Premium Service?</h2>
            <p className="mb-5">Book your ride today and enjoy a comfortable journey with us</p>
            <Link to="/book-now" className="btn btn-primary btn-lg">Book Now</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;