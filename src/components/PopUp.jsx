import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from '../assets/gallary/popupIMG.webp';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLocationArrow, FaCommentDots } from 'react-icons/fa';

const Popup = ({onClose}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Set timer to show the popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);
  const [formData, setFormData] = useState({
    S_name: "",
    S_email: "",
    S_phone: "",
    Location_form: "",
    Location_to: "",
    message: "",
    userEmailsir: "rs2591253@gmail.com",
  });
  <ToastContainer 
  position="top-right" 
  autoClose={5000} 
  hideProgressBar={false} 
  newestOnTop={false} 
  closeOnClick 
  rtl={false} 
  pauseOnFocusLoss 
  draggable 
  pauseOnHover
/>

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation function
  const validate = () => {
    let tempErrors = {};

    if (!formData.S_name) tempErrors.S_name = "Name is required";
    if (!formData.S_email) tempErrors.S_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.S_email))
      tempErrors.S_email = "Email is invalid";
    if (!formData.S_phone) tempErrors.S_phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.S_phone))
      tempErrors.S_phone = "Phone number must be 10 digits";
    if (!formData.Location_form) tempErrors.Location_form = "Location From is required";
    if (!formData.Location_to) tempErrors.Location_to = "Location To is required";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    const isValid = validate();

    if (!isValid) {
      toast.error("Please fill in all required fields correctly.");
      return; // Stop the submission if validation fails
    }

    const urlEncodedData = new URLSearchParams();

    for (const [key, value] of Object.entries(formData)) {
      urlEncodedData.append(key, value);
    }

    try {
      const response = await fetch(
        "https://sendingmail-6znv.onrender.com/sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlEncodedData.toString(),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          S_name: "",
          S_email: "",
          S_phone: "",
          Location_form: "",
          Location_to: "",
          message: "", 
        });
        if (onClose) {
          onClose();
        }
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to submit the form. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  console.log(formData)

  return (
    isVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 w-full">
        <div className="bg-white rounded-lg w-64 lg:w-[650px] relative grid grid-cols-1 lg:grid-cols-2 mx-4 mb-44 lg:mb-0" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <button className="absolute right-2 text-black font-bold text-2xl lg:text-3xl" onClick={handleClose}>
            &times;
          </button>
          <div className="p-4 lg:px-8 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-2">Ask a Question</h2>
            <span className="block text-black mb-3">Fill out the form below, and our team will get back to you soon.</span>
            <form onSubmit={handleSubmit}>
              <div className="mb-2 flex items-center border border-gray-700 rounded-md shadow-sm">
                <FaUser className="text-gray-700 ml-3" />
                <input
                  name="S_name"
                  value={formData.S_name}
                  onChange={handleChange}
                  className="block w-full p-2 border-none rounded-md focus:outline-none"
                  type="text"
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-2 flex items-center border border-gray-700 rounded-md shadow-sm">
                <FaEnvelope className="text-gray-700 ml-3" />
                <input
                  name="S_email"
                  value={formData.S_email}
                  onChange={handleChange}
                  className="block w-full p-2 border-none rounded-md focus:outline-none"
                  type="S_email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-2 flex items-center border border-gray-700 rounded-md shadow-sm">
                <FaPhone className="text-gray-700 ml-3" />
                <input
                  name="S_phone"
                  value={formData.S_phone}
                  onChange={handleChange}
                  className="block w-full p-2 border-none rounded-md focus:outline-none"
                  type="text"
                  placeholder="Enter Phone"
                />
              </div>
              <div className="mb-3 flex space-x-2">
                <div className="flex items-center border border-gray-700 rounded-md shadow-sm w-1/2">
                  <FaLocationArrow className="text-gray-700 ml-3" />
                  <input
                    name="Location_form"
                    value={formData.Location_form}
                    onChange={handleChange}
                    className="block w-full p-2 border-none rounded-md focus:outline-none"
                    type="text"
                    placeholder="Location from"
                  />
                </div>
                <div className="flex items-center border border-gray-700 rounded-md shadow-sm w-1/2">
                  <FaMapMarkerAlt className="text-gray-700 ml-3" />
                  <input
                    name="Location_to"
                    value={formData.Location_to}
                    onChange={handleChange}
                    className="block w-full p-2 border-none rounded-md focus:outline-none"
                    type="text"
                    placeholder="Location to"
                  />
                </div>
              </div>
              <div className="mb-3 flex items-center border border-gray-700 rounded-md shadow-sm">
                <FaCommentDots className="text-gray-700 ml-3" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full p-2 border-none rounded-md focus:outline-none"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 text-white bg-red-600 rounded-md shadow-md focus:outline-none focus:ring-2 "
              >
                Send Now
              </button>
            </form>
          </div>
          <div className="hidden lg:block">
            <img
              src={img}
              alt="Popup Image"
              className="object-cover h-[450px] w-full rounded-tr-lg rounded-br-lg"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
