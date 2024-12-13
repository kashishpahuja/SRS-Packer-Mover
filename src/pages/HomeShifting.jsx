import React from "react";
import { useEffect } from "react";
import ServiceSideBar from "../components/ServiceSideBar";
import FAQ from "../components/FAQ";
import homeShifting from '../assets/services/homeShifting.webp';
import pageHeaderBG from '../assets/hero/page-header-bg.webp';

function HomeShifting() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  
  return (
    <div>

      {/* Header Image Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent mix-blend-multiply"></div>
        <img
          src={pageHeaderBG}
          alt="topImage"
          className="w-full h-[300px] lg:h-auto bg-gradient-to-br from-black to-transparent mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
          <h1 className="text-white text-3xl font-bold mb-2">Home Shifting Services</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 lg:px-20 flex flex-wrap mt-16">
        {/* Left Column - Sidebar */}
        <div className="w-full lg:w-5/12 xl:w-1/3 px-4 mb-4 lg:mb-0 lg:sticky lg:top-0 lg:h-min">
          <ServiceSideBar />
        </div>

        {/* Right Column - Main Content */}
        <div className="w-full lg:w-7/12 xl:w-2/3">
          <div className="p-6">
            
            {/* Main Title and Description */}
            <h3 className="text-2xl font-semibold mb-4">
              SRS Packers and Movers: Your Reliable Partner for Home Shifting
            </h3>
            <p className="text-black mb-6 text-md">
              House shifting requires a lot of planning and mobilization on your part for smooth shifting to take place without disturbing your daily routine. SRS Packers & Movers are professional and renowned packers and movers offering consistent and efficient services regarding house shifting to make the transition hassle-free and as smooth as possible. From packing up your valuable belongings to settling into your new home, let our professionals handle every detail. We can offer specialized solutions to meet your specific needs and ensure the move is customized to your expectations in terms of time and specifications. With knowledgeable personnel, everything is taken care of, from packing and disassembling furniture to unpacking and organizing at your new home. We make sure your relocation is performed professionally with SRS Packers & Movers for a seamless move to your new location.
            </p>
            
            <img
              src={homeShifting}
              alt="home shifting service"
              className="w-full h-auto lg:h-[300px] object-cover my-8"
            />

            {/* Home Shifting Service Details */}
            <div className="bg-white shadow-lg p-4 gap-8">
              <h3 className="text-2xl font-semibold mb-4">
                Efficient and Hassle-Free Home Shifting with SRS Packers & Movers
              </h3>
              <div className="text-black mb-6 text-md">
                House shifting is about detailed planning and careful execution to ensure the process runs smoothly. SRS Packers & Movers specialize in home shifting services to make your move efficient and worry-free. With ample experience in household relocations, we offer a comprehensive range of moving services. Our home-shifting services include:
                <ul className="list-disc pl-5 mt-4">
                  <li><b>Packing and Unpacking:</b> Experts pack your items safely, and unpacking is efficiently carried out at your new location.</li>
                  <li className="my-2"><b>Loading and Unloading:</b> Securely loading and unloading goods to prevent damage during the move.</li>
                  <li className="my-2"><b>Transportation:</b> Timely and safe transportation to your new location.</li>
                  <li className="my-2"><b>Special Handling:</b> Fragile and valuable items are given special care to ensure their safety during transit.</li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeShifting;
