import React, { useState } from 'react';
import { Link } from 'react-scroll'; // for smooth scrolling
import { motion } from 'framer-motion'; 
import scansplit from '../assets/scansplit.png';

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const navigation = [
    { id: 1, title: 'Home', url: 'home' },
    { id: 2, title: 'About', url: 'about' },
    { id: 3, title: 'Services', url: 'services' },
    { id: 4, title: 'Contact', url: 'contact' },
  ];

  const handleClick = () => {
    setOpenNavigation(!openNavigation);
  };

  return (
    <div className='fixed top-0 z-50 w-full bg-neutral-800 backdrop-blur-sm border-b border-neutral-600'>
      <div className='flex items-center justify-between px-5 lg:px-10 py-4'>
        <a href="#hero" className="flex items-center space-x-2">
          <img src={scansplit} width={40} height={40} alt="Logo" />
          <h1 className='font-mono text-2xl text-white'>ScanSplit</h1>
        </a>  

        <nav className={`lg:flex ${openNavigation ? "block" : "hidden"} lg:static`}>
          <ul className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link 
                  to={item.url}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-white hover:text-gray-300 text-lg lg:text-sm uppercase tracking-wide transition-all hover:scale-105"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger menu button */}
        <div className="lg:hidden">
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white focus:outline-none"
          >
            {openNavigation ? 'Close' : 'Menu'}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: openNavigation ? "100vh" : 0 }}
        transition={{ duration: 0.5 }}
        className={`lg:hidden bg-neutral-800 overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link 
                to={item.url}
                smooth={true}
                duration={500}
                className="text-white text-lg uppercase tracking-wide cursor-pointer transition-all hover:scale-105"
                onClick={handleClick}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Header;
