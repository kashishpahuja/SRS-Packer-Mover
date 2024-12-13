import React, { useState, useRef, useEffect } from "react";
import { FaGlobe, FaUsers, FaStar, FaTruck } from "react-icons/fa";

const counterData = [
  {
    icon: <FaGlobe />,
    count: 45,
    label: "Allover India Branches",
    suffix: "+",
  },
  {
    icon: <FaUsers />,
    count: 20.24,
    label: "Total Clients in World",
    suffix: "+",
  },
  {
    icon: <FaStar />,
    count: 20.56,
    label: "Satisfied Customers",
    suffix: "k",
  },
  {
    icon: <FaTruck />,
    count: 99,
    label: "Successful Delivery",
    suffix: "%",
  },
];

const Counter = () => {
  const [counters, setCounters] = useState(
    counterData.map((item) => ({ ...item, currentCount: 0 }))
  );
  const counterRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (counterRef.current) {
        const rect = counterRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          if (!isAnimated) {
            setIsAnimated(true);
            counters.forEach((item, index) => {
              const increment = item.count / 400; // Adjust the speed of increment
              const interval = setInterval(() => {
                setCounters((prevCounters) => {
                  const newCounters = [...prevCounters];
                  if (newCounters[index].currentCount < item.count) {
                    newCounters[index].currentCount = Math.min(
                      newCounters[index].currentCount + increment,
                      item.count
                    );
                  } else {
                    clearInterval(interval);
                  }
                  return newCounters;
                });
              }, 40); // Adjust the speed of animation
            });
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case it's already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counters, isAnimated]);

  return (
    <div className="px-4 lg:px-20 py-16">
      <div className="flex flex-wrap justify-center items-center">
        <ul className="flex flex-col lg:flex-row flex-wrap justify-center gap-8 lg:gap-32" ref={counterRef}>
          {counters.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center animate-fadeIn"
            >
              <div
                className="mb-4 text-3xl text-black p-6 border-2 border-dashed border-red-700 rounded-full shadow-md"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                {item.icon}
              </div>
              <div className="flex items-baseline">
                <h3 className="text-xl lg:text-xl  font-bold text-black">
                  {item.currentCount.toFixed(item.count % 1 !== 0 ? 2 : 0)}
                </h3>
                <span className="text-xl lg:text-xl font-semibold text-black ml-1">
                  {item.suffix}
                </span>
              </div>
              <p className="mt-2 text-black text-lg text-center">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Counter;
