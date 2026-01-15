import { ABOUT } from "../constants/constants";
import { motion } from "framer-motion";

function About() {
  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageItem = {
    hidden: {
      opacity: 0,
      y: 40,
      rotate: -10,
    },
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

  const glowItem = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="bg-white rounded-3xl pt-30 pb-30 relative"
      >
        <motion.img
          variants={imageItem}
          className="absolute top-1 left-1/4 -translate-x-1/2 -translate-y-1/2 w-100 -rotate-25"
          src="image.decorative/5.png"
          alt="5"
        />

        <motion.img
          variants={imageItem}
          className="absolute top-110 right-0 -translate-x-1/2 w-105 rotate-20"
          src="image.decorative/fox.png"
          alt="fox"
        />

        <motion.h1
          variants={fadeUp}
          className="text-[10rem] font-bold text-center"
          style={{
            WebkitTextStroke: "4px black",
            color: "transparent",
          }}
        >
          ABOUT ME
        </motion.h1>

        <motion.div
          variants={glowItem}
          className="absolute top-1 right-30 w-100 h-100 bg-orange-300/30 rounded-full blur-3xl"
        />
        <motion.div
          variants={glowItem}
          className="absolute bottom-10 left-24 w-70 h-70 bg-orange-300/30 rounded-full blur-3xl"
        />

        <div className="text-black px-50 text-[1rem]">
          <motion.p variants={fadeUp} className="pb-4">
            {ABOUT[0]}
          </motion.p>
          <motion.p variants={fadeUp}>{ABOUT[1]}</motion.p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
