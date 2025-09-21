import heroImage from '../../../assets/hero.png'
import NavBer from '../../../components/NavBer/NavBer'
import { SlEarphones } from "react-icons/sl";
import { IoHardwareChip } from "react-icons/io5";
import { ImMobile2 } from "react-icons/im";
import { GrCloudSoftware } from "react-icons/gr";
import { FaConnectdevelop } from "react-icons/fa";
import { useEffect, useState } from 'react';
import SlideInView from '../../../components/SlideInText/SlideInText';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

import iconOne from '../../../assets/bitcoin-01.png'
import iconTwo from '../../../assets/bitcoin-02.png'
import iconFour from '../../../assets/circle-02.png'
import iconFive from '../../../assets/ethereum-01.png'

function Hero() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <section className='relative'>
                {/* navber */}
                <div className={`absolute top-0 w-full z-30 ${isScrolled && 'bg-white fixed top-0 shadow-sm'}`}>
                    <NavBer></NavBer>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/sLnp8WQ/new.png)",
                    }}
                >
                    {/* icon */}
                    <motion.div
                        className='absolute top-57 left-80 z-20'
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img className='w-10' src={iconOne}  />
                        {/* <SlEarphones className='text-[var(--secondary)]' size={40} /> */}
                    </motion.div>

                    <motion.div
                        className='absolute top-97 right-80 z-20'
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <img className='w-10' src={iconTwo}  />
                    </motion.div>

                    {/* <motion.div
                        className="absolute top-50 right-170 z-20"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                    >
                        <ImMobile2 className="text-[var(--secondary)]" size={40} />
                    </motion.div> */}

                    <motion.div
                        className="absolute bottom-100 right-180 z-20"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                         <img className='w-10' src={iconFour}  />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-60 lg:left-180 z-20"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                         <img className='w-10' src={iconFive}  />
                    </motion.div>


                    <div className="hero-overlay bg-white/60 z-10"></div>
                    <div className="hero-content text-neutral-content text-center z-20">
                        <div >
                            <h1 className=" text-2xl text-black md:text-5xl lg:text-6xl font-bold">
                                Technology Simplified <br />
                                <span className="block mt-2 font-semibold bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] bg-clip-text text-transparent">
                                    <TypeAnimation
                                        sequence={[
                                            'Development', 500,
                                            'Hardware', 500,
                                            'Business', 500,
                                            'App Development', 500
                                        ]}
                                        wrapper="span"
                                        speed={5}
                                        repeat={Infinity}
                                    />
                                </span>
                            </h1>






                            {/* <SlideInView></SlideInView> */}
                            <p className="mb-4 w-9/12 mx-auto text-black ">
                                We build smart, reliable, and user-friendly software solutions that help your business grow faster and smarter.
                            </p>
                            <Link to="/service">
                            <button className="btn px-8 py-6 mt-6 rounded-full text-white bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] border-0 hover:opacity-90">
                                Get Started
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
