import { HERO } from "../constants/constants";
import { motion } from "framer-motion";

function Hero() {
  const sectionContainer = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const textItem = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const imageItem = {
    hidden: {
      opacity: 0,
      x: 120,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      variants={sectionContainer}
      initial="hidden"
      animate="show"
      className="
        relative overflow-hidden
        pt-20 pb-40
        sm:pt-28 sm:pb-48
        lg:pt-40 lg:pb-80
      "
    >
      {/* Text */}
      <div className="relative z-10">
        <motion.h1
          variants={textItem}
          className=" font-bold leading-none text-white m-0 text-[clamp(3.5rem,10vw,15rem)] " >
          HI, I&apos;M {HERO.name}
        </motion.h1>
        <motion.h2
          variants={textItem}
          className=" font-bold leading-none -mt-2 text-transparent text-[clamp(3rem,9vw,11rem)] [-webkit-text-stroke:clamp(1px,0.15vw,3px)_white] " >
          {HERO.greet4}
        </motion.h2>
      </div>

      {/* Decorative Image */}
      <motion.img
        variants={imageItem}
        src="image.Hero/Hero3.jpg"
        alt="decorative"
        className="
          absolute top-1/2 -translate-y-1/2
          right-[-15%] sm:right-[-10%] lg:right-0
          w-[18rem] sm:w-[24rem] md:w-120 lg:w-xl xl:w-2xl
          opacity-40 sm:opacity-70
          pointer-events-none
          z-0
        "
      />
    </motion.section>
  );
}

export default Hero;
