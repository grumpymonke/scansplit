import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path as per your project structure

const Header = () => {
  return (
    <div className='fixed top-0 z-50 bg-neutral-800 backdrop-blur-sm border-b border-neutral-600 lg:bg-neutral-800 lg:backdrop-blur-sm'>
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <a className="black w-[12rem] xl:mr-8" href="#hero">
          <img src={logo} width={180} height={40} alt="Logo" />
        </a>
      </div>
    </div>
  );
};

export default Header;
