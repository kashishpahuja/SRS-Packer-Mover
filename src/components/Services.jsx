import React from 'react';
import packersMovers from '../assets/services/packerMover.webp'
import homeShifting from '../assets/services/homeShifting.webp'
import bikeCar from '../assets/services/bikeCar.webp'
import storage from '../assets/services/storage.webp'
import international from '../assets/services/international.webp'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import officeShifting from '../assets/services/officeShifting.webp';
import BGimg from '../assets/gallary/GallryBG.webp'



function Services() {
  const servicesData = [
    {
      image: packersMovers,
      title: "Packers and Movers Services",
      description: "Moving to Link new location may be Link difficult undertaking, whether it's across town or state lines. Careful planning and dependable execution are necessary for the Packers & Movers, packing, and secure shipping.",
      link: "/packers-movers-banglore",
    },
    {
      image: officeShifting, 
      title: "Office Shifting Services",
      description: "Office relocation is Link huge undertaking that requires careful planning, organising, and carrying out. It is crucial to have Link trustworthy and knowledgeable moving service in Link busy city like Bangalore.",
      link: "/office-shifting-banglore",
    },
    {
      image: homeShifting, 
      title: "Home Shifting Services",
      description: "SRS Packers & Movers develops an all-inclusive array of moving services. From packing up your belongings to settling them into your new home, their experienced team manages every detail with care. ",
      link: "/home-shifting-banglore",
    },
    {
      image: storage,
      title: "Storage Facilities Services",
      description: "Provide both temporary and long-term storage solution, offering advanced security systems to ensure your belongings are kept safe. From packing delicate items with precision to managing complex logistics, we handle every aspect of the move with expertise by our skilled services.",
      link: "/storage-facilities-banglore",
    },
    {
      image: bikeCar,
      title: "Bike & Car Shifting Services",
      description: "Relocation within the city or to some distant place gets all the more cumbersome if it happens to involve two and four-wheelers. From packing delicate items to managing highly complicated logistics with great responsibility-we are competent enough to offer skilled services.",
      link: "/bike-car-shifting-banglore",
    },
    {
      image: international,
      title: "Internatonal Shifting Services",
      description: "International relocation can be quite cumbersome considering the hassles related to secure packaging, and safe cross-border transportation.Our team of skilled professionals ensures that your belongings are packed, transported, and delivered safely, no matter the destination.",
      link: "/international-shifting-banglore",
    },
  ];

  return (    
    <div className=" py-8 "
    style={{ backgroundImage: `url(${BGimg})` }} 
     >
      <div className="px-4 lg:px-20">
        <div className="text-center mb-12">
          <p className="text-xl text-red-600 font-bold uppercase">Our Services</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-4">Transportation Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl "
                data-aos="zoom-in" 
            >
              <div className="relative">
                <img
                  className="w-full h-60  object-cover animate-fadeIn"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <div className="p-6  ">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className=" mb-4 text-sm text-justify">{service.description}</p>
                
                <Link
                  to={service.link}
                  className="flex gap-2 justify-center items-center text-sm font-medium p-2 text-white bg-red-600 hover:bg-red-800"
                >
                  Read More <FaArrowRightLong/>
                  
                </Link>
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;








