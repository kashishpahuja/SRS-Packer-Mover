import React,{useEffect} from 'react';
import { FaUser, FaComment } from 'react-icons/fa';
import { BsArrowRightSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import topImg from '../assets/hero/page-header-bg.webp';
import  img1 from '../assets/about/blogImg1.webp'
import  img2 from '../assets/about/blogImg2.webp'
import  img3 from '../assets/about/blogImg3.webp'


function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  const blogData = [
    {
      id: 1,
      image: img1,
      title: 'Relocating Expensive or Fragile Items: What You Need to Know',
      author: 'admin',
      comments: 2,
      delay: '100ms',
      description: 'The moving of valuable or fragile items calls for extra care and awareness. In this article, we guide you through the necessary steps required to protect your valuable items in a move. Find how to ensure your artwork, antiques, electronics, and any other item that could be considered valuable reaches its destination safely. Preparing for moving to how you select materials and even calling in experts.',
    },
    {
      id: 2,
      image: img2,
      title: 'Moving Tips for Families with Children: How to Keep Everyone Happy',
      author: 'admin',
      comments: 5,
      delay: '200ms',
      description: 'Moving with children does not need to be difficult, but at the same time, it can be. In this article, we have provided tips and advice on how to involve and keep your kids occupied during the move. Preparation before the actual changeover to entertaining them on moving day is also given in the hope that stress will be eased and relocating with SRS Packers and Movers would become more fun for the entire family.',
    },
    {
      id: 3,
      image: img3,
      title: 'Avoiding Common Moving Mistakes: A Simple Guide for Success',
      author: 'admin',
      comments: 3,
      delay: '300ms',
      description: 'While moving will always present its challenges, it can go far easier when common mistakes are avoided. This guide reveals the top moving mistakes you are likely to make, from failing to purchase the right insurance to wrong labeling of boxes to underestimating packing time. tips from our experts could better prepare you for any probable issues you might come across and achieve a far more prosperous transfer.',
    },
  ];

  return (
    <div>
      <div className='relative'>
        <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent mix-blend-multiply"></div>
        <img src={topImg} alt="topImage" className='w-full  h-[300px] lg:h-auto bg-gradient-to-br from-black to-transparent mix-blend-multiply'/>
        <div className="absolute inset-0 flex flex-col h-[300px] lg:h-auto justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
          <h1 className="text-white text-3xl font-bold mb-2">Our Blog</h1>
          <p className="text-white text-lg sm:text-xl">
            <span className='text-yellow-600 font-bold'>Home</span> - <span>Our Blog</span>
          </p>
        </div>
      </div>

      <div className="m-8 px-4 lg:px-20 py-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="wow fadeIn animated"
              style={{ animationDelay: blog.delay }}
              data-aos="zoom-in"
            >
              <div className="bg-white shadow-md overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    <Link to={`/blog-details`}>{blog.title}</Link>
                  </h3>
                  <p className="mt-3 text-gray-900 text-sm text-justify">{blog.description}</p>

                  <ul className="border-t mt-2 pt-4 flex justify-between items-center text-red-600">
                    <li className="flex items-center gap-3 text-sm">
                      <FaUser className="mr-1" />
                      <Link to="/blog-details">{blog.author}</Link>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <FaComment className="mr-1" />
                      <Link to="/blog-details">{blog.comments} Comments</Link>
                    </li>
                    <li className='p-1  bg-red-600  text-sm text-white'>
                      <BsArrowRightSquare />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;






