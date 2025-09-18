import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBullhorn,
  FaMobileAlt,
  FaHandsHelping,
  FaDesktop,
} from "react-icons/fa";
import LogoMarquee from "../../components/LogoMarquee/LogoMarquee";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (activeTab) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  const tabs = [
    {
      id: 1,
      name: "Digital Marketing",
      icon: <FaBullhorn />,
      image:
        "https://i.ibb.co.com/nMnmHw0t/digital-marketing-with-icons-business-people-1.jpg",
      content:
        "Grow your business with SEO, social media campaigns, and data-driven marketing strategies.",
    },
    {
      id: 2,
      name: "Mobile App Development",
      icon: <FaMobileAlt />,
      image: "/services/mobile-app.jpg",
      content:
        "We build scalable and user-friendly mobile applications for both iOS and Android platforms.",
    },
    {
      id: 3,
      name: "Business Support",
      icon: <FaHandsHelping />,
      image: "/services/business-support.jpg",
      content:
        "We provide reliable business support solutions to help you manage and optimize operations.",
    },
    {
      id: 4,
      name: "Hardware",
      icon: <FaDesktop />,
      image: "/services/hardware.jpg",
      content:
        "Providing quality hardware and IT infrastructure to ensure smooth operations for your business.",
    },
  ];

  return (
    <div>
      <div className="w-11/12 md:w-10/12 mx-auto pt-26 min-h-[100vh]">
        <h2 className="text-2xl text-center lg:text-4xl font-bold mb-4  uppercase bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] bg-clip-text text-transparent">
          Our service
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 rounded-xl overflow-hidden">
          {/* Sidebar Tabs */}
          <div className="sm:w-90 flex flex-col rounded-xl bg-black/5 dark:bg-white/5 backdrop-filter backdrop-blur-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                relative group flex items-center w-full px-4 py-3 sm:py-4 transition-all
                ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                }
              `}
              >
                {/* Active Background */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tabBackground"
                    className="absolute inset-0 bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Tab Icon & Name */}
                <div className="flex items-center gap-3 z-10">
                  <span className="text-xl">{tab.icon}</span>
                  <span className="font-medium">{tab.name}</span>
                </div>

                {/* Dot Indicator */}
                {activeTab === tab.id ? (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute right-3 w-2 h-2 rounded-full bg-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                ) : (
                  <div className="absolute right-3 w-2 h-2 rounded-full bg-gray-400/0 group-hover:bg-gray-400/30 transition-colors" />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 relative rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-filter backdrop-blur-lg shadow-lg overflow-hidden">
            {/* Loading Effect */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  key="loader"
                  className="absolute inset-0 z-20 flex items-center justify-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="animate-spin h-8 w-8 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 min-h-[250px]"
              >
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
                  <span className="text-xl">
                    {tabs.find((t) => t.id === activeTab)?.icon}
                  </span>
                  <span>{tabs.find((t) => t.id === activeTab)?.name}</span>
                </h3>

                {/* ✅ Image */}
                <img
                  src={tabs.find((t) => t.id === activeTab)?.image}
                  alt={tabs.find((t) => t.id === activeTab)?.name}
                  className="w-full h-40 object-cover rounded-lg mb-4 shadow"
                />

                {/* ✅ Text */}
                <p className="text-gray-600 dark:text-gray-300">
                  {tabs.find((tab) => tab.id === activeTab)?.content}
                </p>
                <button className="btn px-8 mt-4 py-6 rounded-full text-white bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] border-0 hover:opacity-90">
                  Take My Desire Service
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* trusted by */}


      {/* logo marquee */}
     <div className="mt-20 md:mt-0">
         <LogoMarquee></LogoMarquee>
     </div>

      {/* why choose */}
      <WhyChoose></WhyChoose>
    </div>
  );
}
