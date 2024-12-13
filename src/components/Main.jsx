import React from "react";
import { useEffect } from "react";

import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Counter from "./Counter.jsx";
import Gallary from "./Gallary.jsx";
import Quote from "./Quote.jsx";

import Testimonial from "./Testimonial.jsx";
import News from "./News.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
function Main() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallary />
      <Counter />
      <Testimonial />
      <News />
      <Quote />
    </>
  );
}

export default Main;
