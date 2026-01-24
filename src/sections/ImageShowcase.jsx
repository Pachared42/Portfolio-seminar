import React from 'react'
import { motion } from 'framer-motion'
import { IMAGE_SHOWCASE } from '../constants/constants';

function ImageShowcase({ title, items }) {
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
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const cardHover = {
        hover: {
            y: -8,
            scale: 1.03,
            transition: { duration: 0.25, ease: "easeOut" },
        },
    };

    return (
        <section className="relative py-14">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mx-auto max-w-7xl px-4 sm:px-8"
            >
                {/* Title */}
                <motion.h2
                    variants={fadeUp}
                    className="
            text-center font-bold text-white
            mb-16
            text-[clamp(1.5rem,3vw,1.875rem)]
          "
                >
                    {IMAGE_SHOWCASE.title}
                </motion.h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {IMAGE_SHOWCASE.items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover="hover"
                            className="
                group relative overflow-hidden
                rounded-2xl
                bg-white/5
                cursor-pointer
              "
                        >
                            <motion.img
                                variants={cardHover}
                                src={item.image}
                                alt={item.title}
                                className="
                  w-full h-full object-cover
                  transition-transform duration-300
                "
                            />

                            {/* Overlay */}
                            <div
                                className="
                  absolute inset-0
                  bg-black/50
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  flex items-end
                "
                            >
                                <div className="p-6 text-white">
                                    <h3 className="font-semibold text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-white/80">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default ImageShowcase