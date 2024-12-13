import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import ServiceSideBar from "../components/ServiceSideBar";
import news1 from "../assets/news/news1.webp";
import news2 from "../assets/news/news2.webp";
import news3 from "../assets/news/news3.webp";
import topImg from "../assets/hero/page-header-bg.webp";
import blogImg1 from "../assets/gallary/project2.webp";
import left from "../assets/gallary/project5.webp";
import right from "../assets/services/officeShifting.webp";
import Form from "../components/Form";

function BlogDetails() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent mix-blend-multiply"></div>
        <img
          src={topImg}
          alt="topImage"
          className="w-full  h-[300px] lg:h-auto bg-gradient-to-br from-black to-transparent mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col h-[300px] lg:h-auto justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
          <h1 className="text-white text-3xl font-bold mb-2">Blog Details</h1>
          <p className="text-white text-lg sm:text-xl">
            <span className="text-yellow-600 font-bold">Home</span> -{" "}
            <span>Details</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 justify-between px-4 md:px-8 lg:px-36 py-6 md:py-10">
        <div className="w-full md:w-2/3 mb-8 md:mb-0">
          <img
            src={blogImg1}
            alt="Blog Main"
            data-aos="fade-up"
            className="w-full h-[400px] object-cover  mb-4"
          />
          <div className="py-6">
            <h3 className="text-3xl  mb-6 font-semibold">
              Relocating Expensive or Fragile Items: What You Need to Know.
            </h3>
            <div className="text-gray-900 text-md mb-4">
              We, at SRS Packers & Movers, take care of the fact that it is very
              necessary to handle your precious and priceless belongings with
              utmost care. To have them transferred safely, follow these key
              tips:
              <ul className="list-disc ml-6 mt-6 space-y-4">
                <li>
                  <b>Good Quality Packing Materials:</b> We select the best
                  quality materials, which include but are not limited to bubble
                  wrap, strong boxes, and padding for your precious items.
                </li>
                <li>
                  <b>Clearly Labeling:</b> Our team labels fragile boxes as such
                  when moving and takes care with those.
                </li>
                <li>
                  <b>Professional Handling:</b> Our professional movers are
                  trained to handle costly items that are fragile in a way so as
                  to provide safety in their movement.
                </li>
                <li>
                  <b>Full Insurance Coverage:</b> We also provide full insurance
                  coverage for giving you peace of mind with regard to your
                  valuables.
                </li>
                <li>
                  <b>Specialized Equipment and Methods:</b> We use special
                  equipment and techniques in handling any item professionally,
                  be it an antique piano, a piece of art, or a piece of
                  furniture.
                </li>
                <li>
                  <b>Climate-Controlled Options:</b> We provide
                  climate-controlled moving to safeguard your sensitive items
                  against extremely high temperatures.
                </li>
                <li>
                  <b>Custom Solutions:</b> We work closely with you to
                  understand your particular needs and what unique care your
                  items will need during the move.
                </li>
              </ul>
            </div>

            <div className="flex gap-2 lg:gap-x-20 justify-center py-4">
              <img
                src={left}
                alt="Image 1"
                className="w-1/2 lg:w-1/3 h-64 lg:h-auto"
              />
              <img
                src={right}
                alt="Image 2"
                className="w-1/2 lg:w-1/3  h-64 lg:h-auto"
              />
            </div>
          </div>
          <div>
            <h3 className="text-3xl  mb-4 font-semibold">
              Latest Articles Updated Daily
            </h3>
            <p className=" text-gray-700 text-md text-justify">
              We, at SRS Packers & Movers, help you stay updated with the latest
              news and trends coming within the moving industry. Daily articles,
              prepared with just one motive-to make your relocation process that
              much simpler-include professional advice for packing fragile items
              to advice on how to choose the best moving company. Be it
              relocation within the same city or across town, know all useful
              tips and solutions at your discretion meant just for your
              particular needs of relocation. Check back often for new content
              added, to help you prepare for a seamless move.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t mt-12 border-gray-500">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0 ">
              <h5 className="font-semibold text-black text-2xl">Posted in:</h5>
              <p className="bg-[#f5f5f8]  border rounded-sm py-1 px-3 text-sm">
                Relocation
              </p>
              <p className="bg-[#f5f5f8]  border rounded-sm p-1 px-3 text-sm">
                House Shifting
              </p>
              <p className="bg-[#f5f5f8]  border rounded-sm p-1 px-3 text-sm">
                Storage
              </p>
            </div>
            <div className="flex items-center">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                <FaShareAlt className="text-2xl" />
              </Link>
            </div>
          </div>
          {/* contact form */}
          <div className="bg-[#f8f8ff] p-8 shadow-lg w-full max-w-5xl">
            <h3 className="text-2xl font-semibold mb-4">Let’s Get in Touch</h3>
            <p className="text-black mb-6">
              Your email address will not be published. Required fields are
              marked *
            </p>
            {/* <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name*"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 p-4 focus:outline-none"
                  />
                  {errors.name && <p className=" text-sm">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email*"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 p-4 focus:outline-none"
                  />
                  {errors.email && <p className=" text-sm">{errors.email}</p>}
                </div>
                <div className="lg:col-span-2">
                  <input
                    type="text"
                    placeholder="Location from*"
                    name="locationFrom"
                    value={formData.locationFrom}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 p-4 focus:outline-none"
                  />
                  {errors.locationFrom && (
                    <p className=" text-sm">{errors.locationFrom}</p>
                  )}
                </div>
                <div className="lg:col-span-2">
                  <input
                    type="text"
                    placeholder="Location to*"
                    name="locationTo"
                    value={formData.locationTo}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 p-4 focus:outline-none"
                  />
                  {errors.locationTo && (
                    <p className=" text-sm">{errors.locationTo}</p>
                  )}
                </div>
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Write Message*"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 p-4 h-32 focus:outline-none"
                ></textarea>
                {errors.message && <p className=" text-sm">{errors.message}</p>}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className={`bg-red-600 text-white py-3 px-6 hover:bg-red-900 transition duration-300 ${
                    isFormValid ? "" : "cursor-pointer"
                  }`}
                  disabled={!isFormValid}
                >
                  Send Message
                </button>
              </div>
            </form> */}

            <Form/>
          </div>
        </div>
        <div className="sticky top-0 h-max w-full md:w-1/3 ">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Search</h3>
            <form action="#" className="flex items-center">
              <input
                type="search"
                placeholder="Keywords here...."
                className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="p-3  rounded-r-lg hover:bg-blue-600"
              >
                <i className="text-gray-800"></i>
              </button>
            </form>
          </div>
          {/* Recent Posts Widget */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold my-6">Recent Posts</h3>
            <ul className="list-none space-y-4 ">
              <li className="flex  border shadow-lg p-4 my-2">
                <div className="w-24 h-16 mr-4">
                  <img
                    src={news1}
                    alt="Recent Post 1"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div>
                  <h3 className="text-md font-semibold">
                    <Link to="/" className="text-black ">
                      SRS Packers & Movers Expands Service Areas
                    </Link>
                  </h3>
                  <span className="text-gray-500 text-sm flex items-center space-x-1">
                    <i className="fas fa-clock"></i>
                    <span>May 29, 2024</span>
                  </span>
                </div>
              </li>
              <li className="flex border shadow-lg p-4 my-2">
                <div className="w-24 h-16 mr-4">
                  <img
                    src={news2}
                    alt="Recent Post 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-md font-semibold">
                    <Link to="/" className="text-black ">
                      Introducing Eco-Friendly Packing Materials
                    </Link>
                  </h3>
                  <span className="text-gray-500 text-sm flex items-center space-x-1">
                    <i className="fas fa-clock"></i>
                    <span>April 12, 2023</span>
                  </span>
                </div>
              </li>
              <li className="flex border shadow-lg p-4 my-2">
                <div className="text-[#767676] w-24 h-16 mr-4">
                  <img
                    src={news3}
                    alt="Recent Post 3"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div>
                  <h3 className="text-md font-semibold">
                    <Link to="/" className="text-black ">
                      Enhanced Cargo Tracking System
                    </Link>
                  </h3>
                  <span className="text-gray-500 text-sm flex items-center space-x-1">
                    <i className="fas fa-clock"></i>
                    <span>September 07, 2024</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Services Widget */}
          <div className="w-full mb-4">
            <ServiceSideBar />
          </div>

          {/* Tags Widget */}
          <div className="border shadow-lg px-4 py-6">
            <h3 className="text-2xl font-semibold mb-6">Tags</h3>
            <div className="flex flex-wrap gap-2 ">
              <Link
                to="/blog-details"
                className="border-2 shadow-md text-gray-700 py-1 px-3  text-sm hover:bg-gray-300"
              >
                Relocation
              </Link>
              <Link
                to="/blog-details"
                className="border-2 shadow-md text-gray-700 py-1 px-3  text-sm hover:bg-gray-300"
              >
                Furniture Moving
              </Link>
              <Link
                to="/blog-details"
                className="border-2 shadow-md  text-gray-700 py-1 px-3  text-sm hover:bg-gray-300"
              >
                Long-Distance Moving
              </Link>
              <Link
                to="/blog-details"
                className="border-2 shadow-md text-gray-700 py-1 px-3  text-sm hover:bg-gray-300"
              >
                Affordable Moving
              </Link>
              <Link
                to="/blog-details"
                className="border-2 shadow-md text-gray-700 py-1 px-3  text-sm hover:bg-gray-300"
              >
                Packing Unpacking
              </Link>
              <Link
                to="/blog-details"
                className="border-2 shadow-md text-gray-700 py-1 px-3  text-sm hover:bg-gray-300"
              >
                Secure Moving
              </Link>
              <Link
                to="/blog-details"
                className="border-2 shadow-md text-gray-700 py-1 px-3  text-sm hover:bg-gray-300"
              >
                Reliable Movers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
