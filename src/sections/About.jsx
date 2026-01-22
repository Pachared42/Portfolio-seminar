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
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageItem = {
    hidden: { opacity: 0, y: 40, rotate: -10 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const glowItem = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
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
          variants={imageItem}
          src="image.decorative/5.png"
          alt="5"
          className="
            absolute top-0 left-[20%]
            -translate-x-1/2 -translate-y-1/2
            w-[16rem] sm:w-[20rem] lg:w-[24rem]
            -rotate-12
            opacity-40 sm:opacity-70
            pointer-events-none
          "
        />

        <motion.img
          variants={imageItem}
          src="image.decorative/fox.png"
          alt="fox"
          className="
            absolute top-[65%] right-[-10%] lg:right-0
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
          ABOUT ME
        </motion.h1>

        {/* Glow Effects */}
        <motion.div
          variants={glowItem}
          className="
            absolute top-10 right-[15%]
            w-[18rem] h-72
            bg-orange-300/30
            rounded-full blur-3xl
            pointer-events-none
          "
        />

        <motion.div
          variants={glowItem}
          className="
            absolute bottom-10 left-[10%]
            w-56 h-56
            bg-orange-300/30
            rounded-full blur-3xl
            pointer-events-none
          "
        />

        {/* Content */}
        <div
          className="
            relative z-10
            text-black
            mx-auto
            mt-10
            px-4 sm:px-8 lg:px-24 xl:px-40
            max-w-5xl
            text-[clamp(1rem,1.2vw,1.125rem)]
            leading-relaxed
          "
        >
          <motion.p variants={fadeUp} className="mb-4">
            {ABOUT[0]}
          </motion.p>
          <motion.p variants={fadeUp}>
            {ABOUT[1]}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
