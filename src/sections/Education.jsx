import React from 'react'
import { EDUCATION } from '../constants/constants'

function Education() {
    return (
        <section id="education">
            <div className='bg-white rounded-3xl pt-30 pb-30 relative'>

                <img
                    className='absolute top-1 left-1/4 -translate-x-1/2 -translate-y-1/2 w-100 -rotate-25'
                    src="image.decorative/parrot.png"
                    alt="parrot"
                />
                <img
                    className='absolute top-230 right-0 -translate-x-1/2 w-120 rotate-20'
                    src="image.decorative/w.png"
                    alt="w"
                />

                <h1
                    className="text-[10rem] font-bold text-center"
                    style={{ WebkitTextStroke: "4px black", color: "transparent" }}
                >
                    EDUCATION
                </h1>

                <div className="absolute top-20 right-30 w-80 h-80 bg-green-300/30 rounded-full blur-3xl" />
                <div className="absolute bottom-24 left-24 w-120 h-120 bg-green-300/30 rounded-full blur-3xl" />

                <div className="mt-20 px-50 space-y-12 text-black">
                    {EDUCATION.map((item, index) => (
                        <div key={index}>
                            <h3 className="text-2xl font-bold">
                                {item.degree}
                            </h3>

                            <p className="text-gray-700 mt-1">
                                {item.institution}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                {item.duration}
                            </p>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education