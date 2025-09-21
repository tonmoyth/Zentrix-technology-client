import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStarOfDavid } from "react-icons/fa";
import { motion } from "framer-motion";
import projectOne from '../../../assets/01.jpeg'
import projectTwo from '../../../assets/02.jpeg'
import projectThree from '../../../assets/03.jpeg'
import projectFour from '../../../assets/04.jpeg'
import projectFive from '../../../assets/05.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

export default function Projects() {
    return (
     <div className='bg-gradient-to-b from-gray-200 to-[#fff]'>
           <div className="w-11/12  md:w-10/12 mx-auto mb-20 ">
            <div className='flex gap-2 items-center justify-center'>
             
                       <h2 className="text-2xl  lg:text-4xl font-bold  mb-2  uppercase bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] bg-clip-text text-transparent">
         Our Projects
        </h2>
               
            </div>
            <h1 className=" text-center mb-8  
              text-black bg-clip-text ">
                Featured projects we’re proud to sharee.
                
            </h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1, // 📱 mobile
                    },
                    768: {
                        slidesPerView: 2, // 🖥️ tablet
                    },
                    1024: {
                        slidesPerView: 3, // 💻 desktop
                    },
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
                {/* Project 1 */}
                <SwiperSlide>
                    <div className="relative group h-[300px] rounded-lg overflow-hidden">
                        <div className=" h-full w-full flex items-center justify-center text-white font-bold text-xl">
                            <img src={projectOne} alt="project one" />
                        </div>
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <a
                                href="https://your-live-link.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-gradient-to-r from-[#24C4F4] to-[#0E47A1] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                Live Link
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Project 2 */}
                <SwiperSlide>
                    <div className="relative group h-[300px] rounded-lg overflow-hidden">
                        <div className=" h-full w-full flex items-center justify-center text-white font-bold text-xl">
                            <img src={projectTwo} alt="project one" />
                        </div>
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <a
                                href="#"
                                className="px-6 py-2 bg-gradient-to-r from-[#24C4F4] to-[#0E47A1] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                Live Link
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Project 3 */}
                <SwiperSlide>
                    <div className="relative group h-[300px] rounded-lg overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-white font-bold text-xl">
                           <img src={projectThree} alt="project one" />
                        </div>
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <a
                                href="#"
                                className="px-6 py-2 bg-gradient-to-r from-[#24C4F4] to-[#0E47A1] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                Live Link
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Project 4 */}
                <SwiperSlide>
                    <div className="relative group h-[300px] rounded-lg overflow-hidden">
                        <div className=" h-full w-full flex items-center justify-center text-white font-bold text-xl">
                           <img src={projectFour} alt="project one" />
                        </div>
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <a
                                href="#"
                                className="px-6 py-2 bg-gradient-to-r from-[#24C4F4] to-[#0E47A1] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                Live Link
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Project 5 */}
                <SwiperSlide>
                    <div className="relative group h-[300px] rounded-lg overflow-hidden">
                        <div className=" h-full w-full flex items-center justify-center text-white font-bold text-xl">
                           <img src={projectFive} alt="project one" />
                        </div>
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <a
                                href="#"
                                className="px-6 py-2 bg-gradient-to-r from-[#24C4F4] to-[#0E47A1] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                Live Link
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Add more slides as needed */}
            </Swiper>
        </div>
     </div>

    );
}
