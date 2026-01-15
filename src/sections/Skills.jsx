import React from "react";
import { SKILLS, TOOLS, DATABASES, CLOUDS } from "../constants/constants";
import { motion } from "framer-motion";

function Skills() {
  const sectionContainer = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.3,
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

  const gridContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const iconItem = {
    hidden: { opacity: 0, scale: 0.85 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
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
        gap-10
        place-items-start
      "
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          variants={iconItem}
          className="
            group
            relative
            flex flex-col items-center
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:scale-110
          "
        >
          <div className="w-24 h-24 flex items-center justify-center">
            {Object.values(item).find((val) => typeof val === "object")}
          </div>

          <div
            className="
              pointer-events-none
              absolute
              -bottom-7
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-200
              bg-white text-black text-xs
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
    <section id="skills">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="pt-30 pb-60"
      >
        <motion.h1
          variants={fadeUp}
          className="text-[10rem] font-bold text-white text-center"
        >
          SKILLS
        </motion.h1>

        {/* Skills */}
        <motion.div variants={fadeUp} className="mt-20">
          <h2 className="text-white text-3xl mb-12">ทักษะด้านเทคโนโลยี</h2>
          {renderGrid(SKILLS)}
        </motion.div>

        {/* Tools */}
        <motion.div variants={fadeUp} className="mt-32">
          <h2 className="text-white text-3xl mb-12">
            เครื่องมือสำหรับการพัฒนา
          </h2>
          {renderGrid(TOOLS)}
        </motion.div>

        {/* Database */}
        <motion.div variants={fadeUp} className="mt-32">
          <h2 className="text-white text-3xl mb-12">ฐานข้อมูล</h2>
          {renderGrid(DATABASES)}
        </motion.div>

        {/* Cloud */}
        <motion.div variants={fadeUp} className="mt-32">
          <h2 className="text-white text-3xl mb-12">คลาวด์</h2>
          {renderGrid(CLOUDS)}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
