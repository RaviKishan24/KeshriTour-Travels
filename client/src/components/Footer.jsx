
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-4">Keshri Tour & Travels</h5>
            <p>Your trusted partner for safe and comfortable travel. Book with us for a seamless experience and professional service.</p>
            <div className="d-flex mt-4">
              <a href="https://facebook.com" className="me-3" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="me-3" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/book-now">Book Now</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="mb-2">
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h5 className="mb-4">Contact Info</h5>
            <div className="d-flex align-items-center mb-3">
              <MapPin size={18} className="me-2" />
              <p className="mb-0">123 Street Name, City, Country</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Phone size={18} className="me-2" />
              <p className="mb-0">+1 234 567 8900</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Mail size={18} className="me-2" />
              <p className="mb-0">info@keshritravel.com</p>
            </div>
            <div className="d-flex align-items-center">
              <Clock size={18} className="me-2" />
              <p className="mb-0">Mon-Sat: 8AM - 8PM</p>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Keshri Tour & Travels. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
