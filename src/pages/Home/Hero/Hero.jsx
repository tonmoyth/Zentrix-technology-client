import heroImage from '../../../assets/hero.png'
import NavBer from '../../../components/NavBer/NavBer'
import { SlEarphones } from "react-icons/sl";
import { IoHardwareChip } from "react-icons/io5";
import { ImMobile2 } from "react-icons/im";
import { GrCloudSoftware } from "react-icons/gr";
import { FaConnectdevelop } from "react-icons/fa";
import { useEffect, useState } from 'react';

function Hero() {

     const [isScrolled,setIsScrolled] = useState(false);

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
                <div className={`absolute top-0 w-full z-30 ${isScrolled && 'bg-white fixed top-0'}`}>
                    <NavBer></NavBer>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/gFJXJTgp/Desktop-1.png)",
                    }}
                >
                    {/* icon */}
                    <div className='absolute top-57 left-80'>
                        <SlEarphones className='text-[var(--secondary)]' size={40}/>
                    </div>
                    <div className='absolute top-87 right-80'>
                        <IoHardwareChip className='text-[var(--secondary)]' size={40}/>
                    </div>
                    <div className='absolute top-50 right-170'>
                        <ImMobile2 className='text-[var(--secondary)]' size={40}/>
                    </div>
                    <div className='absolute bottom-100 right-180'>
                        <GrCloudSoftware className='text-[var(--secondary)]' size={40}/>
                       
                    </div>
                    <div className='absolute bottom-60 left-180'>
                        <FaConnectdevelop className='text-[var(--secondary)]' size={40}/>
                    </div>

                    
                    <div className="hero-overlay bg-white/75 z-10"></div>
                    <div className="hero-content text-neutral-content text-center z-20">
                        <div >
                            <h1 className="mb-5 text-2xl md:text-5xl lg:text-6xl text-black font-bold">Technology Simplified <span className='block md:mt-2'>Delivered.</span></h1>
                            <p className="mb-4 w-9/12 mx-auto text-[var(--text)]">
                                We build smart, reliable, and user-friendly software solutions that help your business grow faster and smarter.
                            </p>
                            <button className="btn px-8 py-6 rounded-full text-white bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] border-0 hover:opacity-90">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
