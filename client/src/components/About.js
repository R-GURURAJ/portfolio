import React from 'react';
import profile from '../assets/profile.jpg'

const About = () => {
    return (
        <div id='About' className="flex flex-col items-center  justify-center min-h-screen text-white p-4" >
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                            About Me
                        </span>
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    </div>
                </div>
            <div className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
                <div className="md:w-2/3">
                    <h2 className="text-teal-400 text-2xl font-semibold mb-4">WHO I AM?</h2>
                    <p className="text-lg mb-4 text-justify">
                        My name is GURURAJ. A computer science graduate specializing in web development, with a passion for
                        continuous learning and growth. Seeking a challenging role where I can apply my skills in web
                        development to contribute to innovative projects and the success of a dynamic, 
                        collaborative team. I am available for any kind of job opportunity that suits my skills
                        and interests.
                    </p>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                    <img
                        src={profile}
                        alt="Profile"
                        className="rounded-lg shadow-lg w-48 h-48 object-cover"
                    />
                </div>
            </div>
           
        </div>
    );
};

export default About;

