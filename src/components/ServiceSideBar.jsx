import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import img from '../assets/services/sidebarImg.webp'

function ServiceSideBar() {
  const location = useLocation();  // get current path

  const links = [
    { path: '/packers-movers-banglore', label: 'Packers & Movers' },
    { path: '/office-shifting-banglore', label: 'Office Shifting' },
    { path: '/home-shifting-banglore', label: 'Home Shifting' },
    { path: '/storage-facilities-banglore', label: 'Storage Facilities' },
    { path: '/bike-car-shifting-banglore', label: 'Bike & Car Shifting' },
    { path: '/international-shifting-banglore', label: 'International Shifting' },
  ];

  return (
    <div>
      <div className="mb-8 p-6 bg-white shadow-lg">
        <h3 className="text-3xl font-bold mb-4">Services</h3>
        <ul className=" space-y-2">
          {links.map(({ path, label }) => (
            <li
              key={path}
              className={`border-2 p-3 shadow-lg ${
                location.pathname === path ? 'bg-red-600 text-white' : 'bg-white text-gray-800 hover:bg-red-600 hover:text-white'
              }`}
            >
              <Link
                to={path}
                className="flex justify-between items-center font-semibold w-full text-left"
              >
                {label}
                <span className="text-xl font-bold ml-2">&#8250;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Need Help Section */}
      <div className="relative flex flex-col items-center justify-center gap-8 p-6 mb-8 bg-cover bg-center text-center h-96 "
        style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h3 className="relative text-white text-2xl font-bold ">
          Need Any Type <br /> of Services <br /> from us
        </h3>
        <Link to="/contact" className="relative bg-red-700 text-white font-semibold p-4 animate-bounce">
          FIND SOLUTION
        </Link>
      </div>

      {/* Contact Section */}
      <div className="flex justify-center items-center bg-slate-100 p-6">
        <FaPhoneAlt className="text-primary text-2xl mr-4" />
        <div>
          <span className="text-gray-700">You can call anytime</span>
          <p className="text-md font-semibold text-gray-800">
            Free
            <a href="tel:+91 94623-27667" className="ml-2 text-primary">
            +91 94623-27667
            </a>
          </p>
        </div>
      </div>
      </div>
  );
}

export default ServiceSideBar;
