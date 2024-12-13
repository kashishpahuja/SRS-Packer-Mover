import React from 'react';
import { useEffect } from 'react';
import FAQ from '../components/FAQ';
import ServiceSideBar from '../components/ServiceSideBar';
import officeShifting from '../assets/services/officeShifting.webp';
import pageHeaderBG from '../assets/hero/page-header-bg.webp';

function OfficeShifting() {
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
          className="w-full h-[300px] lg:h-auto bg-gradient-to-br from-black to-transparent mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
          <h1 className="text-white text-4xl font-bold mb-2">Office Shifting Services</h1>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap mt-16">
        {/* Left Column */}
        <div className="w-full lg:w-5/12 xl:w-1/3 px-4 mb-4 lg:mb-0 lg:sticky lg:top-0 lg:h-min">
          <ServiceSideBar />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-7/12 xl:w-2/3">
          <div className="p-6">
            {/* Main Title and Description */}
            <h3 className="text-2xl font-semibold mb-4">
              SRS Packers and Movers: Your Reliable Partner for Office Relocations
            </h3>
            <p className="text-md">
              It requires a lot of planning and coordination to avoid downtime and interference with corporate business.
              Therefore, office relocation forms a specialty for SRS Packers and Movers. From the time of relocation to
              setting up at the new site, effective seamless services are offered with special tailor-made needs for
              every company. Knowledgeable staff looks after everything, from moving furniture and equipment to setting
              up your location anew, ensuring a smooth transition and quick return to normal business operations.
            </p>
            <img src={officeShifting} alt="" className="w-full h-auto lg:h-[300px] object-cover my-4" />

            {/* packers and movers Service */}
            <div className="bg-white shadow-lg p-4 gap-8">
              <h3 className="text-2xl font-semibold mb-4">
                Efficient and Hassle-Free Office Relocation in Bangalore with SRS Packers and Movers
              </h3>
              <p className="text-md mb-6">
                Office relocation involves a lot of planning and execution; hence it requires professional execution. A
                dependable and effective moving service is needed by every busy metropolis city like Bangalore. Movers
                and Packers SRS deals in complete office relocation services, which make your moving easy and
                hassle-free.
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Top Packers & Movers in Bangalore: SRS Packers & Movers Has You Covered
              </h3>
              <p className="text-md mb-6">
                SRS Packers & Movers are the best in providing relocation services effectively to corporate and
                residential clients. Whether it's your company moving or you moving into a new home, our highly qualified
                team of professionals manages every aspect of relocation with much care, efficiency, and accuracy.
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Streamlined Office Relocation in Bangalore with SRS Packers & Movers
              </h3>
              <p className="text-md mb-6">
                Are you looking for the best office moving services in Bangalore? Call SRS Packers & Movers as it is a
                company that moves offices efficiently and without hassle. Our specialty is providing comprehensive
                moving solutions that are specifically designed to meet the demands of business settings.
              </p>
            </div>

            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeShifting;
