import React, { useState } from 'react';
import scansplit from '../assets/scansplit.png'; 
import Button from './Button';  

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  // Navigation links
  const navigation = [
    { id: 1, title: 'A', url: '#home' },
    { id: 2, title: 'B', url: '#about' },
    { id: 3, title: 'C', url: '#services' },
    { id: 4, title: 'D', url: '#contact' },
  ];


  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  return (
    <header className='fixed top-0 z-50 w-full bg-black backdrop-blur-sm border-b border-white'>
      <div className='flex items-center justify-between px-5 lg:px-10 py-4'>
        
      
        <a href="#hero" className="flex items-center space-x-2">
          <img src={scansplit} width={40} height={40} alt="Logo" />
          <h1 className='font-mono text-2xl text-white'>ScanSplit</h1>
        </a>

        
        <nav className={`lg:flex ${openNavigation ? "block" : "hidden"} lg:static`}>
          <ul className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="text-white hover:text-purple-500 text-lg lg:text-sm uppercase tracking-wide transition-colors"
                  onClick={() => setOpenNavigation(false)} 
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      
        <div className="hidden lg:flex">
          <Button href="#login" className="text-white bg-transparent px-5 py-2 rounded">
            Sign in
          </Button>
        </div>

        
        <div className="lg:hidden">
          <button
            onClick={toggleNavigation}
            className="text-white focus:outline-none"
          >
            {openNavigation ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      
      <div className={`lg:hidden bg-neutral-800 ${openNavigation ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 py-6">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                className="text-white text-lg uppercase tracking-wide cursor-pointer transition-all hover:text-blue-500"
                onClick={() => setOpenNavigation(false)} 
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        
        <div className="flex justify-center py-4">
          <Button href="#login" className="text-white bg-transparent px-5 py-2 rounded">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
