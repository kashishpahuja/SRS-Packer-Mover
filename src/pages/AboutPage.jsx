import React,{useEffect} from "react";
import {
  FaMoneyBillAlt,
  FaTruck,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import About from "../components/About.jsx";
import img1 from '../assets/about/right.webp'
import img2 from '../assets/about/left.webp'
import topImg from '../assets/hero/page-header-bg.webp'
import ImageSection from "../components/ImageSection.jsx";

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent mix-blend-multiply"></div>

        <img
          src={topImg}
          alt="topImage"
          className="w-full h-[300px] lg:h-auto bg-gradient-to-br from-black to-transparent mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8  left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
          <h1 className="text-white text-3xl font-bold mb-2">About Us</h1>
          <p className="text-white text-lg sm:text-xl">
            <span className="text-yellow-600 font-bold">Home</span> -{" "}
            <span>About Us</span>
          </p>
        </div>
      </div>
      
      <About />

      <ImageSection/>

      <div className="flex flex-wrap justify-evenly items-center lg:justify-end pb-0 lg:pb-12 px-4 lg:px-20 lg:gap-6  ">
        <div className="w-full lg:w-1/2 h-auto lg:h-[500px] flex lg:-ml-64 gap-2" data-aos="fade-right" >
          <img
            src={img1}
            alt="left"
            className="w-1/2 h-auto mb-6 lg:mb-0 object-cover "
          />
          <img
            src={img2}
            alt="right"
            className="w-1/2 h-auto mb-6 lg:mb-0 object-cover "
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6 " data-aos="fade-right">
          <h4 className="text-red-800 text-xl font-semibold ">
            WHY CHOOSE SRS Packers & Movers
          </h4>
          <h2 className="text-3xl font-bold text-gray-800 ">
            What Makes Us Different From Others
          </h2>
          <p className="text-black text-sm text-justify ">
            Let our knowledgeable staff help you make a smooth and safe
            relocation. We offer specialized moving solutions, state-of-the-art
            tracking, and environmentally responsible methods to ensure your
            goods are in good hands. For a dependable and customer-focused
            moving experience, rely on SRS Packers & Movers.
          </p>
          <ul className="lg:flex lg:-ml-36 space-y-4 lg:space-y-0 space-x-2" >
            <li className="space-y-6 p-8 border-2 shadow-lg bg-white" data-aos="flip-left">
              <FaMoneyBillAlt size={52} className="text-red-800" />
              <h3 className="text-xl font-semibold text-gray-800">
                Cost Optimisation
              </h3>
                <FaArrowRight className="ml-2 text-gray-500" size={24} />
              
            </li>
            <li className="space-y-6 p-8 border-2 shadow-lg bg-white" data-aos="flip-left">
              <FaTruck size={52} className="text-red-800" />
              <h3 className="text-xl font-semibold text-gray-800">
                Reduced Transit Time
              </h3>
                <FaArrowRight className="ml-2 text-gray-500" size={24} />
              
            </li>
            <li className="space-y-6 p-8 border-2 shadow-lg bg-white" data-aos="flip-left" >
              <FaShieldAlt size={52} className="text-red-800" />
              <h3 className="text-xl font-semibold text-gray-800">
                Delivery On Your Time
              </h3>
                <FaArrowRight className="ml-2 text-gray-500" size={24} />
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
