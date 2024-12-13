import React from 'react'
import { useEffect } from "react";

import FAQ from '../components/FAQ.jsx'
import ServiceSideBar from '../components/ServiceSideBar';
import packersMovers from '../assets/services/packerMover.webp'
import pageHeaderBG from '../assets/hero/page-header-bg.webp'


function PackersMovers() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div >

      <div className='relative'>
      <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent mix-blend-multiply"></div>

        <img
          src={pageHeaderBG}
          alt="topImage"
          className='w-full  h-[300px] lg:h-auto bg-gradient-to-br from-black to-transparent mix-blend-multiply'
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
          <h1 className="text-white text-4xl font-bold mb-2">Packers & Movers Services</h1>
          
        </div>
      </div>

      <div className="px-4 lg:px-20 flex flex-wrap mt-16">
        {/* Left Column */}
    <div className="w-full lg:w-5/12 xl:w-1/3 px-4 mb-4 lg:mb-0 lg:sticky lg:top-0 lg:h-min">

        <ServiceSideBar/>
    </div>
        {/* Right Column */}
        <div className="w-full lg:w-7/12 xl:w-2/3 ">
        <div className="p-6 ">
            {/* Main Title and Description */}
            <h3 className="text-2xl font-semibold mb-4 ">
            SRS Packers and Movers: Your Trusted Relocation Partner
            </h3>
            <p className=" text-md">
            Shifting from one city or state to another may be bothersome. One needs to ensure that all of his belongings are packed and shifted, which requires a tactical and skillful implementation of plans. Among the well-known shifting companies in Bangalore, SRS Packers & Movers enjoys a lead among people because of their work ethics and commitment towards fulfilling customer requirements.
            </p>
            <img
              src={packersMovers}
              alt=""
              className="w-full h-auto lg:h-[300px] object-cover  my-4 "
            />

            {/* packers and movers Service */}
            <div className='bg-white shadow-lg p-4  gap-8'>
              <h3 className="text-2xl font-semibold mb-4">SRS Movers & Packers.</h3>
              <p className=" mb-6 text-md">
              SRS Packers & Movers in Bengaluru offer home-moving services as well as business relocation services. They try to make their clients have a smooth and stress-free relocation by utilizing their expertise in packing and moving services. Bangalore's Trusted Moving Partner: SRS Packers & Movers
              Shifting from one city or state to another is a hassle. Packing and then relocating all goods requires adequate planning and proper execution. It is for this that SRS Packers & Movers exists as a leading provider of house-shifting services in Bangalore. In this regard, keeping customers in mind, they have a professional way of working.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Efficient Residential and Commercial Relocations</h3>
              <p className=" mb-6 text-md">
              SRS Packers & Movers are the best in providing relocation services effectively to corporate and residential clients. Whether it's your company moving or you moving into a new home, our highly qualified team of professionals manages every aspect of relocation with much care, efficiency, and accuracy. We want to make the process as smooth as possible, and we certainly understand how moving can be a truly stressful experience, especially when it comes to planning your home or handling the details of a corporate relocation.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Stress-Free Packing and Moving Solutions</h3>
              <p className=" mb-6 text-md">
              We at SRS Packers & Movers provide hassle-free relocation through our full-range packing and moving services. Our skilled staff ensures that every stage of the moving procedure is carried out with precision and care. We use top-quality packing supplies in order to protect your valuables, while our efficient moving services ensure everything reaches your new destination on time and safely.
              </p>
              <p className=" mb-6 text-md">From local to across-town services, we have it all to meet your requirements. Let the packers and movers do the job-from huge furniture to the most fragile items-as you sit back and get ready to unpack in the new home or office.


              </p>
            </div>


           




            <FAQ/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PackersMovers
