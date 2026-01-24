import React from "react";
import { motion } from "framer-motion";
import { VIDEO_SHOWCASE } from "../constants/constants";

function VideoShowcase() {
    const container = {
        hidden: {},
        show: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const cardHover = {
        hover: {
            y: -6,
            scale: 1.02,
            transition: { duration: 0.25, ease: "easeOut" },
        },
    };

    return (
        <section className="relative pt-14 pb-44">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="mx-auto max-w-7xl px-4 sm:px-8"
            >
                {/* Title */}
                <motion.h2
                    variants={fadeUp}
                    className="
            text-center font-bold text-white mb-16
            text-[clamp(1.75rem,3vw,2.25rem)]
          "
                >
                    {VIDEO_SHOWCASE.title}
                </motion.h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {VIDEO_SHOWCASE.items.map((video, index) => (
                        <motion.a
                            key={index}
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeUp}
                            whileHover="hover"
                            className="
                group block overflow-hidden
                rounded-2xl
                bg-white/5
                backdrop-blur
              "
                        >
                            <motion.div variants={cardHover}>
                                {/* Video Preview */}
                                <div className="relative">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-56 object-cover"
                                    />

                                    {/* Play Overlay */}
                                    <div className="
                    absolute inset-0
                    flex items-center justify-center
                    bg-black/20
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  ">
                                        <div className="
                      w-14 h-14
                      rounded-full
                      bg-white
                      text-black
                      flex items-center justify-center
                      text-xl
                    ">
                                            ▶
                                        </div>
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="p-6 text-white space-y-1">
                                    <h3 className="font-semibold text-lg">
                                        {video.title}
                                    </h3>
                                    <p className="text-sm text-white/70">
                                        {video.description}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default VideoShowcase;