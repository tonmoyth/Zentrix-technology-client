import React from "react";
import Logomarquee from "../../pages/Home/Logomarquee/Logomarquee";
import { useLocation } from "react-router";
import brandLogoOne from '../../assets/brandLogo1.png'
import brandLogoTwo from '../../assets/brandLogo2.png'
import brandLogoThree from '../../assets/brandLogo3.png'
import brandLogoFour from '../../assets/brandLogo4.png'
import brandLogoFive from '../../assets/brandLogo5.png'
import brandLogoSix from '../../assets/brandLogo6.png'
import brandLogoSeven from '../../assets/brandLogo7.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";  // ✅ import Autoplay module
import "swiper/css";

const clientLogos = [
  // { id: 1, src: brandLogoOne,  },
  { id: 2, src: brandLogoTwo,  },
  { id: 3, src: brandLogoThree,  },
  { id: 4, src: brandLogoFour,  },
  { id: 5, src: brandLogoFive, },
  { id: 6, src: brandLogoSix },
  { id: 7, src: brandLogoSeven },
];


// const NextLogo = () => (
//   <div className="w-16 h-16 bg-black text-white">Next</div>
// );

export default function LogoMarquee() {

  const {pathname} = useLocation();
  return (
    <section className="bg-gradient-to-b from-[#fff] to-gray-200">
      <div className="w-11/12 md:w-10/12 mx-auto px-6">
              <h2 className="text-2xl  lg:text-4xl font-bold text-center  mb-2  uppercase bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] bg-clip-text text-transparent">
         Our Clients
        </h2>
        
       

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {clientLogos.map((logo) => (
            <SwiperSlide key={logo.id}>
            
               <div className="w-34 h-34 flex items-center justify-center ">
  <img
    src={logo.src}
    alt={logo.alt}
    className="max-w-full max-h-full filter grayscale hover:grayscale-0 transition duration-300"
  />
</div>
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
