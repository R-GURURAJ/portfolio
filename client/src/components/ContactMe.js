import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ContactMe = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1fo2asj', 'template_h67tm2a', formRef.current, 'GfJYmjoERJSQ8nbY0')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("An error occurred, please try again.");
            });
    };

        return (
            <section className="text-white  w-full h-screen">
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                            Contact Me
                        </span>
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    </div>
                </div>
                <div className="sm:flex justify-around items-center ">

                    <div className=" p-6 bg-slate-900 rounded-lg shadow-lg">
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-lg">Name:</label>
                                <input type="text" id="name" name="name" className="input input-bordered w-full mt-1 p-2 rounded" required />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-lg">Email:</label>
                                <input type="email" id="email" name="email" className="input input-bordered w-full mt-1 p-2 rounded" required />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-lg">Message:</label>
                                <textarea id="message" name="message" className="textarea textarea-bordered w-full mt-1 p-2 rounded" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full py-3 mt-4 rounded-lg hover:bg-primary-dark transition duration-300">Send</button>
                        </form>
                        <p className="text-center mt-8">Or email me at: <span className="text-primary">r.gururaj16@gmail.com</span></p>
                    </div>
                    <div className="text-center ">
                        <h2 className="text-2xl font-semibold mb-10">Catch Me Via Social Platforms</h2>
                        <div className="flex justify-center space-x-6">
                            <a href="https://www.instagram.com/r.guru_rio/" target='_blank'
                                rel="noopener noreferrer" className="text-3xl"><FaInstagram /></a>
                            <a href="https://github.com/R-GURURAJ" target='_blank'
                                rel="noopener noreferrer" className="text-3xl"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/r-gururaj/" target='_blank'
                                rel="noopener noreferrer" className="text-3xl"><FaLinkedin /></a>
                            <a href="https://api.whatsapp.com/send?phone=7010504966&text=Hai%20GURURAJ%20!%20." target='_blank'
                                rel="noopener noreferrer" className="text-3xl"><FaWhatsapp /></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    export default ContactMe;
