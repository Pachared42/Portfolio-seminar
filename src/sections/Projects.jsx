import React, { useEffect, useRef } from 'react'
import { PROJECTS } from '../constants/constants'

function Projects() {
    const sliderRef = useRef(null)
    const intervalRef = useRef(null)

    // clone head + tail
    const slides = [
        PROJECTS[PROJECTS.length - 1],
        ...PROJECTS,
        PROJECTS[0],
    ]

    const startAutoPlay = () => {
        if (intervalRef.current) return

        intervalRef.current = setInterval(() => {
            const slider = sliderRef.current
            if (!slider) return

            slider.scrollBy({
                left: slider.clientWidth,
                behavior: 'smooth',
            })
        }, 3500)
    }

    const stopAutoPlay = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }

    useEffect(() => {
        const slider = sliderRef.current
        if (!slider) return

        const slideWidth = slider.clientWidth

        // start at first real slide
        slider.scrollLeft = slideWidth

        const onScroll = () => {
            if (slider.scrollLeft <= 0) {
                // jumped to clone before first
                slider.scrollLeft = slideWidth * projects.length
            }

            if (
                slider.scrollLeft >=
                slideWidth * (projects.length + 1)
            ) {
                // jumped to clone after last
                slider.scrollLeft = slideWidth
            }
        }

        slider.addEventListener('scroll', onScroll)
        startAutoPlay()

        return () => {
            slider.removeEventListener('scroll', onScroll)
            stopAutoPlay()
        }
    }, [])

    return (
        <section id="projects" className="pt-30 pb-30">
            <h1 className="text-[8rem] font-bold text-white text-center mb-20">
                PROJECT
            </h1>

            <div
                ref={sliderRef}
                onMouseEnter={stopAutoPlay}
                onMouseLeave={startAutoPlay}
                className="flex overflow-x-hidden snap-x snap-mandatory"
            >
                {slides.map((project, index) => (
                    <div
                        key={`${project.id}-${index}`}
                        className="min-w-full snap-start px-6"
                    >
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-2xl w-full max-w-md mx-auto"
                                />

                                <div className="text-white space-y-6">
                                    <h2 className="text-4xl font-bold">
                                        {project.title}
                                    </h2>

                                    <p className="text-white/80">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 rounded-full bg-white/10 text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects