import React from "react";
import userIcon from "../../../assets/user.png"
import { FaUsers } from "react-icons/fa";
import Carousel from "../Caruasel/Carousel";


function About() {

    return (
        <>
            <section className="py-20 px-6 bg-gradient-to-b from-[#fff] to-gray-200">
                <div className=" md:w-11/12 lg:w-10/12 lg:h-10/12 mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 items-center">
                    {/* Left Side Images */}
                    <div className="flex flex-col items-center space-y-6 relative">
                        {/* <div className="flex relative">
                            <div className="rounded-2xl overflow-hidden rounded-tr-4xl w-40 sm:w-60 lg:w-60 h-56">
                                <img
                                    src="https://i.ibb.co.com/99PmSbDT/About-Us1.png"
                                    alt="Team working"
                                    className="w-full h-full object-cover rounded-tr-4xl overflow-hidden transition duration-300 transform hover:scale-105"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden w-40 sm:w-60 rounded-br-4xl  lg:w-60 h-56 mt-30 ">
                                <img
                                    src="https://i.ibb.co.com/jvSq5cpc/About-Us1.png"
                                    alt="Office team"
                                    className="w-full h-full object-cover rounded-br-4xl overflow-hidden transition duration-300 transform hover:scale-105"
                                />
                            </div>
                        </div> */}

                        {/* slider */}
                        <Carousel></Carousel>

                        {/* Employees Box */}
                        {/* <div className="bg-white rounded-2xl shadow-2xl px-6 py-4 flex items-center space-x-3 absolute top-60 left-20 md:top-66 md:left-70 lg:top-66 lg:left-60 ">
                            <div className="text-[var(--secondary)] w-8 text-2xl"><FaUsers size={30}/></div>
                            <div className="ml-4">
                                <h4 className="md:text-lg font-bold">1100+ <br /> Employees</h4>
                            </div>
                        </div> */}
                    </div>

                    {/* Right Side Text */}
                    <div>
                        <h2 className="text-2xl  lg:text-4xl font-bold mb-6  uppercase bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] bg-clip-text text-transparent">
          About Us
        </h2>
                        {/* <h4 className="text-[var(--secondary)] font-bold mb-2 uppercase">
                            
                        </h4> */}
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-snug">
                            We Provide The <span className="text-[var(--secondary)]">Best Services</span>{" "}
                            To Grow Your Business!
                        </h2>
                        <p className="text-gray-600 mb-6">
                            At Zentrix Technology, we specialize in providing top-notch website solutions and hardware products to help businesses thrive in the digital age. Our team of experienced professionals is dedicated to delivering innovative, reliable, and customized solutions that drive growth and efficiency. Whether you need a cutting-edge website, robust IT infrastructure, or high-quality hardware, Zentrix Technology combines expertise and technology to propel your business forward and unlock its full potential.
                        </p>
                        <button className="btn px-8 py-6 rounded-full text-white bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] border-0 hover:opacity-90">
                                Learn More
                            </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
