import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
const SparklesIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.93 2.25 12 7.5l2.07-5.25a.5.5 0 0 1 .9 0L17.25 8.5l4.16.34a.5.5 0 0 1 .29.88l-3.2 3.1.95 4.5a.5.5 0 0 1-.73.53L12 14.5l-3.72 2.33a.5.5 0 0 1-.73-.53l.95-4.5-3.2-3.1a.5.5 0 0 1 .29-.88l4.16-.34Z" />
  </svg>;
const ChevronLeftIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m15 18-6-6 6-6" />
  </svg>;
const ChevronRightIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>;
const Badge = ({
  children,
  className
}) => <div className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium ${className}`}>
    {children}
  </div>;
const cardData = [{
  id: 1,
  imageUrl: "https://i.pinimg.com/736x/d6/8a/12/d68a121e960094f99ad8acd37505fb7d.jpg",
  title: "Crimson Forest"
}, {
  id: 2,
  imageUrl: "https://i.pinimg.com/736x/21/16/f7/2116f71f9d51d875e44d809f074ff079.jpg",
  title: "Misty Mountains"
}, {
  id: 3,
  imageUrl: "https://i.pinimg.com/1200x/fe/c2/0d/fec20d2958059b8463bffb138d4eaac6.jpg",
  title: "Floating Islands"
}, {
  id: 4,
  imageUrl: "https://i.pinimg.com/736x/84/dc/62/84dc62de850a34a9d420c97f3a2d58f4.jpg",
  title: "Crystal Cave"
}, {
  id: 5,
  imageUrl: "https://i.pinimg.com/1200x/be/c3/7e/bec37e2c43e703f922f887db2578ce2e.jpg",
  title: "Sunset Peaks"
}, {
  id: 6,
  imageUrl: "https://i.pinimg.com/736x/47/dd/47/47dd47b0d66c2fa641e03e370bcb5433.jpg",
  title: "Night Sky"
}, {
  id: 7,
  imageUrl: "https://i.pinimg.com/736x/05/01/bc/0501bcd327d9df915e83154bbf9456e3.jpg",
  title: "Ancient Ruins"
}, {
  id: 8,
  imageUrl: "https://i.pinimg.com/736x/c1/46/be/c146bebffca026d2c4fa76cc85aac917.jpg",
  title: "Magical Tree"
}, {
  id: 9,
  imageUrl: "https://i.pinimg.com/736x/91/7a/51/917a51df0d444def3cade8d626305a67.jpg",
  title: "Celestial Waters"
}];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(cardData.length / 2));
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef(null);
  const autoplayDelay = 3000;
  const goToNext = () => {
    setActiveIndex(prev => (prev + 1) % cardData.length);
  };
  useEffect(() => {
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [isPaused, activeIndex]);
  const changeSlide = newIndex => {
    const newSafeIndex = (newIndex + cardData.length) % cardData.length;
    setActiveIndex(newSafeIndex);
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
  };
  const onDragEnd = (event, info) => {
    const dragThreshold = 75;
    const dragOffset = info.offset.x;
    if (dragOffset > dragThreshold) {
      changeSlide(activeIndex - 1);
    } else if (dragOffset < -dragThreshold) {
      changeSlide(activeIndex + 1);
    }
  };

  return <section className="w-full flex-col items-center justify-center font-sans overflow-hidden">
      <div className="w-full max-w-5xl mx-auto p-4" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="relative flex w-full flex-col rounded-3xl border border-white/10 dark:border-white/10  p-4 pt-6 md:p-6">
          

          <div className="relative w-full h-[280px] md:h-[400px] flex items-center justify-center overflow-hidden pt-12">
            <motion.div className="w-full h-full flex items-center justify-center" drag="x" dragConstraints={{
            left: 0,
            right: 0
          }} dragElastic={0.2} onDragEnd={onDragEnd}>
              {cardData.map((card, index) => <Card onClick={() => changeSlide(index)}  key={card.id} card={card} index={index} activeIndex={activeIndex} totalCards={cardData.length} />)}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            {/* <button onClick={() => changeSlide(activeIndex - 1)} className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500">
              <ChevronLeftIcon className="w-6 h-6" />
            </button> */}

            <div className="flex items-center justify-center gap-2">
              {cardData.map((_, index) => <button key={index} onClick={() => changeSlide(index)} className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${activeIndex === index ? "w-6 bg-[var(--secondary)]" : "w-2 bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500"}`} aria-label={`Go to slide ${index + 1}`} />)}
            </div>
{/* 
            <button onClick={() => changeSlide(activeIndex + 1)} className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500">
              <ChevronRightIcon className="w-6 h-6" />
            </button> */}
          </div>
        </div>
      </div>
    </section>;
}
function Card({
  card,
  index,
  activeIndex,
  totalCards,
  onClick
}) {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) {
    offset -= totalCards;
  } else if (offset < -totalCards / 2) {
    offset += totalCards;
  }
  const isVisible = Math.abs(offset) <= 1;
  const animate = {
    x: `${offset * 50}%`,
    scale: offset === 0 ? 1 : 0.8,
    zIndex: totalCards - Math.abs(offset),
    opacity: isVisible ? 1 : 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30
    }
  };
  return <motion.div onClick={onClick} className="absolute w-1/2 md:w-1/3 h-[95%]" style={{
    transformStyle: "preserve-3d"
  }} animate={animate} initial={false}>
      <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden bg-gray-200 dark:bg-neutral-800">
        <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover pointer-events-none" onError={e => {
        const target = e.target;
        target.onerror = null;
        target.src = "https://placehold.co/400x600/1e1e1e/ffffff?text=Image+Missing";
      }} />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h4 className="text-white text-lg font-semibold">{card.title}</h4>
        </div>
      </div>
    </motion.div>;
}
