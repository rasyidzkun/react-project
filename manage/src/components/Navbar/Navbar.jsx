import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "../../assets";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="container p-6">
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={Logo} alt="Manage Logo" className="cursor-pointer" />
        </div>
        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-darkGrayishBlue">Pricing</li>
          <li className="hover:text-darkGrayishBlue">Product</li>
          <li className="hover:text-darkGrayishBlue">About Us</li>
          <li className="hover:text-darkGrayishBlue">Career</li>
          <li className="hover:text-darkGrayishBlue">Comunity</li>
        </ul>
        {/* Button */}
        <button
          type="button"
          className="hidden bg-brightRed text-white p-3 px-6 rounded-full hover:bg-brightRedLight md:block"
        >
          Get Started
        </button>

        {/* Hamburger */}
        <div className="z-10 md:hidden" onClick={handleClick}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center space-y-8 bg-white"
        }
      >
        <li className="hover:text-darkGrayishBlue">Pricing</li>
        <li className="hover:text-darkGrayishBlue">Product</li>
        <li className="hover:text-darkGrayishBlue">About Us</li>
        <li className="hover:text-darkGrayishBlue">Career</li>
        <li className="hover:text-darkGrayishBlue">Comunity</li>
      </ul>
    </nav>
  );
};

export default Navbar;
