import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Logo from "../assets/black-logo.webp"; // adjust the path

const Navbar = () => {
  const sideCardRef = useRef(null);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Set body background and text color
    document.body.style.backgroundColor = "#FCF7F3";
    document.body.style.color = "#000000";

    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 50) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSideCard = () => {
    setIsCardOpen(!isCardOpen);
    if (!isCardOpen) {
      gsap.to(sideCardRef.current, { x: 0, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(sideCardRef.current, { x: "100%", duration: 0.5, ease: "power2.in" });
    }
  };

  return (
    <div className="relative font-sans">
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full  px-4 text-black z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Navbar Start - Logo */}
        <div className="navbar flex justify-between items-center py-2">
          <div className="navbar-start">
            <img src={Logo} alt="Logo" className="h-6 w-auto" />
          </div>

          {/* Navbar Center - Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">
              <li className="relative group">
                <a className="cursor-pointer">Home</a>
                <ul className="absolute top-full left-0 bg-black text-white mt-1 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 w-40 z-20">
                  <li><a className="block px-4 py-2 hover:bg-gray-800">Submenu 1</a></li>
                  <li><a className="block px-4 py-2 hover:bg-gray-800">Submenu 2</a></li>
                </ul>
              </li>
              <li><a href="#" className="cursor-pointer">About Us</a></li>
              <li className="relative group">
                <a className="cursor-pointer">Service</a>
                <ul className="absolute top-full left-0 bg-black text-white mt-1 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 w-40 z-20">
                  <li><a className="block px-4 py-2 hover:bg-gray-800">Web Development</a></li>
                  <li><a className="block px-4 py-2 hover:bg-gray-800">App Development</a></li>
                </ul>
              </li>
              <li className="relative group">
                <a className="cursor-pointer">Pages</a>
                <ul className="absolute top-full left-0 bg-black text-white mt-1 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 w-40 z-20">
                  <li><a className="block px-4 py-2 hover:bg-gray-800">Pricing</a></li>
                  <li><a className="block px-4 py-2 hover:bg-gray-800">FAQ</a></li>
                </ul>
              </li>
              <li className="relative group">
                <a className="cursor-pointer">Blog</a>
                <ul className="absolute top-full left-0 bg-black text-white mt-1 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 w-40 z-20">
                  <li><a className="block px-4 py-2 hover:bg-gray-800">Blog List</a></li>
                  <li><a className="block px-4 py-2 hover:bg-gray-800">Blog Single</a></li>
                </ul>
              </li>
              <li><a href="#" className="cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Navbar End - Buttons */}
          <div className="navbar-end flex items-center gap-2">
            <button className="px-6 py-3 bg-black rounded-3xl text-white font-semibold hover:bg-white hover:text-black border border-black transition-colors duration-300">
              Let's Talk
            </button>
            <button className="btn btn-ghost" onClick={toggleSideCard}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        ref={sideCardRef}
        className="fixed top-0 right-0 w-96 h-full bg-white shadow-xl z-50 flex flex-col"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <button onClick={toggleSideCard} className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 flex-1 flex flex-col gap-8 overflow-y-auto">
          <h1 className="text-3xl font-bold text-black">Contact Us</h1>

          <div className="flex items-center gap-4 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 12.414M16 8a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
            <span>3891 Ranchview Dr. Richardson</span>
          </div>

          <div className="flex items-center gap-4 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>hello@arroxagency.com</span>
          </div>

          <div className="flex items-center gap-4 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l3 7-3 7H3l3-7-3-7zm5 0h2l3 7-3 7H8l3-7-3-7zm5 0h2l3 7-3 7h-2l3-7-3-7z" />
            </svg>
            <span>(505) 555-0125</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
