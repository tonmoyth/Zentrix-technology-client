import { FaGlobe, FaFlask, FaBolt, FaHandshake } from "react-icons/fa";

export default function WhyChoose() {
  const points = [
    {
      id: 1,
      icon: <FaGlobe className="text-2xl text-white" />,
      title: "50,000+ satisfied clients worldwide",
    },
    {
      id: 2,
      icon: <FaFlask className="text-2xl text-white" />,
      title: "13 years of proven digital transformation experience",
    },
    {
      id: 3,
      icon: <FaBolt className="text-2xl text-white" />,
      title: "Agile, scalable, and proven delivery frameworks",
    },
    {
      id: 4,
      icon: <FaHandshake className="text-2xl text-white" />,
      title: "Long-term partnerships focused on results",
    },
  ];

  return (
    <section className="relative mb-20  w-11/12 md:w-10/12 mx-auto  overflow-hidden">
      <div className="  grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
             <h2 className="text-2xl  lg:text-4xl font-bold mb-4  uppercase bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] bg-clip-text text-transparent">
          Why Choose{" "}
            Zentrix Technology 
        </h2>
        

          <ul className="space-y-6">
            {points.map((point) => (
              <li key={point.id} className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full shadow-lg">
                  {point.icon}
                </div>
                <p className="text-lg">{point.title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <img
            src="/images/why-choose.jpg" // ✅ এখানে আপনার ইমেজ path দিন
            alt="Zentrix Technology Limited"
            className="rounded-lg shadow-2xl w-[350px] md:w-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
