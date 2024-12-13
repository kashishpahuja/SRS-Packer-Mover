import React from "react";

import aboutImg from "../assets/about/aboutMain1.webp";
import { FaCheck } from "react-icons/fa";

const About = () => {

  return (
    <div className="px-4 lg:px-20 flex justify-center flex-col lg:flex-row lg:space-x-6 gap-0 lg:gap-12   py-8">
      <div >
        <img
          src={aboutImg}
          alt="About Us"
          className="w-full h-[480px] object-cover shadow-md m-0 lg:m-3"
          data-aos="slide-right"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center h-[420px] lg:h-[500px] justify-evenly" data-aos="zoom-in">
        <div className="text-justify">
          <h2 className="text-3xl font-bold text-gray-800">
            The Complete <span className="text-red-600">Solution</span>
          </h2>
          <div className="border-b-4 border-red-600 w-[70px] rounded-lg mt-4 mb-8"></div>

          <p className="text-sm mb-8">
            SRS Packers & Movers follow a commitment to quality in relocation
            services offered within the length and breadth of the country. With
            years of experience in operations and expertise in our domain, we
            have been able to garner a reputation for speed, efficiency, and
            reliability.
          </p>
          <p className="hidden lg:block lg:text-sm lg:mb-8">
            From residential and office to industrial relocation, we design
            customized solutions based on the needs of the clients. The team of
            skilled professionals takes due care to ensure that your goods are
            packed and transported to the required destination without any loss
            or damage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 font-semibold">
            <div className="flex items-center gap-2">
              <FaCheck className="text-red-500 text-xl mr-2" />
              <span className="text-sm">Expert Packing & Handling</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-red-500 text-xl mr-2" />
              <span className="text-sm">Moving Solution</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-red-500 text-xl mr-2" />
              <span className="text-sm">Storage Facility</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-red-500 text-xl mr-2" />
              <span className="text-sm">Full-Service Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
