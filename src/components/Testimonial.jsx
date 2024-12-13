import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from "../assets/testimonials/p1.webp";
import p2 from "../assets/testimonials/p2.webp";
import p3 from "../assets/testimonials/p3.webp";
import BGimg from "../assets/hero/BGtestimonial.webp";
import quote from "../assets/hero/quote.webp";

const Testimonials = () => {
  const testimonials = [
    {
      text: "SRS Packers & Movers made my relocation smooth and stress-free. Their team was professional, punctual, and handled all my belongings with care. I appreciate their commitment to customer satisfaction.",
      name: "Anisha Patil",
      title: "Small Business Owner",
      image: p1,
    },
    {
      text: "The service provided by SRS Packers & Movers was exceptional. From packing to unpacking, everything was handled efficiently in a planned manner and with great attention to detail.",
      name: "Shivam Thakur",
      title: "Marketing Executive",
      image: p2,
    },
    {
      text: "I had a great experience with SRS Packers & Movers. Their team ensured that my belongings were safely transported. I appreciate their commitment to customer satisfaction.",
      name: "Kiran Dhiman",
      title: "Teacher",
      image: p3,
    },
    {
      text: "SRS Packers & Movers provided excellent service. During my recent move, The staff was friendly and the entire process was handled smoothly. I would definitely reccomend them.",
      name: "Disha Khurana",
      title: "IT Specialist",
      image: p1,
    },
    {
      text: "Moving with SRS Packers & Movers was a breeze. They were efficient and took great care with my items. Their professionalism and dedication to service really stood out.",
      name: "Rohit",
      title: "Entrepreneur",
      image: p2,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          speed: 800,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: true,
          speed: 800,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div
      className="relative py-16  w-full h-[700px] lg:h-auto lg:w-auto overflow-hidden px-4 lg:px-20"
      style={{ backgroundImage: `url(${BGimg})` }}
    >
      
        <div className=" space-y-6 lg:space-y-4 pb-10 text-center">
          <h4 className="font-bold text-xl text-red-600 ">
            Our Client Awesome Reviews
          </h4>
          <h2 className="text-3xl font-bold text-white">
            Why Customers Love to Work with Us
          </h2>
        </div>
      
      <Slider
        {...settings}
        className="slick-slider overflow-hidden  text-center"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative max-w-[420px] h-[290px] py-4 px-6 lg:px-8 lg:py-4 bg-[#272626] rounded-lg text-justify"
            data-aos="zoom-out"
          >
            <img
              src={quote}
              className="absolute text-red-600 bottom-16 h-7 lg:h-6 left-[83%]"
              alt="dblquotes"
            />
            <div className="my-4 text-lg text-justify text-white">
              <p>{testimonial.text}</p>
            </div>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 object-cover mt-3 rounded-full mr-3"
              />
              <div className="mt-4">
                <h3 className="font-medium text-lg text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-200">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
