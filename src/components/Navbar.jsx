import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaAngleDown, FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookSquare, FaPinterestP, FaInstagram } from "react-icons/fa";
import logo from "../assets/hero/Logo.webp";

function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState("Home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (page) => {
    setActive(page);
    setIsMenuOpen(false); 
    setIsDropdownOpen(false); 
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

// Update active state based on the current route
useEffect(() => {
  const path = location.pathname;

  if (path === "/") setActive("Home");
  else if (path === "/about") setActive("About");
  else if (path.startsWith("/packers-movers") || 
           path.startsWith("/office-shifting") || 
           path.startsWith("/home-shifting") || 
           path.startsWith("/storage-facilities") || 
           path.startsWith("/bike-car-shifting") || 
           path.startsWith("/international-shifting")) {
    setActive("Services");
  }
  else if (path === "/blog") setActive("Blog");
  else if (path === "/contact") setActive("Contact");
}, [location]);
  

  return (
    <div className="sticky top-0 flex items-center justify-between px-4 lg:px-16 z-50 bg-white shadow-md h-[50px] lg:h-[70px] " >
      {/* Logo */}
     <div>
      <div className="relative block mr-[30px] z-[1] before:absolute before:top-0 before:left-[-10000000px] before:right-full before:bottom-0 before:bg-red-600"
      onClick={scrollToTop}
      >
          <Link
            to="/"
            className="relative  h-[52px] lg:h-[72px] flex items-center  pr-9  lg:pr-[150px] bg-red-600 "
            style={{ clipPath: "polygon(0 0, 100% 0%, 76% 100%, 0% 100%)" }} 
          >
            <img src={logo} alt="Logo" className="w-[130px] lg:w-[200px] h-10 lg:h-16 -ml-6" />
          </Link>
        </div>
     </div>

      {/* Main Menu */}
      <div className="hidden lg:flex items-center">
        <ul className="flex space-x-16 text-sm font-semibold text-gray-800">
          <li
            className={`relative uppercase cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ${
              active === "Home"
                ? "border-red-700 border-b-2 text-red-700 pb-[2px]"
                : ""
            }`}
            onClick={() => handleClick("Home")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`relative uppercase cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ${
              active === "About"
                ? "border-red-700 border-b-2 text-red-700 pb-[2px]"
                : ""
            }`}
            onClick={() => handleClick("About")}
          >
            <Link to="/about">About</Link>
          </li>
          
          <li
            className={`relative cursor-pointer  hover:text-red-700 ${
              active === "Services"
                ? "border-red-700 border-b-2 text-red-700 pb-[2px]"
                : ""
            }`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            
          >
            <div className="flex items-center uppercase" >
              <Link to="/services" className="hover:border-b-2 hover:border-red-700"
              >Services</Link>
              <FaAngleDown className="ml-2" />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute left-0 pt-5 w-64 bg-white shadow-lg px-4 py-2 " 
              onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <li className="border-b py-2">
                  <Link
                    to="/packers-movers-banglore"
                    className="block  py-2 text-gray-800 hover:text-red-700"
                    onClick={() => handleClick("Packers & Movers")}
                  >
                    Packers & Movers Services
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    to="/office-shifting-banglore"
                    className="block py-2 text-gray-800 hover:text-red-700"
                    onClick={() => handleClick("Office Shifting")}
                  >
                    Office Shifting Services
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    to="/home-shifting-banglore"
                    className="block py-2 text-gray-800 hover:text-red-700"
                    onClick={() => handleClick("Home Shifting")}
                  >
                    Home Shifting Services
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    to="/storage-facilities-banglore"
                    className="block py-2 text-gray-800 hover:text-red-700"
                    onClick={() => handleClick("Storage Facilities")}
                  >
                    Storage Facilities Services
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    to="/bike-car-shifting-banglore"
                    className="block py-2 text-gray-800 hover:text-red-700"
                    onClick={() => handleClick("Bike & Car Shifting")}
                  >
                    Bike & Car Shifting Services
                  </Link>
                </li>
                <li className=" py-2">
                  <Link
                    to="/international-shifting-banglore"
                    className="block py-2 mt-1 text-gray-800 hover:text-red-700"
                    onClick={() => handleClick("International Shifting")}
                  >
                    International Shifting Services
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className={`relative uppercase cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ${
              active === "Blog"
                ? "border-red-700 border-b-2 text-red-700 pb-[2px]"
                : ""
            }`}
            onClick={() => handleClick("Blog")}
          >
            <Link to="/blog">Blog</Link>
          </li>
          <li
            className={`relative uppercase cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ${
              active === "Contact"
                ? "border-red-700 border-b-2 text-red-700 pb-[2px]"
                : ""
            }`}
            onClick={() => handleClick("Contact")}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div>
        <Link
          to="/contact"
          className="text-sm bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hidden lg:block"
        >
          GET A QUOTE
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button onClick={handleMenuToggle} className="text-2xl text-red-600 ">
          {isMenuOpen ? <FaTimes className="w-16 h-6"/> : <FaBars className="w-16 h-6"/>}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-80 bg-black text-white lg:hidden z-20 h-full border-r border-gray-800"
        data-aos="fade-right"
        >
          {/* Close button */}
          <div className="flex justify-between items-center">
            <div className="">
              <Link to="/" aria-label="logo image" 
                onClick={() => handleClick("Home")}
              
              >
                <img src={logo} alt="Logo" className="pt-4 w-32 h-16 -ml-2 "/>
              </Link>
            </div>
            <span className=" cursor-pointer text-lg  " onClick={handleMenuToggle}>
              <FaTimes className="mr-4 "/>
            </span>
          </div>

          {/* Mobile nav container */}
          <div>
            <ul className="flex flex-col space-y-4 px-4 my-4">
              <Link
                to="/"
                className="text-white hover:text-red-600 text-sm border-b py-2 border-[#767676]"
                onClick={() => handleClick("Home")}
              >
                <li>Home</li>
              </Link>

              <Link
                to="/about"
                className="text-white hover:text-red-600 text-sm border-b py-2 border-[#767676]"
                onClick={() => handleClick("About")}
              >
                <li>About</li>
              </Link>
               {/* Services Dropdown */}
               <li >
                <div
                  className="flex justify-between items-center text-white border-b py-2 border-[#767676]"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <Link to="/services" className="text-sm">Services</Link>
                  <FaAngleDown className="text-base bg-red-600 rounded-sm" />
                </div>
                {isDropdownOpen && (
                  <ul className="ml-4 mt-2 space-y-2 text-sm">
                    <Link to="/services" className="text-white hover:text-red-600" onClick={() => handleClick("Packers & Movers")}>
                      <li className="border-b py-3 border-[#767676]">Services</li>
                    </Link>
                    <Link to="/packers-movers-banglore" className="text-white hover:text-red-600" onClick={() => handleClick("Packers & Movers")}>
                      <li className="border-b py-3 border-[#767676]">Packers & Movers</li>
                    </Link>
                    <Link to="/office-shifting-banglore" className="text-white hover:text-red-600" onClick={() => handleClick("Office Shifting")}>
                      <li className="border-b py-3 border-[#767676]">Office Shifting</li>
                    </Link>
                    <Link to="/home-shifting-banglore" className="text-white hover:text-red-600" onClick={() => handleClick("Home Shifting")}>
                      <li className="border-b py-3 border-[#767676]">Home Shifting</li>
                    </Link>
                    <Link to="/storage-facilities-banglore" className="text-white hover:text-red-600" onClick={() => handleClick("Storage Facilities")}>
                      <li className="border-b py-3 border-[#767676]">Storage Facilities</li>
                    </Link>
                    <Link to="/bike-car-shifting-banglore" className="text-white hover:text-red-600" onClick={() => handleClick("Bike & Car Shifting")}>
                      <li className="border-b py-3 border-[#767676]">Bike & Car Shifting</li>
                    </Link>
                    <Link to="/international-shifting-banglore" className="text-white hover:text-red-600" onClick={() => handleClick("International Shifting")}>
                      <li className="border-b py-3 border-[#767676]">International Shifting</li>
                    </Link>
                  </ul>
                )}
              </li>

              

              <Link
                to="/blog"
                className="text-white hover:text-red-600 text-sm border-b py-2 border-[#767676]"
                onClick={() => handleClick("Blog")}
              >
                <li>Blog</li>
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-red-600 text-sm border-b py-2 border-[#767676]"
                onClick={() => handleClick("Contact")}
              >
                <li>Contact</li>
              </Link>

             
            </ul>
          </div>

          {/* Contact and social links */}
          <ul className="list-unstyled px-4 mt-8 space-y-8 text-sm">
            <li className="flex gap-2 items-center ">
              <FaEnvelope />
              <a href="mailto:info@srscargopackers.in" className="hover:text-red-600">
              info@srscargopackers.in
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaPhoneAlt />
              <a href="tel:+91 94623-27667" className="hover:text-red-600">
              +91 94623-27667
              </a>
            </li>
            <li className="flex gap-6 items-center mt-20 ">
              <a href="https://twitter.com" className="text-lg hover:text-red-600">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" className="text-lg hover:text-red-600">
                <FaFacebookSquare />
              </a>
              <a href="https://pinterest.com" className="text-lg hover:text-red-600">
                <FaPinterestP />
              </a>
              <a href="https://instagram.com" className="text-lg hover:text-red-600">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
