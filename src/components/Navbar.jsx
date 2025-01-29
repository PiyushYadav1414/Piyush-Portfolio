// Import React and some tools to make things work
import React, { useEffect, useState } from "react";
// Import the Link component for moving between pages without reloading
import { Link } from "react-router-dom";

// Import custom styles, a list of navigation links, and some images/icons
import { styles } from "../styles"; // File for CSS styles
import { navLinks } from "../constants"; // List of navigation items
import { logo, menu, close } from "../assets"; // Logo and menu icons

// This is the Navbar component that shows the top menu
const Navbar = () => {
  // Keeps track of which section of the site is currently active
  const [active, setActive] = useState("");
  // Keeps track of whether the mobile menu (hamburger menu) is open or closed
  const [toggle, setToggle] = useState(false);
  // Keeps track of whether the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  // This code runs when the page first loads
  useEffect(() => {
    // This function checks how far down the page the user has scrolled
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Gets how far the user has scrolled from the top
      if (scrollTop > 100) {
        setScrolled(true); // If they scroll more than 100px, set `scrolled` to true
      } else {
        setScrolled(false); // Otherwise, set `scrolled` to false
      }
    };

    // Add the scroll-checking function to the page
    window.addEventListener("scroll", handleScroll);

    // Clean-up: Remove the scroll-checking function when the page is closed
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array means this runs only when the page loads

  return (
    // This is the navbar (top menu) container.Adds padding from the CSS styles file. Changes background color based on `scrolled`
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent" }`}>
      
      {/* This part centers the navbar and sets its maximum width */}
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* The logo and website name link back to the home page */}
        <Link
          to='/'
          className='flex items-center gap-2' // Adds space between the logo and text
          onClick={() => {
            setActive(""); // Clear the active section
            window.scrollTo(0, 0); // Scroll back to the top of the page
          }}
        >
          {/* Logo image */}
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          {/* Website name */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Piyush &nbsp;
            <span className='sm:block hidden'> Yadav</span>
          </p>
        </Link>

        {/* List of links to different sections (visible on larger screens) */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id} // Every link needs a unique key
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)} // Highlight this link as active when clicked
            >
              {/* Each link scrolls to a specific section of the page */}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger menu for small screens */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Icon for opening and closing the menu */}
          <img
            src={toggle ? close : menu} // Show "close" icon if menu is open, otherwise show "menu" icon
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)} // Flip the toggle state when clicked
          />

          {/* Dropdown menu for smaller screens */}
          <div
            className={`${
              !toggle ? "hidden" : "flex" // Show or hide the menu based on `toggle`
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {/* List of links inside the dropdown menu */}
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id} // Every link needs a unique key
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle); // Close the menu after clicking a link
                    setActive(nav.title); // Highlight this link as active
                  }}
                >
                  {/* Each link scrolls to a specific section of the page */}
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Export this component so it can be used in other parts of the app
export default Navbar;
