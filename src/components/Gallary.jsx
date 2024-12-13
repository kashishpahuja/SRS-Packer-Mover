import React from "react";
import BGimg from '../assets/gallary/GallryBG.webp'
import p1 from '../assets/gallary/project1.webp'
import p2 from '../assets/gallary/project2.webp'
import p3 from '../assets/gallary/project3.webp'
import p4 from '../assets/gallary/project4.webp'
import p5 from '../assets/gallary/project5.webp'
import p6 from '../assets/gallary/project6.webp'




// Array to hold project data
const projectData = [
  {
    image: p1,
    category: "Residential Relocations",
    title: "Seamless Home Moves",
  },
  {
    image: p2,
    category: "Commercial Moves",
    title: "Efficient Office Relocations",
  },
  {
    image: p3,
    category: "International Moving",
    title: "Global Relocation Services",
  },
  {
    image: p4,
    category: "Vehicle Transport",
    title: "Safe and Secure Vehicle Moving",
  },
  {
    image: p5,
    category: "Storage Solutions",
    title: "Flexible Storage Options",
  },
  {
    image: p6,
    category: "Special Handling",
    title: "Expert Care for Fragile Items",
  },
];

const Gallary = () => {
  return (
    <section
  className="bg-secondary-color p-6 lg:py-16 animate-fadeIn "
  style={{ backgroundImage: `url(${BGimg})` }} 

>
      {/* Section Title */}
      <div className="mb-8 md:mb-16">
        <div className=" px-4 lg:px-20">
          <div className="row">
            <div className="col-lg-8 col-xl-6">
              <h5 className="font-bold text-xl  text-red-600">
                Our Projects
              </h5>
              <h2 className="text-slate-800 text-3xl font-bold mb-8 animate-slideUp">
                Explore Our Successful Relocations
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Section Content */}
      <div className="px-4 lg:px-20">
        <div className="flex flex-wrap -mx-4">
          {projectData.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 animate-fadeIn">
              <div className="project-item bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative group">
                  <img
                    className="w-full lg:h-60 h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                  />
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-aos="zoom-in-up">
                    <div className="text-center">
                      <div className="text-white mt-4">
                        <h6 className="text-lg font-semibold">{project.category}</h6>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallary;
