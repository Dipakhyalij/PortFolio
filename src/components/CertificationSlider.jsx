import { useState } from "react";
import { motion } from "framer-motion";

import {certifications} from "../assets/assets"

export default function CertificationSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? certifications.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === certifications.length - 1 ? 0 : current + 1);
  };

  return (
    <motion.div  initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.1, ease: 'easeOut'}}
    viewport={{once:false, amount:0.2}}
    id='certification'
    className='py-20 bg-dark-200'>
    <div className="  w-full max-w-4xl mx-auto py-10">
       <h2 className='text-3xl font-bold text-center mb-4'>
          My <span className='text-purple'>Certifications</span>
        </h2>

      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <img
          src={certifications[current].image}
          alt={certifications[current].title}
          className="w-full h-[400px] object-contain bg-dark-200"
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ❯
        </button>
      </div>

      {/* Certificate Title */}
      <p className="text-center mt-4 text-lg font-medium">
        {certifications[current].title}
      </p>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {certifications.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
    </motion.div>
  );
}
