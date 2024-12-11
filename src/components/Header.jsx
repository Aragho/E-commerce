import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black">
      <div className="bg-black text-white text-center py-2">
        <span className="mr-2">Sign up and get 20% off your first order.</span>
        <Link to="/signup" className="underline font-semibold hover:text-blue-600">
          Sign Up Now
        </Link>
      </div>

      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <h2 className="text-2xl font-bold text-black">SHOP.CO</h2>

        <div className="md:hidden">
          {!isMenuOpen && (
            <button onClick={toggleMenu} className="text-black">
              <GiHamburgerMenu size={30} />
            </button>
          )}
        </div>

        {isMenuOpen && (
          <div className=" top-0 left-0 w-full h-full bg-white p-4 space-y-4 md:hidden text-center z-10">
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-black">
                <IoMdClose size={30} />
              </button>
            </div>

            <ul className="space-y-4">
              <li>
                <Link to="/shop" className="text-black hover:text-blue-500" onClick={toggleMenu}>
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/on-sale" className="text-black hover:text-blue-500" onClick={toggleMenu}>
                  On Sale
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-black hover:text-blue-500" onClick={toggleMenu}>
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-black hover:text-blue-500" onClick={toggleMenu}>
                  Brands
                </Link>
              </li>
            </ul>

            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search For Products"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
            </div>
          </div>
        )}

        <nav className="hidden md:flex space-x-6 text-black font-medium">
          <ul className="flex space-x-6">
            <li className="hover:text-blue-500">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/on-sale">On Sale</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/new-arrivals">New Arrivals</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/brands">Brands</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search For Products"
              className="border border-gray-300 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
          </div>

          <div className="flex space-x-4">
            <Link to="/cart" className="text-black hover:text-blue-500" aria-label="Shopping Cart">
              <CiShoppingCart size={24} />
            </Link>
            <Link to="/contact" className="text-black hover:text-blue-500" aria-label="Contact Us">
              <IoMdContact size={24} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
