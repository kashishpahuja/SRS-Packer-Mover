import React from "react";
import { useEffect } from "react";
import ServiceSideBar from "../components/ServiceSideBar";
import FAQ from "../components/FAQ";
import bikeCar from "../assets/services/bikeCar.webp";
import pageHeaderBG from "../assets/hero/page-header-bg.webp";


function BikeCarShifting() {
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
          <h1 className="text-white text-3xl font-bold mb-2">
            Bike & Car Shifting Services
          </h1>
        </div>
      </div>

      <div className="px-4 lg:px-20 flex flex-wrap mt-16">
        {/* Left Column */}
    <div className="w-full lg:w-5/12 xl:w-1/3 px-4 mb-4 lg:mb-0 lg:sticky lg:top-0 lg:h-min">

<ServiceSideBar/>
</div>

        {/* {/ Right Column /} */}
        <div className="w-full lg:w-7/12 xl:w-2/3">
          <div className="p-6 ">
            {/* {/ Main Title and Description /} */}
            <h3 className="text-3xl font-semibold mb-4 ">
              SRS Packers & Movers: Bike & Car Shifting Services
            </h3>
            <p className="text-black  text-md">
              Relocation within the city or to some distant place gets all the
              more cumbersome if it happens to involve two-and four-wheelers.
              The need is for a service performer on whom one can rely so that
              one's vehicles are relocated with speed and safety. SRS Packers
              and Movers serve a busy metropolis with bad traffic by offering
              professional and secured bike and automobile transportation
              services in a customer-friendly manner. We understand the
              emotional and monetary worth of your vehicles. For this reason,
              their bike and car shifting services have been designed to provide
              the best experience in a smooth and hassle-free manner. Whether
              you are moving your vehicle locally or to another state, we take
              responsibility for everything-from preliminary examination and
              professional packing to safe loading and deliverance.
            </p>
            <img
              src={bikeCar}
              alt=""
              className="w-full h-auto lg:h-[300px] object-cover my-4 "
            />
            {/* {/ packers and movers Service /} */}
            <div className="bg-white shadow-lg p-4  gap-8">
              <h3 className="text-2xl font-semibold mb-4">
                Meticulous Vehicle Protection and Care
              </h3>
              <p className="text-black mb-6 text-md">
                Some of the key features in our services are the efficient
                packing. In this respect, our professionals use high-quality
                packing materials like bubble wraps, corrugated sheets, and
                protective covers to keep your bike safe from dents, scratches,
                and other potential damage during transit. A car also gets this
                treatment as far as moving is concerned, with specific
                containers and special covers designed to protect the interior
                and exterior parts from any damage while it undergoes a move.
                SRS Packers and Movers provide ultimate care to your bike or car
                during the entire transportation process. The company commits to
                the safety and precision of your vehicle. Our experience and
                attention to each detail offer you peace of mind, knowing that
                your vehicle will arrive at its new destination in the same
                condition it was in when you handed it to us.{" "}
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                Advanced Equipment and Technology
              </h3>
              <p className="text-black mb-6 text-md">
                SRS Packers and Movers use the latest equipment and technology
                to ensure that the vehicle transporting procedure moves
                smoothly. Special trailers, hydraulic lifts, and leading vehicle
                carriers are utilized in loading and transporting vehicles
                safely. Such gadgets improve not only the safety of your bike or
                car but also make the relocation procedure much faster. In
                addition to all this, SRS has GPS monitoring devices that allow
                the customer to view in real time the exact location of their
                vehicle in transit as another layer of security.
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                Experienced and Skilled Staff
              </h3>
              <p className="text-black mb-6 text-md">
                SRS Packers & Movers is manned by well-qualified specialists who
                have gained substantial experience in car relocation services.
                Whichever the type of car, be it a simple motorcycle or an
                expensive luxury sedan, the crew is properly trained in handling
                all categories of cars with precision and utmost care. Knowledge
                in the field enables them to accord appropriate care to each
                vehicle during the process. Additionally, SRS offers
                personalized services, considering that each car, as well as
                every relocation, needs a specific approach tailored to the
                customer's precise needs.
              </p>
            </div>

          

            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BikeCarShifting;
