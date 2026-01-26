import React, { useEffect, useRef } from "react";
import { PROJECTS } from "../constants/constants";
import { motion } from "framer-motion";

function Projects() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const slides = [PROJECTS[PROJECTS.length - 1], ...PROJECTS, PROJECTS[0]];

  const startAutoPlay = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider || isDragging.current) return;

      slider.scrollTo({
        left: slider.scrollLeft + slider.clientWidth,
        behavior: "smooth",
      });
    }, 3500);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.clientWidth;
    slider.scrollLeft = slideWidth;

    const onScroll = () => {
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slideWidth * PROJECTS.length;
      }

      if (slider.scrollLeft >= slideWidth * (PROJECTS.length + 1)) {
        slider.scrollLeft = slideWidth;
      }
    };

    slider.addEventListener("scroll", onScroll);
    startAutoPlay();

    return () => {
      slider.removeEventListener("scroll", onScroll);
      stopAutoPlay();
    };
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    stopAutoPlay();
    startX.current = e.pageX;
    startScrollLeft.current = sliderRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const walk = e.pageX - startX.current;
    sliderRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const snapToClosestSlide = () => {
    const slider = sliderRef.current;
    const slideWidth = slider.clientWidth;
    const index = Math.round(slider.scrollLeft / slideWidth);

    slider.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    snapToClosestSlide();
    startAutoPlay();
  };

  /* animations */
  const slideFade = {
    hidden: { opacity: 0, scale: 0.97 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const contentStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="projects"
      className="
        relative overflow-hidden
        pt-20 pb-14
        sm:pt-28 sm:pb-32
        lg:pt-36 lg:pb-24
      "
    >
      {/* Title */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          text-center font-bold text-white
          mb-16 sm:mb-20
          text-[clamp(3rem,9vw,11rem)]
        "
      >
        PROJECTS
      </motion.h1>

      {/* Slider */}
      <div
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className="
          flex overflow-x-hidden
          cursor-grab active:cursor-grabbing
          select-none
          border border-white/20 rounded-3xl
        "
      >
        {slides.map((project, index) => (
          <motion.div
            key={`${project.id}-${index}`}
            variants={slideFade}
            initial="hidden"
            animate="show"
            className="min-w-full px-4 sm:px-6 lg:px-10"
          >
            <div className="mx-auto max-w-6xl">
              <motion.div
                variants={contentStagger}
                initial="hidden"
                animate="show"
                className="
                  grid grid-cols-1
                  md:grid-cols-2
                  gap-10 lg:gap-16
                  items-center
                "
              >
                {/* Image */}
                <motion.img
                  variants={fadeUp}
                  src={project.image}
                  alt={project.title}
                  className="
                    w-[clamp(16rem,40vw,28rem)]
                    rounded-2xl
                    mx-auto
                    pointer-events-none
                  "
                />

                {/* Content */}
                <motion.div
                  variants={fadeUp}
                  className="text-white space-y-6"
                >
                  <motion.h2
                    variants={fadeUp}
                    className="
                      font-bold
                      text-[clamp(1.75rem,4vw,2.5rem)]
                    "
                  >
                    {project.title}
                  </motion.h2>

                  <motion.p
                    variants={fadeUp}
                    className="
                      text-white/80
                      leading-relaxed
                      text-[clamp(0.95rem,1.2vw,1.125rem)]
                    "
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="flex flex-wrap gap-3"
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-4 py-2
                          rounded-full
                          bg-white/10
                          text-[0.8rem]
                          sm:text-sm
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
