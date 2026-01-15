import React from "react";
import { EDUCATION } from "../constants/constants";
import { motion } from "framer-motion";

function Education() {
  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.25,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageFloat = {
    hidden: { opacity: 0, y: 60, rotate: -10 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const glowFade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section id="education">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="bg-white rounded-3xl pt-30 pb-30 relative"
      >
        <motion.img
          variants={imageFloat}
          className="absolute top-1 left-1/4 -translate-x-1/2 -translate-y-1/2 w-100 -rotate-25"
          src="image.decorative/parrot.png"
          alt="parrot"
        />

        <motion.img
          variants={imageFloat}
          className="absolute top-230 right-0 -translate-x-1/2 w-120 rotate-20"
          src="image.decorative/w.png"
          alt="w"
        />

        <motion.h1
          variants={fadeUp}
          className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[9rem] lx:text-[11rem] font-bold text-center"
          style={{
            WebkitTextStroke: "4px black",
            color: "transparent",
          }}
        >
          EDUCATION
        </motion.h1>

        <motion.div
          variants={glowFade}
          className="absolute top-20 right-30 w-80 h-80 bg-green-300/30 rounded-full blur-3xl"
        />
        <motion.div
          variants={glowFade}
          className="absolute bottom-24 left-24 w-120 h-120 bg-green-300/30 rounded-full blur-3xl"
        />

        <motion.div
          variants={container}
          className="mt-20 px-50 space-y-14 text-black"
        >
          {EDUCATION.map((item, index) => (
            <motion.div key={index} variants={fadeUp}>
              <h3 className="text-2xl font-bold">{item.degree}</h3>

              <p className="text-gray-700 mt-1">{item.institution}</p>

              <p className="text-sm text-gray-500 mt-1">{item.duration}</p>

              <p className="mt-4 text-gray-600 leading-relaxed">
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
