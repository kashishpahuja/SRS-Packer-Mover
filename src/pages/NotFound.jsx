// src/pages/NotFound.jsx
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <p className="mt-4">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="mt-8 text-blue-500 underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
