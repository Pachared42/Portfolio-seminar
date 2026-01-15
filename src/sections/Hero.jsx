import { HERO } from "../constants/constants";
import { motion } from "framer-motion";

function Hero() {
  const container = {
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
      y: 80,
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
      x: 200,
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
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative pt-30 pb-60 lg:pb-80 overflow-hidden"
    >
      <div className="relative z-10">
        <motion.h1
          variants={textItem}
          className="text-[12rem] font-bold leading-none m-0 text-white"
        >
          HI, I'M {HERO.name}
        </motion.h1>

        <motion.h2
          variants={textItem}
          className="sm:text-[8rem] lg:text-[11rem] font-bold leading-none -mt-2"
          style={{
            WebkitTextStroke: "1px white",
            color: "transparent",
          }}
        >
          {HERO.greet4}
        </motion.h2>
      </div>

      <motion.img
        variants={imageItem}
        src="image.decorative/unnamed.png"
        alt="decorative"
        className="absolute right-0 top-120 -translate-y-1/2 sm:w-150 lg:w-180 z-0"
      />
    </motion.div>
  );
}

export default Hero;
