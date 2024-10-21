import React from 'react'; // Import React
import ButtonGradient from "./assets/svg/ButtonGradient"; // Assuming correct path to ButtonGradient
import './App.css'; // Assuming App.css exists for styling
import Header from './components/Header'; // Importing Header component

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
      </div>
      <ButtonGradient /> 
    </>
  );
};

export default App;
