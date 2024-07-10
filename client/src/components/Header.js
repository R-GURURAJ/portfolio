import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import ProjectsBg from '../assets/Float.svg';
import ContactMe from './ContactMe';


const NavList = ['Home', 'About', 'Projects', 'Contact'];

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-base-600 " style={{ backgroundImage: `url(${ProjectsBg})` }}>
            <div className="navbar mx-auto flex justify-center items-center fixed top-0 left-0 w-full z-10 bg-opacity-25 bg-black">
                <nav className="gap-5">
                    {NavList.map((item, index) => (
                        <a
                            key={index}
                            href={'#' + item.toLowerCase()}
                            className="my-2 hover:border-2 rounded-xl p-2 min-h-12 cursor-pointer flex flex-wrap items-center justify-center"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>

            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="projects" >
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="contact">
                <ContactMe />
            </section>
            <footer className="p-6 text-center">
                <p>© 2024 GURURAJ. All rights reserved.</p>
                <div className="flex justify-center mt-4">
                    <a href="https://www.instagram.com/r.guru_rio/" className="btn btn-ghost">Instagram</a>
                    <a href="https://www.linkedin.com/in/r-gururaj/" className="btn btn-ghost">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
