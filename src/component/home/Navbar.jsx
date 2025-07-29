
// Navbar.jsx
/* 
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => setNavOpen(!navOpen);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      <div className="group bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo 
          <div className="flex items-center">
            <img
              src="/logo.png" // replace with actual logo path
              alt="logo"
              className="h-8 w-auto mr-2"
            />
            <span className="text-xl font-bold group-hover:text-black text-white">
              propvr
            </span>
          </div>

          {/* Desktop Menu 
          <div className="hidden md:flex space-x-6 font-medium">
            <a href="#" className="hover:text-blue-500 group-hover:text-black text-white">
              Home
            </a>
            <a href="#" className="hover:text-blue-500 group-hover:text-black text-white">
              Products
            </a>
            <a href="#" className="hover:text-blue-500 group-hover:text-black text-white">
              Experience Centres
            </a>
            <a href="#" className="hover:text-blue-500 group-hover:text-black text-white">
              Industry Case Studies
            </a>
            <a href="#" className="hover:text-blue-500 group-hover:text-black text-white">
              Blog
            </a>
          </div>

          

          {/* Mobile menu button 
          <div className="md:hidden text-white group-hover:text-black">
            <button onClick={toggleMenu}>
              {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu 
        {navOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2 font-medium text-black">
            <a href="#" className="block">Home</a>
            <a href="#" className="block">Products</a>
            <a href="#" className="block">Experience Centres</a>
            <a href="#" className="block">Industry Case Studies</a>
            <a href="#" className="block">Blog</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
 */






// Navbar.jsx
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleMenu = () => setNavOpen(!navOpen);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      <div className="group bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-8 w-auto mr-2" />
            <span className="text-xl font-bold group-hover:text-black text-white">
              propvr
            </span>
          </div>

          <div className="hidden md:flex space-x-6 font-medium">
            {['Home', 'Products', 'Experience Centres', 'Industry Case Studies', 'Blog'].map((link, i) => (
              <a key={i} href="#" className="hover:text-blue-500 group-hover:text-black text-white">
                {link}
              </a>
            ))}
          </div>

          <div className="md:hidden text-white group-hover:text-black">
            <button onClick={toggleMenu}>{navOpen ? <FiX size={24} /> : <FiMenu size={24} />}</button>
          </div>
        </div>

        {navOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2 font-medium text-black">
            {['Home', 'Products', 'Experience Centres', 'Industry Case Studies', 'Blog'].map((link, i) => (
              <a key={i} href="#" className="block">{link}</a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

