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
    const target = index * slideWidth;

    slider.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    snapToClosestSlide();
    startAutoPlay();
  };

  const sectionFade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideFade = {
    hidden: { opacity: 0, scale: 0.96 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentStagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="pt-30 pb-30">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-[8rem] font-bold text-white text-center mb-20"
      >
        PROJECT
      </motion.h1>

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
                "
      >
        {slides.map((project, index) => (
          <motion.div
            key={`${project.id}-${index}`}
            variants={slideFade}
            initial="hidden"
            animate="show"
            className="min-w-full px-6"
          >
            <div className="p-6">
              <motion.div
                variants={contentStagger}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <motion.img
                  variants={fadeUp}
                  src={project.image}
                  alt={project.title}
                  className="w-80 rounded-2xl max-w-md mx-auto pointer-events-none"
                />

                <motion.div className="text-white space-y-6">
                  <motion.h2 variants={fadeUp} className="text-4xl font-bold">
                    {project.title}
                  </motion.h2>

                  <motion.p
                    variants={fadeUp}
                    className="text-white/80 leading-relaxed"
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
                        className="px-4 py-2 rounded-full bg-white/10 text-sm"
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
