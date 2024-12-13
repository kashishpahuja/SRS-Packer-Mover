import React from 'react';
import { FaUser, FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../assets/news/news1.webp';
import img2 from '../assets/news/news2.webp';
import img3 from '../assets/news/news3.webp';

const News = () => {
  const blogs = [
    {
      id: 1,
      imgSrc: img1,
      title: 'SRS Packers & Movers Expands Service Areas',
      description: 'We are pleased to announce that more cities and territories have been included in our service network. This extension of service will give us the opportunity to serve more customers with superior moving services, making your move even smoother.',
      comments: 0,
    },
    {
      id: 2,
      imgSrc: img2,
      title: 'Introducing Eco-Friendly Packing Materials',
      description: 'We are proud to now offer a suite of new packing materials as part of our ongoing commitment to sustainability. These products will make your move safe and green by cushioning your possessions while minimizing our impact on the environment.',
      comments: 0,
    },
    {
      id: 3,
      imgSrc: img3,
      title: 'SRS Packers & Movers Enhance Cargo Tracking System',
      description: 'Our upgraded cargo tracking system with real-time updates on the status of your shipment. With this new feature, you can easily track your belongings and stay informed throughout the moving process, ensuring peace of mind and reliability.',
      comments: 0,
    },
  ];

  return (
    <div className="px-4 lg:px-20 py-14">
      <div className="text-center mb-12">
        <h4 className="text-red-600 text-xl font-bold mb-2">News & Updates</h4>
        <h2 className="text-3xl font-bold animate-slideUp">Recent Developments at SRS Packers & Movers</h2>
      </div>
      <div className="flex flex-wrap -mx-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full lg:w-1/3 px-4 mb-8 transition-transform duration-300 hover:scale-105" >
            <div className="bg-white shadow-md rounded-lg overflow-hidden" data-aos="zoom-in-up">
              <img
                src={blog.imgSrc}
                alt={blog.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  <Link to="/blog-details">{blog.title}</Link>
                </h3>
                <p className="mb-4 text-md">{blog.description}</p>
                <div className="flex items-center justify-between text-red-500">
                  <a className="flex items-center text-sm" href="#">
                    <FaUser className="mr-1 hidden lg:block" /> admin
                  </a>
                  <a className="flex items-center text-sm" href="#">
                    <FaComment className="mr-1  hidden lg:block" /> {blog.comments} Comments
                  </a>
                  <Link
                    to="/blog-details" className='hover:underline text-sm'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
