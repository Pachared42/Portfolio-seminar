import React from "react";
import { EDUCATION } from "../constants/constants";
import { motion } from "framer-motion";

function Education() {
  const sectionContainer = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageFloat = {
    hidden: { opacity: 0, y: 40, rotate: -8 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const glowFade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="relative">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="
          relative 
          bg-white rounded-3xl
          pt-20 pb-24
          sm:pt-24 sm:pb-28
          lg:pt-32 lg:pb-36
        "
      >
        {/* Decorative Images */}
        <motion.img
          variants={imageFloat}
          src="image.decorative/parrot.png"
          alt="parrot"
          className="
            absolute top-0 left-[30%] lg:left-[15%]
            -translate-x-1/2 -translate-y-1/2
            w-[16rem] sm:w-[20rem] lg:w-[24rem]
            -rotate-22
            opacity-40 sm:opacity-70
            pointer-events-none
          "
        />

        <motion.img
          variants={imageFloat}
          src="image.decorative/w.png"
          alt="w"
          className="
            absolute top-[85%] right-[-5%] lg:right-0
            w-[18rem] sm:w-88 lg:w-104
            rotate-12
            opacity-40 sm:opacity-70
            pointer-events-none
          "
        />

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="
            text-center font-bold leading-none
            text-transparent
            text-[clamp(3rem,9vw,11rem)]
            [-webkit-text-stroke:clamp(1px,0.2vw,3px)_black]
          "
        >
          EDUCATION
        </motion.h1>

        {/* Glow Effects */}
        <motion.div
          variants={glowFade}
          className="
            absolute top-16 right-[15%]
            w-[18rem] h-72
            bg-green-300/30
            rounded-full blur-3xl
            pointer-events-none
          "
        />

        <motion.div
          variants={glowFade}
          className="
            absolute bottom-16 left-[10%]
            w-[20rem] h-80
            bg-green-300/30
            rounded-full blur-3xl
            pointer-events-none
          "
        />

        {/* Content */}
        <motion.div
          variants={sectionContainer}
          className="
            relative z-10
            mx-auto
            mt-12 sm:mt-16
            px-4 sm:px-8 lg:px-24 xl:px-40
            max-w-5xl
            space-y-14
            text-black
          "
        >
          {EDUCATION.map((item, index) => (
            <motion.div key={index} variants={fadeUp}>
              <h3
                className="
                  font-bold
                  text-[clamp(1.25rem,2.5vw,1.75rem)]
                "
              >
                {item.degree}
              </h3>

              <p className="text-gray-700 mt-1">
                {item.institution}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {item.duration}
              </p>

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-relaxed
                  text-[clamp(0.95rem,1.2vw,1.125rem)]
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Education;
