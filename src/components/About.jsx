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
                            I am a passionate and driven individual with a keen interest in finance and engerneering. As someone who thrives on learning and growth, I have been involved in various leadership roles, such as serving as co-president of a youth committee, vice president of a business and executive of various clubs in my school. My hands-on experience as part of the mechanical team in an FRC robotics team has honed my technical and problem-solving skills. Currently, I am actively seeking opportunities to expand my expertise, connect with like-minded professionals and explore different opportunities in the industry. My goal is to apply knowledge, skills, and creativity to innovate and make a positive impact on the world through AI and finance. 
                            
                            Outside of my professional pursuits, I am a person of diverse interests and passions. During my free time, I like to play the drums and do swimming. I have performed at my schools largest event Cafe Night and have attended various programs like SHAD and Waterloo Catalyst.                </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
