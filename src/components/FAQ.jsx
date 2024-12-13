import React, {useState} from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FaCheck} from 'react-icons/fa';


function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);
    const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };
  return (
    <div>
     <div className="flex flex-wrap my-8 bg-white shadow-lg p-4 ">
     {/* Heading Section */}
     <div className="w-full text-start mb-4" >
       <h2 className="text-xl font-semibold mb-2" >Our Goals</h2>
     </div>
   
     {/* Goals Section */}
     <div className="w-full md:w-1/2">
       <ul className="list-none space-y-2">
         <li className="flex items-center">
           <FaCheck className="text-red-700 mr-4" />
           <p className=" text-md font-medium">Leverage Technology Integration </p>
         </li>
         <li className="flex items-center">
           <FaCheck className="text-red-700 mr-4" />
           <p className=" text-md font-medium">Expand Service Offerings</p>
         </li>
         <li className="flex items-center">
           <FaCheck className="text-red-700 mr-4" />
           <p className=" text-md font-medium">Maintain Safety and Efficiency</p>
         </li>
       </ul>
     </div>
   
     {/* Additional Goals Section */}
     <div className="w-full md:w-1/2 pr-4">
       <ul className="list-none space-y-2">
         <li className="flex items-center">
           <FaCheck className="text-red-700 mr-4" />
           <p className=" text-md font-medium">Improve Operational Efficiency</p>
         </li>
         <li className="flex items-center">
           <FaCheck className="text-red-700 mr-4" />
           <p className=" text-md font-medium">Focus on Sustainability</p>
         </li>
         <li className="flex items-center">
           <FaCheck className="text-red-700 mr-4" />
           <p className=" text-md font-medium">Provide Exceptional Customer Service</p>
         </li>
       </ul>
     </div>
   </div>


    <div className="space-y-4" >
    {/* FAQ Item 1 */}
    <div className="border-b border-gray-200 p-6 my-8 bg-white shadow-lg ">
      <div className="flex justify-between items-center ">
        <h4 className="text-lg font-semibold cursor-pointer" onClick={() => toggleFAQ(0)}>
        How do you ensure the safety of goods during transit?
        </h4>
        {/* Toggle Icon */}
        <div onClick={() => toggleFAQ(0)} className="cursor-pointer text-lg text-white border border-red-700 bg-red-700 p-2 rounded-xl">
          {activeIndex === 0 ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      
      {/* Conditionally render the paragraph */}
      {activeIndex === 0 && (
        <p className=" mt-2 text-md">
          <hr className='my-2' />
          We utilize premium packing materials and have skilled professionals who treat your belongings with the highest level of care. Moreover, our vehicles are designed to securely transport items to their destination.
        </p>
      )}
    </div>

    {/* FAQ Item 2 */}
    <div className="border-b border-gray-200 p-6 my-8 bg-white shadow-lg ">
      <div className="flex justify-between items-center ">
        <h4 className="text-lg font-semibold cursor-pointer " onClick={() => toggleFAQ(1)}>
        What if my items are damaged during the move?
        </h4>
        {/* Toggle Icon */}
        <div onClick={() => toggleFAQ(1)} className="cursor-pointer text-white border border-red-700 bg-red-700 p-2 rounded-xl">
          {activeIndex === 1 ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      
      {/* Conditionally render the paragraph */}
      {activeIndex === 1 && (
        <p className=" text-md  mt-2">
          <hr className='my-2' />
          While we take every precaution to ensure your belongings are safely transported, in the event of damage, our insurance policies will cover the cost. Please report any issues as soon as possible for a timely resolution.
        </p>
      )}
    </div>

    {/* FAQ Item 3 */}
    <div className="border-b border-gray-200 p-6 my-8 bg-white shadow-lg ">
      <div className="flex justify-between items-center ">
        <h4 className="text-lg font-semibold cursor-pointer" onClick={() => toggleFAQ(2)}>
        Do you offer vehicle transportation services?
        </h4>
        {/* Toggle Icon */}
        <div onClick={() => toggleFAQ(2)} className="cursor-pointer text-white border border-red-700 bg-red-700 p-2 rounded-xl">
          {activeIndex === 2 ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      
      {/* Conditionally render the paragraph */}
      {activeIndex === 2 && (
        <p className=" mt-2 text-md">
          <hr className='my-2' />
          Yes, we can transport vehicles, including cars and motorcycles, as part of our moving services. We ensure safe and secure delivery to your new location.
        </p>
      )}
    </div>

    {/* FAQ Item 4 */}
    <div className="border-b border-gray-200 p-6 my-8 bg-white shadow-lg ">
      <div className="flex justify-between items-center ">
        <h4 className="text-lg font-semibold cursor-pointer" onClick={() => toggleFAQ(3)}>
        Can I track my shipment during transit?
        </h4>
        {/* Toggle Icon */}
        <div onClick={() => toggleFAQ(3)} className="cursor-pointer text-white border border-red-700 bg-red-700 p-2 rounded-xl">
          {activeIndex === 3 ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      {/* Conditionally render the paragraph */}
      {activeIndex === 3 && (
        <p className="  text-md mt-2">
          <hr className='my-2'/>
          Yes, we provide tracking options for your goods, allowing you to monitor the progress of your move and know the expected delivery time.
        </p>
      )}
    </div>
  </div>
  </div>
  )
}

export default FAQ
