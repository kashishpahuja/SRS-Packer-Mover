import React,{useEffect} from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Blog from "./pages/BlogPage.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import OfficeShifting from "./pages/OfficeShifting.jsx";
import HomeShifting from "./pages/HomeShifting.jsx";
import StorageFacilities from "./pages/StorageFacilities.jsx";
import BikeCarShifting from "./pages/BikeCarShifting.jsx";
import InternationalShifting from "./pages/InternationalShifting.jsx";
import PackersMovers from "./pages/PackersMovers.jsx";
import Popup from "./components/PopUp.jsx";
import Main from "./components/Main.jsx";
import NotFound from "./pages/NotFound.jsx";
import IconContainer from "./components/IconContainer.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);
  return (
    <Router>
      <Header /> 
       <Navbar />
      <Popup />
      <IconContainer />
      <Routes>
        
        <Route
          path="/"
          element={<Main/>}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/packers-movers-banglore" element={<PackersMovers />} />
        <Route path="/office-shifting-banglore" element={<OfficeShifting />} />
        <Route path="/home-shifting-banglore" element={<HomeShifting />} />
        <Route
          path="/storage-facilities-banglore"
          element={<StorageFacilities />}
        />
        <Route
          path="/bike-car-shifting-banglore"
          element={<BikeCarShifting />}
        />
        <Route
          path="/international-shifting-banglore"
          element={<InternationalShifting />}
        />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
