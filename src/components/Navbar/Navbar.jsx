import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../Utils";
import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleMenu = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center justify-around  text-customPalette-lightPurple  font-bold  py-4  rounded   z-10  md:flex-1 ">
      <img
        className="object-contain "
        src="/images/logo1.png"
        alt="logo"
      ></img>

      {/* Hamberger icon for small screen */}

      <img
        className="block md:hidden cursor-pointer h-8 w-8"
        src={getImageUrl("nav/menuIcon.png")}
        alt="menu-button"
        onClick={toggleMenu }
      />
      {/* Links Container for Larger Screens */}
      <div className={`hidden md:flex md:items-center md:space-x-8`}>
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/dashboard" className="">
          Dashboard
        </Link>
        <Link to="/projects" className="">
          Projects
        </Link>
        <Link to="/contact" className="">
          Contact
        </Link>
        <Link to="/profile" className="">
        Testimonial
        </Link>
      </div>

      {/* Mobile Menu (Optional: for when the button is clicked) */}
      {isOpen && (
        <div className="absolute top-20 right-0 w-1/2 rounded-md shadow-lg bg-gradient-to-t from-indigo-800  to-indigo-500 text-customPalette-lightPurple flex flex-col items-center space-y-4 p-4 md:hidden">
          <Link to="/" className="" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/dashboard" className="" onClick={toggleMenu}>
            Dashboard
          </Link>
          <Link to="/projects" className="" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="/contact" className="" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/profile" className="" onClick={toggleMenu}>
           Testimonial
          </Link>
        </div>
      )}
    </div>
  );
};
export default Navbar;
