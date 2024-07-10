
import React from 'react';
import { motion } from 'framer-motion';
// import ProjectsBg from '../assets/Float.svg'
import VoiceAssistance from '../assets/Voice.jpg'
import Squarespace from '../assets/SquareSpace.png'
const projects = [
    {
        title: 'Ecommerce Product Comparison',
        description: 'Created a comprehensive tool to compare products from major e-commerce platforms like Flipkart and Amazon.',
        imageUrl: 'https://i.ibb.co/wMqQ37t/ecom.png',
    },
    {
        title: 'Square Workspace',
        description: 'Created a integrated platform focusing on real-time chat, seamless file sharing, and efficient tracking of internal marks and attendance',
        imageUrl: `${Squarespace}`,
    },
    {
        title: 'Personal Voice Assistant',
        description: 'Implemented advanced voice recognition and text-to-speech functionalities, integrated Gemini’s API to enhance system optimization.',
        // imageUrl: 'https://www.freepik.com/free-ai-image/rendering-smart-home-device_94945254.htm#query=ai%20voice%20assistant&position=36&from_view=keyword&track=ais_user&uuid=1d55b445-484f-4e94-97e4-cf08e0178617',
        // imageUrl: `${ VoiceAssistance }`,
        imageUrl: `${ VoiceAssistance }`,
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        // <section id="projects" className="py-20 bg-gray-900 h-screen" style={{ backgroundImage: `url(${ProjectsBg})` }}>
        <section id="projects" className="py-20  h-screen overflow-y-scroll scrollbar-hide">
            <div className="container mx-auto">
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                            Projects
                        </span>
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300"
                        >
                            <div className="card bg-base-200 shadow-xl">
                                <figure className='rounded-md h-44'><img src={project.imageUrl} alt="Project 2" /></figure>
                                <div className="card-body">
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className='text-xs text-center'>{project.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Projects;
