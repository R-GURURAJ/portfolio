import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import Typewriter from './TypeWriter';
import Resume from '../assets/GURURAJ R.pdf';

const Hero = () => {
    const texts = [
        "Web Developer.",
        "Software Developer",
        "FrontEnd Developer",
        "BackEnd Developer",
    ];
    return (
        <div className="flex justify-center items-center h-screen " >
            <div className="flex justify-center h-full  items-center flex-col">
                <h1 className="text-3xl  font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] flex sm:block flex-col justify-center items-center">
                    <span className='text-4xl  font-mono'>
                        Hi There!
                    </span>
                    <code className='animate-[wiggle_1s_ease-in-out_infinite]'>👋🏻  </code>
                    <span className='text-4xl font-serif'>
                        I'm
                    </span>
                    <span className=" text-blue-400">     GURURAJ</span><br />
                    {`I'm a Passinate `}
                    <Typewriter texts={texts} speed={100} interval={3000} />

                </h1>

                <div className="py-10 flex items-center gap-5">
                    <a
                        href='https://github.com/R-GURURAJ'
                        target='_blank'
                        rel="noopener noreferrer"
                        className="transition-all text-white hover:scale-125 duration-300 animate-[wiggle_1s_ease-in-out_infinite]"
                    >
                        <BsGithub size={30} />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/r-gururaj/'
                        target='_blank'
                        rel="noopener noreferrer"
                        className="transition-all  text-white hover:scale-125 duration-300"
                    >
                        <BsLinkedin size={30} />
                    </a>
                    <a
                        href='https://www.instagram.com/r.guru_rio/'
                        target='_blank'
                        rel="noopener noreferrer"
                        className="transition-all  text-white hover:scale-125 duration-300"
                    >
                        <FaInstagram size={30} />
                    </a>
                    <a
                        href="https://leetcode.com/u/DR_dead/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all text-white hover:scale-125 duration-300"
                    >
                        <SiLeetcode size={30} />
                    </a>


                </div>

                <div className="flex mt-4 gap-3">
                    <a href="#contact" rel="noopener noreferrer" className="bg-gradient-to-r to-pink-700 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
                        <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                            <span>Contact me</span>
                            <RiContactsFill size={16} />
                        </button>
                    </a>

                    <a className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                        href={Resume} download="GURURAJ R.pdf">
                        <span>Get Resume</span>
                        <MdDownload size={16} />
                    </a>
                </div>

            </div>

        </div>

    )
}

export default Hero