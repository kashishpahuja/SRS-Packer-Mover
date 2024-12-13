import React, { useState } from "react";
import quoteLeft from "../assets/quote/QuoteLeft.webp";
import quoteRight from "../assets/quote/quoteRight.webp";
import quoteBottom from "../assets/quote/quoteBottom.webp";
import Main from "../assets/quote/quoteMain.webp";
import BottomRight from "../assets/quote/BottomRight.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quote = ({ onClose }) => {
  const [formData, setFormData] = useState({
    S_name: "",
    S_email: "",
    S_phone: "",
    c: "",
    Location_to: "",
    userEmailsir: "rs2591253@gmail.com",
  });

  console.log(formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    console.log(formData);
  };

  const [errors, setErrors] = useState({});

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
    if (!formData.Location_form)
      tempErrors.Location_form = "Location From is required";
    if (!formData.Location_to)
      tempErrors.Location_to = "Location To is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
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

      console.log(response);

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

  return (
    <section className="relative py-12 px-4 lg:px-20 ">
      <div className="top-0 left-0 absolute">
        <img
          src={quoteLeft}
          className="w-full h-auto object-cover"
          alt="topleft"
        />
      </div>
      <div className="absolute top-[370px] left-0">
        <img
          src={quoteBottom}
          alt="bottomleft"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="top-0 right-0 absolute hidden lg:block">
        <img
          src={BottomRight}
          className="w-full h-[750px] object-cover"
          alt="bottomright"
        />
      </div>
      <div className="absolute top-0 right-0">
        <img
          src={quoteRight}
          alt="topright"
          className="w-full h-auto opacity-25"
        />
      </div>
      <div className="px-4 lg:px-20 p-0 lg:p-8 relative z-30">
        <div className="flex gap-5 lg:gap-20 justify-center flex-wrap lg:flex-nowrap mt-10 items-center">
          {/* Left Column */}
          <div>
            <div className="relative">
              <img
                src={Main}
                alt="Contact"
                className="w-full max-w-md h-auto border-0 rounded-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 p-6 lg:p-8 border-2 bg-gray-50">
            <div>
              <p className="text-primary text-lg font-semibold mb-2 text-red-700">
                GET FREE QUOTE
              </p>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Request a Quote
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="S_name"
                  placeholder="Your Name"
                  className={`w-full p-3 mb-4 text-black border border-gray-300 rounded focus:outline-none ${
                    errors.S_name ? "border-red-500" : ""
                  }`}
                  value={formData.S_name}
                  onChange={handleChange}
                />
                
                <input
                  type="email"
                  name="S_email"
                  placeholder="Email Address"
                  className={`w-full mb-4 p-3 text-black border border-gray-300 rounded focus:outline-none ${
                    errors.S_email ? "border-red-500" : ""
                  }`}
                  value={formData.S_email}
                  onChange={handleChange}
                />
              

                <input
                  type="text"
                  name="S_phone"
                  placeholder="Phone Number"
                  className={`w-full p-3 mb-4 text-black border border-gray-300 rounded focus:outline-none ${
                    errors.S_phone ? "border-red-500" : ""
                  }`}
                  value={formData.S_phone}
                  onChange={handleChange}
                />
                
                <input
                  type="text"
                  name="Location_form"
                  placeholder="Location From"
                  className={`w-full p-3 mb-4 text-black border border-gray-300 rounded focus:outline-none ${
                    errors.Location_form ? "border-red-500" : ""
                  }`}
                  value={formData.Location_form}
                  onChange={handleChange}
                />
                {errors.Location_form && (
                  <p className="text-red-500 text-sm mb-4">
                  </p>
                )}

                <input
                  type="text"
                  name="Location_to"
                  placeholder="Location To"
                  className={`w-full p-3 text-black border border-gray-300 rounded focus:outline-none ${
                    errors.Location_to ? "border-red-500" : ""
                  }`}
                  value={formData.Location_to}
                  onChange={handleChange}
                />
                {errors.Location_to && (
                  <p className="text-red-500 text-sm mb-4">
                  </p>
                )}

                {/* Form Button */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 mt-2 px-6 rounded "
                  >
                    GET YOUR QUOTE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Quote;
