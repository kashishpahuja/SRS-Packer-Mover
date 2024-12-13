import React,{useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form({onClose}) {
  const [formData, setFormData] = useState({
    S_name: "",
    S_email: "",
    S_phone: "",
    Location_form: "",
    Location_to: "",
    message: "",
    userEmailsir: "rs2591253@gmail.com",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    <div>
      
      <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                  <div className="lg:col-span-2">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      name="S_name"
                      value={formData.S_name}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md p-4 focus:outline-none"
                    />
                    {errors.S_name && <p className="text-red-600">{errors.S_name}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Phone Number*"
                      name="S_phone"
                      value={formData.S_phone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md p-4 focus:outline-none"
                    />
                    {errors.S_phone && <p className="text-red-600">{errors.S_phone}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email*"
                      name="S_email"
                      value={formData.S_email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md p-4 focus:outline-none"
                    />
                    {errors.S_email && <p className="text-red-600">{errors.S_email}</p>}
                  </div>

                  <div className="lg:col-span-2">
                    <input
                      type="text"
                      placeholder="Location from*"
                      name="Location_form"
                      value={formData.Location_form}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md p-4 focus:outline-none"
                    />
                    {errors.Location_form && <p className="text-red-600">{errors.Location_form}</p>}
                  </div>

                  <div className="lg:col-span-2">
                    <input
                      type="text"
                      placeholder="Location to*"
                      name="Location_to"
                      value={formData.Location_to}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md p-4 focus:outline-none"
                    />
                    {errors.Location_to && <p className="text-red-600">{errors.Location_to}</p>}
                  </div>
                </div>

                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="Write Message*"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-md p-4 h-32 focus:outline-none"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-red-700 text-white py-3 px-4 rounded-lg hover:bg-red-900 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>

      <ToastContainer />

    </div>
  )
}

export default Form
