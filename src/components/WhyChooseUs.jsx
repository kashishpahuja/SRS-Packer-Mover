import React from 'react';
import { FaCheck } from 'react-icons/fa';
import whyUs from '../assets/whyUs/whyUs.webp'

const WhyChooseUs = () => {
  return (
    <div className=" overflow-hidden  flex justify-center flex-col lg:flex-row lg:space-x-6 px-4 lg:px-20 gap-10 py-8 lg:py-16">
      <div className="lg:w-1/2 p-4 space-y-8"  data-aos="fade-right">
        <div className="text-justify ">
          <h2 className="text-3xl font-bold text-gray-800 ">
            Why <span className="text-red-600">Choose Us</span>
          </h2>
        </div>
        <p className="text-sm mb-6">
        SRS Packers & Movers aims to strive for excellence over and above your expectations in your move. Our commitment to excellent service and customer satisfaction is our advantage in the competition.
          <br />
          <br />
          We have a commitment toward the safety of your valuables, upfront pricing, and cover all scope of assistance in your relocation. Our pro members ensure that every moving process is correctly done with care.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8 font-semibold">
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <span className="text-sm">Expert Packing & Handling</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <span className="text-sm">Reliable and Timely Service</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <span className="text-sm">Transparent Pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <span className="text-sm">Comprehensive Customer Support</span>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 " data-aos="fade-left">
        <img className="w-full h-auto object-cover" src={whyUs} alt="Why Choose Us" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
