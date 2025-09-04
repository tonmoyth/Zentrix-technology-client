import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStarOfDavid } from "react-icons/fa";
import { motion } from "framer-motion";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

export default function Projects() {
    return (
        <div className="w-11/12  md:w-10/12 mx-auto mb-20">
            <div className='flex gap-2 items-center justify-center'>
                <motion.div
                    initial={{ scale: 0.6, rotate: -30, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center text-sky-500 drop-shadow"
                >
                    {/* slow infinite spin */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    >
                        <FaStarOfDavid size={22} />
                    </motion.div>
                </motion.div>
                <h4 className="text-[var(--secondary)] mt-3  text-center font-semibold mb-2 uppercase">
                    Our Projects
                </h4>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-center mb-8 font-bold 
               bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] bg-clip-text text-transparent">
                Featured projects we’re <br />
                <span className='block mt-1'>proud to sharee</span>
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
                        <div className="bg-blue-500 h-full w-full flex items-center justify-center text-white font-bold text-xl">
                            Project 1
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
                        <div className="bg-green-500 h-full w-full flex items-center justify-center text-white font-bold text-xl">
                            Project 2
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
                        <div className="bg-green-500 h-full w-full flex items-center justify-center text-white font-bold text-xl">
                            Project 2
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
                        <div className="bg-green-500 h-full w-full flex items-center justify-center text-white font-bold text-xl">
                            Project 2
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

    );
}
