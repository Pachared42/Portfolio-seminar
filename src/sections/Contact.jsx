import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants/constants";
import { motion } from "framer-motion";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";

function Contact() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 60 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.15,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    const imageFloat = {
        hidden: { opacity: 0, y: 60, rotate: -10 },
        show: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    const glowFade = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 1.2, ease: "easeOut" },
        },
    }

    return (
        <section id="contact" className="relative">
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative bg-white rounded-3xl pt-24 pb-24"
            >
                {/* Decorative Images */}
                <motion.img
                    src="image.decorative/8.png"
                    alt="8"
                    variants={imageFloat}
                    className="
            absolute top-0 left-20 lg:left-40
            -translate-x-1/2 -translate-y-1/2
            w-55 md:w-[320px] lg:w-100
            -rotate-25 pointer-events-none
          "
                />

                <motion.img
                    src="image.decorative/donisaur.png"
                    alt="donisaur"
                    variants={imageFloat}
                    className="
            absolute top-85 -right-5
            w-60 md:w-80 lg:w-100
            rotate-12 pointer-events-none
          "
                />

                {/* Title */}
                <motion.h1
                    variants={fadeUp}
                    className="
            text-center font-bold text-transparent
            text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]
            [-webkit-text-stroke:0.75px_black]
            sm:[-webkit-text-stroke:1px_black]
            md:[-webkit-text-stroke:2px_black]
            lg:[-webkit-text-stroke:3px_black]
          "
                >
                    CONTACT ME
                </motion.h1>

                <motion.div
                    variants={glowFade}
                    className="
                            absolute top-16 right-[15%]
                            w-[18rem] h-72
                            bg-purple-300/30
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

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    className="
            mx-auto mt-6 max-w-3xl
            text-center text-black
            text-sm sm:text-base
            px-4 sm:px-8
          "
                >
                    หากคุณสนใจร่วมงาน มีคำถามเพิ่มเติม หรืออยากพูดคุยเกี่ยวกับโปรเจกต์ต่างๆ
                    สามารถติดต่อผมได้ผ่านช่องทางโซเชียลมีเดียด้านล่างนี้
                    ผมยินดีรับฟังและตอบกลับทุกการติดต่อ
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    variants={fadeUp}
                    className="mt-10 flex justify-center gap-8"
                >
                    {SOCIAL_MEDIA_LINKS.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={iconVariants}
                            whileHover={{ scale: 1.2, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                text-3xl sm:text-4xl
                text-black hover:text-gray-600
                transition-colors duration-300
              "
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Contact;