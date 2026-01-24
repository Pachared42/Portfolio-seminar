import React from "react";
import { SKILLS, TOOLS, DATABASES, CLOUDS } from "../constants/constants";
import { motion } from "framer-motion";

function Skills() {
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

  const gridContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const iconItem = {
    hidden: { opacity: 0, scale: 0.85 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const renderGrid = (data) => (
    <motion.div
      variants={gridContainer}
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        gap-x-8 gap-y-12
        place-items-center
      "
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          variants={iconItem}
          className="
            group relative
            flex flex-col items-center
            transition-transform duration-300 ease-out
            hover:-translate-y-2 hover:scale-110
          "
        >
          <div
            className="
              flex items-center justify-center
              w-[clamp(4.5rem,10vw,6rem)]
              h-[clamp(4.5rem,10vw,6rem)]
            "
          >
            {Object.values(item).find((val) => typeof val === "object")}
          </div>

          {/* Tooltip */}
          <div
            className="
              pointer-events-none
              absolute -bottom-8
              opacity-0 group-hover:opacity-100
              transition-opacity duration-200
              bg-white text-black
              text-xs
              px-3 py-1 rounded-full
              whitespace-nowrap
            "
          >
            {item.name}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        pt-20 pb-28
        sm:pt-28 sm:pb-36
        lg:pt-36 lg:pb-44
      "
    >
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-8"
      >
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="
            text-center font-bold text-white
            text-[clamp(3rem,9vw,11rem)]
          "
        >
          SKILLS
        </motion.h1>

        {/* Skills */}
        <motion.div variants={fadeUp} className="mt-16 sm:mt-20">
          <h2
            className="
              text-white font-semibold
              mb-10
              text-[clamp(1.5rem,3vw,1.875rem)]
            "
          >
            ทักษะด้านเทคโนโลยี
          </h2>
          {renderGrid(SKILLS)}
        </motion.div>

        {/* Tools */}
        <motion.div variants={fadeUp} className="mt-24 sm:mt-32">
          <h2
            className="
              text-white font-semibold
              mb-10
              text-[clamp(1.5rem,3vw,1.875rem)]
            "
          >
            เครื่องมือสำหรับการพัฒนา
          </h2>
          {renderGrid(TOOLS)}
        </motion.div>

        {/* Databases */}
        <motion.div variants={fadeUp} className="mt-24 sm:mt-32">
          <h2
            className="
              text-white font-semibold
              mb-10
              text-[clamp(1.5rem,3vw,1.875rem)]
            "
          >
            ฐานข้อมูล
          </h2>
          {renderGrid(DATABASES)}
        </motion.div>

        {/* Clouds */}
        <motion.div variants={fadeUp} className="mt-24 sm:mt-32">
          <h2
            className="
              text-white font-semibold
              mb-10
              text-[clamp(1.5rem,3vw,1.875rem)]
            "
          >
            คลาวด์
          </h2>
          {renderGrid(CLOUDS)}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
