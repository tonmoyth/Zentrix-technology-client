import React from "react";
import Logomarquee from "../../pages/Home/Logomarquee/Logomarquee";


const ReactLogo = () => <div className="w-16 h-16 bg-cyan-500">⚛️</div>;
const TailwindLogo = () => <div className="w-16 h-16 bg-sky-500">🌊</div>;
const JSLogo = () => <div className="w-16 h-16 bg-yellow-400">JS</div>;
const NextLogo = () => <div className="w-16 h-16 bg-black text-white">Next</div>;
  
export default function LogoMarquee() {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mb-20">
      <Logomarquee speed={80} pauseOnHover={true} className="text-white text-6xl gap-16">
        <ReactLogo />
        <TailwindLogo />
        <JSLogo />
        <NextLogo />
      </Logomarquee>
    </div>
  );
}
