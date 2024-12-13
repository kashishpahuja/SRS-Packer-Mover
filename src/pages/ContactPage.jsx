import React, { useState, useEffect } from "react";
import topImg from "../assets/hero/page-header-bg.webp";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../components/Form";

function ContactPage({ onClose }) {
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
          className="w-full h-[300px] lg:h-auto bg-gradient-to-br from-black to-transparent mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white">
          <h1 className="text-white text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-white text-lg sm:text-xl">
            <span className="text-yellow-600 font-bold">Home</span> -{" "}
            <span>Contact Us</span>
          </p>
        </div>
      </div>

      <div className="py-20 px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex items-center justify-center shadow-lg">
            <div className="px-12 py-10 font-semibold w-full max-w-3xl">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-3">
                Feel Free to write
              </h3>
              <p className="text-black mb-4 text-sm">
                Your email address will not be published. Required fields are
                marked *
              </p>
              
              <Form />
            </div>
          </div>

          {/* Right-side contact details section */}

          <div>
            <img src="/Images/AboutPage/contactRight.webp" alt="" />
          </div>
          {/* <div className="bg-white border border-gray-200 rounded-lg text-black py-6 md:p-2">
            <div className=" px-12 py-10 font-semibold w-full max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
                Let's Get in touch
              </h2>
              <p className="text-md">
                SRS Packers Movers assure individualized services that are
                reliable and efficient in fulfilling all your requirements.
              </p>
            </div>

            <div className="space-y-4 px-8 ">
            
              <div className="flex items-start gap-6 p-4 bg-white border-b-2 border-gray-200 pb-5">
                <div className="text-black ">
                  <FaPhoneAlt size={24} />
                </div>
                <div className="">
                  <h4 className="text-md font-medium mb-2 text-black">
                    Have any questions?
                  </h4>
                  <p className="text-black text-sm">Free +91 94623-27667</p>
                </div>
              </div>

            
              <div className="flex items-start gap-6 p-4 bg-white border-b-2 border-gray-200 pb-5 ">
                <div className="text-green-500">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-md font-medium text-black">
                    Write email
                  </h4>
                  <p className="text-black text-sm">
                    <a href="mailto:info@srscargopackers.in">
                    info@srscargopackers.in
                    </a>
                  </p>
                </div>
              </div>

              
              <div className="flex items-start gap-6 p-4 bg-white border-b-2 border-gray-200 pb-5">
                <div className="text-green-500">
                  <BsWhatsapp size={24} />
                </div>
                <div>
                  <h4 className="text-md font-medium text-black">
                    Chat on WhatsApp
                  </h4>
                  <p>
                    <a
                      href="https://wa.me/+91 94623-27667"
                      className="text-black text-sm hover:underline"
                    >
                      +91 94623-27667
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-4 bg-white ">
                <div className="text-red-600">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
  <h4 className="text-md font-medium text-black">Visit anytime</h4>
  
  <h5 className="text-sm font-semibold text-black mt-2">Bengaluru Branch</h5>
  <p className="text-black text-sm text-justify">
  Address: Flat No 9/15/2 K No 15/2, Bettadasanapura, Bettadasanapura Road, Bangalore South, Electronic City Phase 1 Bengaluru Karnataka 560100
  </p>

  <h5 className="text-sm font-semibold text-black mt-2 text-justify">Chennai Branch</h5>
  <p className="text-black text-sm">
    Ground Floor, 61, Sindhu Nagar, Senneerkuppam, Poonamallee, Chennai- 600056
  </p>
</div>

              </div>
            </div>
          </div> */}
        </div>

        {/* Google Map */}
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15560.156292064665!2d77.64788931199173!3d12.84075167056326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c84c653f867%3A0xa2b7177c72352af9!2sElectronics%20City%20Phase%201%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1726552567217!5m2!1sen!2sin"
          className="h-[450px] w-full "
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <ToastContainer />
    </div>
  );
}

export default ContactPage;
