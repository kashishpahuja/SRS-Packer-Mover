import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { GrInstagram, GrTwitter, GrGooglePlus } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";

function Header() {
  return (
    <div className="hidden lg:flex justify-between px-20 py-2 items-center bg-gray-900 text-white ">
      <ul className="flex space-x-8 items-center">
        <li className="flex space-x-2">
          <CiLocationOn className="text-white text-sm" />

          <p className="text-sm leading-relaxed">Electronic City Phase 1 Bengaluru Karnataka</p>
        </li>
        <li className="flex space-x-2 items-center">
          <div>
            <CiMail className="text-white text-sm" />
          </div>
          <div>
  <p className="text-sm leading-relaxed">
    <a href="mailto:info@srscargopackers.in">
    info@srscargopackers.in
    </a>
  </p>
</div>

        </li>
      </ul>
      <div className="flex justify-end ">
        <div className="flex  space-x-4">
          <h4 className="text-sm">Follow us:</h4>
          <div className="flex gap-4 items-center">
            <a href="#" className="text-white text-sm">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white text-sm">
              <GrInstagram />
            </a>
            <a href="#" className="text-white text-sm">
              <GrTwitter />
            </a>
            <a href="#" className="text-white text-sm">
              <GrGooglePlus />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
