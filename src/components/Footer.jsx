import React from "react";
import { FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/hero/Logo.webp";
import bgFooter from "../assets/hero/BGfooter.webp";
import footerShape from "../assets/hero/footer-shape-1.webp";

const Footer = () => {
  return (
    <div className=" bg-gray-900 text-white  pt-2 mt-48 lg:mt-36 relative">
      <div
        className=" bg-cover bg-center overflow-hidden mx-4 lg:mx-28  py-6 lg:py-16 -mt-28  rounded-xl "
        style={{ backgroundImage: `url(${bgFooter})` }}
      >
        <div className="flex lg:items-center lg:justify-between flex-wrap  px-4 lg:px-20">
          <div className="space-y-3 mb-4 lg:mb-0">
            <h3 className="text-xl lg:text-3xl text-black font-bold">
              Looking for the Best Transport Services?
            </h3>
            <p className="text-sm lg:text-md text-black">
              Try it risk-free - We don't charge cancellation fees
            </p>
          </div>
          <div className="mx-auto lg:mx-0">
            <Link
              to="/contact"
              className="inline-block bg-red-700 rounded-lg  text-white font-semibold text-sm lg:text-lg px-4 py-4  lg:px-8 lg:py-4  transition duration-300"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute top-9 lg:top-0 right-0 w-40 h-40 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${footerShape})` }}
      />
      <div>
        <div className=" text-white  pr-0 py-10 lg:pl-5 lg:pr-5  ">
          <div className="flex flex-col lg:flex-row items-start justify-between bg-gray-900 text-white p-6 px-6  lg:px-32">
            {/* 1st Column - Company Info */}
            <div className="flex flex-col mb-6 lg:mb-0 w-full lg:w-[40%]">
              <img
                src={logo}
                alt="SRS Packers & Movers"
                className="mb-4 w-32 md:w-40 lg:w-48 xl:w-56 -ml-6 lg:-ml-10 text-justify "
              />
              <p className="text-md lg:w-[330px] text-justify">
                SRS Packers Movers assure individualized services that are
                reliable and efficient in fulfilling all your requirements.
              </p>
              <h3 className="text-lg font-medium py-4 hover:text-yellow-500 ">
                Follow Us:
              </h3>
              <div className="flex gap-6 ">
                <a href="#" className="hover:text-yellow-500 text-xl">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-yellow-500 text-xl">
                  <FaFacebook />
                </a>
                <a href="#" className="hover:text-yellow-500 text-xl">
                  <FaPinterestP />
                </a>
                <a href="#" className="hover:text-yellow-500 text-xl">
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* 2nd Column - Quick Links */}
            <div className="flex flex-col mb-6 lg:mb-0 w-full lg:w-[20%]">
              <h3 className="text-2xl font-bold mb-4 hover:text-yellow-500">
                Quick Links
              </h3>
              <ul className="space-y-4 text-md">
                <li className="flex items-center hover:text-yellow-500">
                  <FaChevronRight className="mr-2" />
                  <Link to="/">Home</Link>
                </li>
                <li className="flex items-center hover:text-yellow-500">
                  <FaChevronRight className="mr-2" />
                  <Link to="/about">About Us</Link>
                </li>
                <li className="flex items-center hover:text-yellow-500">
                  <FaChevronRight className="mr-2" />
                  <Link to="/services">Services</Link>
                </li>
                <li className="flex items-center hover:text-yellow-500">
                  <FaChevronRight className="mr-2" />
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="flex items-center hover:text-yellow-500">
                  <FaChevronRight className="mr-2" />
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* 3rd Column - Services */}
            <div className="flex flex-col mb-6 lg:mb-0 w-full lg:w-[20%]  text-md">
              <h3 className="text-2xl font-bold mb-4 hover:text-yellow-500">
                Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center hover:text-yellow-500">
                  <FaChevronRight className="mr-2" />
                  <Link to="/packers-movers-banglore">Packers & Movers</Link>
                </li>
                <li className="flex items-center hover:text-yellow-500">
                  <FaChevronRight className="mr-2" />
                  <Link to="/office-shifting-banglore">Office Shifting</Link>
                </li>
                <li className="flex items-center hover:text-yellow-500">
                  <FaChevronRight className="mr-2" />
                  <Link to="/home-shifting-banglore">Home Shifting</Link>
                </li>
                <li className="flex items-center hover:text-yellow-500">
                  <FaChevronRight className="mr-2" />
                  <Link to="/storage-facilities-banglore">
                    Storage Facilities
                  </Link>
                </li>
                <li className="flex items-center hover:text-yellow-500">
                  <FaChevronRight className="mr-2" />
                  <Link to="/bike-car-shifting-banglore">
                    Bike & Car Shifting
                  </Link>
                </li>
                <li className="flex items-center hover:text-yellow-500">
                  <FaChevronRight className="mr-2" />
                  <Link to="/international-shifting-banglore">
                    International Shifting
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4th Column - Contact Information */}
            <div className="flex flex-col w-full lg:w-[40%]">
              <h3 className="text-xl font-bold mb-4 hover:text-yellow-500">
                Contact Information
              </h3>
              <div className="text-center lg:text-left ">
                <p className="flex items-center  hover:text-yellow-500 mb-4  text-md">
                  <FaPhoneAlt className=" mr-4" />
                  <a href="tel:+91 94623-27667">+91 94623-27667</a>
                </p>
                <p className="flex hover:text-yellow-500 leading-snug mb-4  text-md">
                  <CiLocationOn className="text-5xl mr-4" />
                  <span className="text-justify">
                  Address: Flat No 9/15/2 K No 15/2, Bettadasanapura, Bettadasanapura Road, Bangalore South, Electronic City Phase 1 Bengaluru Karnataka 560100
                  </span>
                </p>
                <p className="flex items-center hover:text-yellow-500 text-md">
                  <CiMail className=" mr-4" />
                  <a href="mailto:info@srscargopackers.in">
                  info@srscargopackers.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-gray-800 py-3 text-white text-sm text-center">
          
            Copyright © 2024 SRS Packers & Movers Banglore.{" "}
            <a href="#" className="hover:text-yellow-500">
              Designed by Future IT Touch.
            </a>{" "}
            All Rights Reserved.
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
