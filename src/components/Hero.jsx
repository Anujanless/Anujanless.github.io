import React from 'react';
import HeroImage from '../assets/hero.png';
import Typewriter from 'typewriter-effect';

const handleresumeButtonClick = () => {
  window.open(
    "https://www.canva.com/design/DAGZBfjnVQA/m5QscHSAagOqz_NvsvlDPQ/view?utm_content=DAGZBfjnVQA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h520aab3962",
    "_blank"
  );
};

const Hero = () => {
  return (
    <div className='text-white text-center py-16' id='home'>
      <img
        src={HeroImage}
        alt=""
        className='mx-auto mb-8 w-48 h-78 rounded-full object-cover transform 
        transition-transform duration-200 hover:scale-110'
      />
      <h1 className='text-4xl font-bold'>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            strings: [
              `I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Anujan Mohanakumar</span>, Aspiring Engineer and Entrepreneur`,
            ],
          }}
        />
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I love to help my community and am currently looking for internships!
      </p>
      <div className='mt-8 space-x-4'>
        <button
          onClick={handleresumeButtonClick}
          className='bg-gradient-to-r from-pink-400 to-yellow-400 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
