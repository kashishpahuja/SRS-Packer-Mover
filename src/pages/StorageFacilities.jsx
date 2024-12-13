import React from "react";
import { useEffect } from "react";
import ServiceSideBar from "../components/ServiceSideBar";
import FAQ from "../components/FAQ";
import storage from '../assets/services/storage.webp'
import pageHeaderBG from '../assets/hero/page-header-bg.webp'

function StorageFacilities() {
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
          <h1 className="text-white text-2xl font-bold mb-2">Storage Services</h1>
          
        </div>
      </div>

      <div className="px-4 lg:px-20  flex flex-wrap mt-16">
        {/* Left Column */}
    <div className="w-full lg:w-5/12 xl:w-1/3 px-4 mb-4 lg:mb-0 lg:sticky lg:top-0 lg:h-min">

<ServiceSideBar/>
</div>

        {/*  Right Column  */}
        <div className="w-full lg:w-7/12 xl:w-2/3">
          <div className="p-6 ">
            {/* {/ Main Title and Description /} */}
            <h3 className="text-2xl font-semibold mb-4 ">
              SRS Packers & Movers: Comprehensive Storage Solutions
            </h3>
            <p className="text-black text-sm">
              Efficient storage requires coordination and planning. SRS Packers
              & Movers provides credible and safe storage facilities, tailored
              according to the individual clients' needs. Be it long-term or
              short-term, our experienced staff ensures that your goods are well
              preserved and accessible in the best manner. We take care of
              everything-from delicate inventory management to ideal environment
              preservation-to make the storage process smooth and hassle-free.
            </p>
            <img
              src={storage}
              alt=""
              className="w-full h-[340px] lg:h-[400px] object-cover my-8 "
            />

            {/* {/ packers and movers Service /} */}
            <div className="bg-white shadow-lg p-4  gap-8">
              <h3 className="text-2xl font-semibold mb-4">
                Reliable and Secure Storage Services
              </h3>
              <p className="text-black mb-6 text-sm">
                SRS Packers and Movers in Bangalore offer complete storage
                facilities for short-term or long-term purposes. The storage
                facilities offered by them are tremendously safe, wherein only
                the authorized workers can access it with the aid of CCTV
                monitoring round the clock to ensure that your goods remain safe
                and sound. They maintain climate-controlled storage chambers for
                sensitive valuables so that these don't get damaged due to
                environmental factors. With a flexible storage contract, you can
                have your stuff stay in storage from several days to several
                months. Moreover, SRS makes the process of inventory management
                quite easy by itemizing and tracking everything you store. They
                offer unit sizes in a range of sizes, with clear and reasonable
                pricing so you may store anything from big furniture to little
                personal belongings. Additionally, it provides fast access to
                your belongings, thanks to the business.
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                Trusted and Secure Storage Facilities in Bangalore
              </h3>
              <p className="text-black mb-6 text-sm">
                SRS Packers and Movers Bangalore offers customized storage
                facilities for a wide range of customers' demands. It strives to
                innovate and make the transition smooth, effective, and
                successful. The warehouses will be fully equipped with the
                latest technology, which would improve the aspects of both
                security and convenience. It would facilitate real-time
                monitoring systems, space management with much efficiency, and
                more. Facilities are designed for managing products from
                domestic items to commercial stocks, ensuring maximum
                flexibility for individual customers as well as corporations.
                These include value-added services such as professional packing,
                where every item is wrapped safely and carried with care to a
                storage facility. Storage rooms are designed in such a way that
                access to them is easy for safe handling in the case of things
                that require special care or attention. SRS fully supports the
                entire process of storage.
              </p>
            </div>



            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorageFacilities;