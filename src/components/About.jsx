import React from 'react';
import AboutImage from '../assets/Coolshot.jpg';

const Aboutme = () => {
    return (
        <div className='text-white py-20' id='Aboutme'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                {/* About Me Section */}
                <div className="mb-8 flex justify-end">
                    <h2 
                        className='text-4xl font-bold mb-8 md:mb-12' 
                        style={{ marginRight: '28%', marginBottom: '-2%' }} // Adjust the percentage as needed
                    >
                        About Me
                    </h2>
                </div>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    {/* Image Section */}
                    <img 
                        src={AboutImage} 
                        alt="About Me" 
                        className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
                    />
                    {/* Text Content */}
                    <div className="text-lg">
                        <p className="text-lg mb-8">
                            I am an enthusiastic, responsible, and hard-working person. 
                            I am able to work well in both a team environment and independently. My goal is to apply my knowledge, skills, and creativity to innovate and make a positive impact on the world through AI and finance. 
                            During my free time, I like to play the drums and do swimming.                         </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
