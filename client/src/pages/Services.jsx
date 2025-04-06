import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Filter, DollarSign, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  // Mock data for trip routes
  const tripRoutesData = [
    {
      id: 1,
      from: 'New York',
      to: 'Boston',
      duration: '4h 30m',
      distance: '346 km',
      price: 450,
      vehicleType: 'sedan'
    },
    {
      id: 2,
      from: 'New York',
      to: 'Washington DC',
      duration: '4h 15m',
      distance: '360 km',
      price: 470,
      vehicleType: 'suv'
    },
    {
      id: 3,
      from: 'New York',
      to: 'Philadelphia',
      duration: '2h',
      distance: '151 km',
      price: 200,
      vehicleType: 'sedan'
    },
    {
      id: 4,
      from: 'New York',
      to: 'Atlantic City',
      duration: '2h 30m',
      distance: '206 km',
      price: 280,
      vehicleType: 'luxury'
    },
    {
      id: 5,
      from: 'New York',
      to: 'Niagara Falls',
      duration: '7h',
      distance: '628 km',
      price: 750,
      vehicleType: 'suv'
    },
    {
      id: 6,
      from: 'New York',
      to: 'The Hamptons',
      duration: '2h 30m',
      distance: '160 km',
      price: 300,
      vehicleType: 'luxury'
    },
    {
      id: 7,
      from: 'New York',
      to: 'Montreal',
      duration: '6h 45m',
      distance: '599 km',
      price: 800,
      vehicleType: 'van'
    },
    {
      id: 8,
      from: 'New York',
      to: 'Cape Cod',
      duration: '5h',
      distance: '402 km',
      price: 550,
      vehicleType: 'suv'
    },
    {
      id: 9,
      from: 'New York',
      to: 'Hartford',
      duration: '2h 30m',
      distance: '175 km',
      price: 250,
      vehicleType: 'hatchback'
    }
  ];
  
  // Filter states
  const [priceFilter, setPriceFilter] = useState('all');
  const [vehicleFilter, setVehicleFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Apply filters
  const filteredRoutes = tripRoutesData.filter(route => {
    // Price filter
    if (priceFilter === 'low' && route.price > 300) return false;
    if (priceFilter === 'medium' && (route.price <= 300 || route.price > 500)) return false;
    if (priceFilter === 'high' && route.price <= 500) return false;
    
    // Vehicle filter
    if (vehicleFilter !== 'all' && route.vehicleType !== vehicleFilter) return false;
    
    // Search filter
    if (
      searchTerm &&
      !route.from.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !route.to.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    
    return true;
  });
  
  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="page-header">
          <h1>Our Services</h1>
          <p>Explore our round trip services to popular destinations</p>
        </div>
        
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="custom-card p-4 h-100">
              <Car className="why-us-icon" />
              <h3>Airport Transfers</h3>
              <p>Reliable and punctual airport pickup and drop-off services. We track your flight to ensure we're there when you arrive.</p>
              <Link to="/book-now" className="btn btn-primary mt-3">Book Now</Link>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="custom-card p-4 h-100">
              <MapPin className="why-us-icon" />
              <h3>City Tours</h3>
              <p>Explore the city with our experienced drivers who know all the best spots and can give you insights into local culture.</p>
              <Link to="/book-now" className="btn btn-primary mt-3">Book Now</Link>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="custom-card p-4 h-100">
              <DollarSign className="why-us-icon" />
              <h3>Corporate Services</h3>
              <p>Special packages for businesses with priority service, account billing, and dedicated support for your corporate travel needs.</p>
              <Link to="/contact" className="btn btn-primary mt-3">Contact Us</Link>
            </div>
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-12">
            <div className="custom-card p-4">
              <h3 className="mb-4">Popular Round Trip Routes</h3>
              
              <div className="row mb-4">
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="input-group">
                    <span className="input-group-text">
                      <Filter size={18} />
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Search destinations..." 
                      value={searchTerm} 
                      onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                  </div>
                </div>
                
                <div className="col-md-4 mb-3 mb-md-0">
                  <select 
                    className="form-select" 
                    value={priceFilter} 
                    onChange={(e) => setPriceFilter(e.target.value)}
                  >
                    <option value="all">All Price Ranges</option>
                    <option value="low">Budget ($300 or less)</option>
                    <option value="medium">Standard ($301 - $500)</option>
                    <option value="high">Premium (Above $500)</option>
                  </select>
                </div>
                
                <div className="col-md-4">
                  <select 
                    className="form-select" 
                    value={vehicleFilter} 
                    onChange={(e) => setVehicleFilter(e.target.value)}
                  >
                    <option value="all">All Vehicle Types</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="luxury">Luxury</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="van">Van</option>
                  </select>
                </div>
              </div>
              
              <div className="row">
                {filteredRoutes.length > 0 ? (
                  filteredRoutes.map(route => (
                    <div key={route.id} className="col-md-6 col-lg-4 mb-4">
                      <div className="service-card">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="badge bg-primary">{route.vehicleType.toUpperCase()}</span>
                          <span className="fw-bold text-primary">${route.price}</span>
                        </div>
                        
                        <h4 className="mb-3">{route.from} ↔ {route.to}</h4>
                        
                        <div className="mb-2 d-flex justify-content-between">
                          <span>Distance:</span>
                          <span className="fw-bold">{route.distance}</span>
                        </div>
                        
                        <div className="mb-2 d-flex justify-content-between">
                          <span>Duration:</span>
                          <span className="fw-bold">{route.duration}</span>
                        </div>
                        
                        <div className="mb-3 d-flex justify-content-between">
                          <span>Price:</span>
                          <span className="fw-bold">${route.price}</span>
                        </div>
                        
                        <Link to="/book-now" className="btn btn-primary w-100">Book This Route</Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <h5>No routes match your filters</h5>
                    <p>Try adjusting your search criteria</p>
                    <button 
                      className="btn btn-outline-primary mt-2" 
                      onClick={() => {
                        setPriceFilter('all');
                        setVehicleFilter('all');
                        setSearchTerm('');
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="custom-card p-4">
              <h3 className="mb-4">Additional Services</h3>
              
              <div className="row">
                <div className="col-md-6">
                  <h5>Hourly Hire</h5>
                  <p>Need a car for a few hours? Our hourly service is perfect for shopping trips, running errands, or short business meetings.</p>
                  <ul className="mb-4">
                    <li>Minimum booking: 2 hours</li>
                    <li>Sedan: $45/hour</li>
                    <li>SUV: $65/hour</li>
                    <li>Luxury: $95/hour</li>
                  </ul>
                </div>
                
                <div className="col-md-6">
                  <h5>Special Occasions</h5>
                  <p>Make your special day memorable with our premium services for weddings, proms, anniversaries, and other important events.</p>
                  <ul className="mb-4">
                    <li>Wedding package starting at $350</li>
                    <li>Prom night specials from $200</li>
                    <li>Anniversary packages with complimentary champagne</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-3">
                <Link to="/contact" className="btn btn-primary">Contact Us for Custom Quotes</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Services;
