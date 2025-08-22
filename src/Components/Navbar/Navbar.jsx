import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa6";
import { MdOutlineMailOutline, MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const menuItems = {
    home: { id: "home", label: "Home", href: "#home" },
    about: { id: "about", label: "About", href: "#about" },
    skills: { id: "skills", label: "Skills", href: "#skills" },
    experience: { id: "experience", label: "Experience", href: "#experience" },
    education: { id: "education", label: "Education", href: "#education" },
    projects: { id: "projects", label: "Projects", href: "#projects" },
    contact: { id: "contact", label: "Contact", href: "#contact" },
  };
  // handle menu click
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false); // Close the menu on click
    setIsScrolling(true); // Set scrolling state to true
  };

  // check scroll and change effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[10vw] bg-[#010101] shadow-lg backdrop-blur-md"
      style={{
        boxShadow: isScrolling ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="text-white py-5 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer">
          {/* Circle Logo */}
          <div className="bg-white text-[#8245ec] rounded-full w-10 h-10 flex items-center justify-center text-2xl font-extrabold shadow-lg border-2 border-[#8245ec]">
            GB
          </div>

          {/* Name with mixed colors */}
          {/* <div className="text-2xl font-extrabold tracking-wide">
            <span className="text-white">Geeta</span>{" "}
            <span className="text-[#8245ec]">Bangde</span>
          </div> */}
        </div>

        {/* desktop  menu*/}
        <ul className="hidden md:flex space-x-10 text-gray-300 ">
          {Object.values(menuItems).map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer text-lg font-semibold ${
                activeSection === item.id ? "text-[#f3e3e3]" : "text-[#e2caca]"
              } hover:text-[#8245ec]`}
              onClick={() => handleMenuClick(item.id)}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        {/* social media icon */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/geetabangde"
            className="text-gray-300 hover:text-[#8245ec]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/geeta-bangde-24291819b/"
            className="text-gray-300 hover:text-[#8245ec]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl" size={24} />
          </a>
          <a
            href="https://www.facebook.com/geeta.bangde.5"
            className="text-gray-300 hover:text-[#8245ec]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl" size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGlobe className="text-2xl" size={24} />
          </a>
          <a
            href="https://www.instagram.com/geetabangde/"
            className="text-gray-300 hover:text-[#8245ec]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl" size={24} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-[#8245ec]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineMailOutline className="text-2xl" size={24} />
          </a>
        </div>
        {/* mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-[#8245ec]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <MdMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      {/* mobile item */}
      {isOpen && (
        <div className="absolute top-25 left-1/2 transform -translate-x-1/2 w-4/5 p-6 md:hidden bg-[#1A0B2E] bg-opacity-50 shadow-lg backdrop-blur-md z-50 rounded-lg">
          <ul>
            {Object.values(menuItems).map((item) => (
              <li
                key={item.id}
                className={`px-4 py-3 text-lg font-semibold cursor-pointer border-b-2 border-transparent ${
                  activeSection === item.id
                    ? "text-[#f3e3e3]"
                    : "text-[#e2caca]"
                } hover:text-[#8245ec] hover:border-[#8245ec]`}
                onClick={() => handleMenuClick(item.id)}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          {/* mobile social icon */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/geetabangde"
              className="text-gray-300 hover:text-[#8245ec]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/geeta-bangde-24291819b/"
              className="text-gray-300 hover:text-[#8245ec]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" size={24} />
            </a>
            <a
              href="https://www.facebook.com/geeta.bangde.5"
              className="text-gray-300 hover:text-[#8245ec]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl" size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGlobe className="text-2xl" size={24} />
            </a>
            <a
              href="https://www.instagram.com/geetabangde/"
              className="text-gray-300 hover:text-[#8245ec]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#8245ec]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdOutlineMailOutline className="text-2xl" size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
