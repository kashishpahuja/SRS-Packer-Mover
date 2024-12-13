import React from 'react'
import { useEffect } from "react";
import FAQ from '../components/FAQ';
import ServiceSideBar from '../components/ServiceSideBar';
import international1 from '../assets/services/international.webp'
import international from '../assets/services/storage.webp'
import pageHeaderBG from '../assets/hero/page-header-bg.webp'

function InternationalShifting() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
<div>

      <div className="relative">
<div className="absolute inset-0 bg-gradient-to-br from-black to-transparent mix-blend-multiply"></div>

        <img
          src={pageHeaderBG}
          alt="topImage"
          className="w-full  h-[300px] lg:h-auto bg-gradient-to-br from-black to-transparent mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
          <h1 className="text-white text-3xl font-bold mb-2">International Shifting Services</h1>
          
        </div>
      </div>

      <div className="px-4 lg:px-20 flex flex-wrap mt-16">
       {/* Left Column */}
    <div className="w-full lg:w-5/12 xl:w-1/3 px-4 mb-4 lg:mb-0 lg:sticky lg:top-0 lg:h-min">

<ServiceSideBar/>
</div>

        {/*  Right Column  */}
        <div className="w-full lg:w-7/12 xl:w-2/3">
    <div className="p-6 ">
      {/* {/ Main Title and Description /} */}
      <h3 className="text-2xl font-semibold mb-4 ">
      International Shifting with SRS Packers and Movers
      </h3>
      <p className="text-black text-md">
      International relocation can be quite cumbersome considering the hassles related to customs restrictions, secure packaging, and safe cross-border transportation. If one needs an easy and stress-free international relocation experience, SRS Packers and Movers in Bangalore offer a professional service. With wide experience over the years and having a global network, SRS has ensured that your goods will arrive in safety and on time no matter where you are relocating. <br />

SRS Packers & Movers provide complete relocation services internationally, right from packing to documentation, customs clearance, transportation, and final delivery at your new site. Its crew is proficient in the international shipping procedure in such a way that all legal and regulatory standards are met, apart from minimizing the chance of delays and problems in transit.
</p>
<div className="flex justify-between gap-2">
            <img
              src={international1}
              alt=""
              className="w-1/2 h-[340px] lg:h-[370px] my-8  object-cover"
            />
            <img
              src={international}
              alt=""
              className="w-1/2 h-[340px] lg:h-[370px] my-8  object-cover"
            />
            </div>
      {/* {/ packers and movers Service /} */}
      <div className="bg-white shadow-lg p-4  gap-8">
        <h3 className="text-2xl font-semibold mb-4">
        Distinct Advantages of International Relocation with SRS Packers and Movers
        </h3>
        <p className="text-gray-900 mb-6 text-md">
    <b>Real-Time Tracking:</b> SRS has GPS-enabled tracking devices to ensure that you can follow your shipment’s movement in real time, providing you with peace of mind.
</p>
<p className="text-black mb-6 text-md">
    <b>Competent Personnel:</b> The experienced staff ensures that items are packed and loaded safely, and your valuables are handled professionally throughout transportation.
</p>
<p className="text-black mb-6 text-md">
    <b>Timely Delivery:</b> SRS Packers & Movers prioritize on-time delivery, working diligently to ensure your goods arrive at their destination within the stipulated timeframe.
</p>
<p className="text-black mb-6 text-md">
    <b>Stress-Free Relocation:</b> SRS manages every aspect of international moving, allowing you to focus on settling into your new environment without added stress.
</p>
<p className="text-black mb-6 text-md">
    <b>Insurance Coverage:</b> Comprehensive insurance solutions are provided to cover any potential risks during transit, offering added protection for your valued belongings.
</p>

      </div>



      <FAQ />
    </div>
  </div>
      </div>
    </div>
  )
}

export default InternationalShifting