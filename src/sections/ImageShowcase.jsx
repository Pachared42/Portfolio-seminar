import React from 'react'
import CircularGallery from '../components/CircularGallery'
import { IMAGE_SHOWCASE } from '../constants/constants';
import { motion } from 'motion/react';

function ImageShowcase() {

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
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    }
    return (
        <section>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className='relative h-[30vh] md:h-[50vh] lg:h-[70vh]'
            >
                <h2
                    variants={fadeUp}
                    className="
            text-center font-bold text-white
            text-[clamp(1.75rem,3vw,2.25rem)]
          "
                >
                    {IMAGE_SHOWCASE.title}
                </h2>
                <CircularGallery
                    bend={0.3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.02}
                    scrollSpeed={1}
                />
            </motion.div>
        </section>
    )
}

export default ImageShowcase