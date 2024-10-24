import React from 'react';
import {logo} from '../assets/logo.png';
import { scansplit } from '../assets/scansplit.png';

const Header = () => {
  return (
    <div   className="fixed top-0 left-0 w-full z-50  border-b border-neutral-600 lg:bg-neutral-800 lg:backdrop-blur-sm" > header  
    <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
      
      <a className='block w-[12rem] xl:mr-8" href="#man'>
        <img src= {scansplit} width={190} height={40}> alt="scansplit"</img>
      </a>
      </div></div>
     
    
      
  )
}

export default Header

