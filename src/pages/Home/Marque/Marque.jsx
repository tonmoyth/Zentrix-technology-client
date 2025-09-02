import Marquee from "react-fast-marquee";
import marqueeImage from "../../../assets/marquee-bg.png";
import starImg from "../../../assets/star.png"

function Marque() {
    return (
        <Marquee
            className="p-8 text-2xl md:text-3xl lg:text-4xl text-white"
            style={{
                backgroundImage: `url(${marqueeImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            Web Design & Development <img className="w-6 md:w-8 lg:w-11 mx-6" src={starImg} /> Digital Marketing
            <img className="w-6  md:w-8 lg:w-11 mx-6" src={starImg} /> Mobile App Development <img className="w-6  md:w-8 lg:w-11 mx-6" src={starImg} /> Business Support <img className="w-6  md:w-8 lg:w-11 mx-6" src={starImg} /> Hardware <img className="w-6  md:w-8 lg:w-11 mx-6" src={starImg} />
        </Marquee>
    );
}

export default Marque;
