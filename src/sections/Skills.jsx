import React from 'react'
import { SKILLS, TOOLS, DATABASES, CLOUDS } from '../constants/constants'

function Skills() {
    return (
        <section id="skills">
            <div className="pt-30 pb-60">

                <h1 className="text-[10rem] font-bold text-white text-center">
                    SKILLS
                </h1>

                {/* SKILLS */}
                <div className="mt-20">
                    <h2 className="text-white text-center text-3xl mb-12">
                        ทักษะด้านเทคโนโลยี
                    </h2>

                    <div className="
                                    grid
                                    grid-cols-2
                                    sm:grid-cols-3
                                    md:grid-cols-4
                                    lg:grid-cols-6
                                    gap-10
                                    place-items-start
                                ">
                        {SKILLS.map((item, index) => (
                            <div
                                key={index}
                                className="
                                            group
                                            relative
                                            flex flex-col items-center
                                            transition-all duration-300 ease-out
                                            hover:-translate-y-2 hover:scale-110
                                        "
                            >
                                <div className="w-24 h-24 flex items-center justify-center">
                                    {Object.values(item).find(
                                        (val) => typeof val === 'object'
                                    )}
                                </div>

                                <div
                                    className="
                                                pointer-events-none
                                                absolute
                                                -bottom-7
                                                opacity-0
                                                group-hover:opacity-100
                                                transition-opacity duration-200
                                                bg-white text-black text-xs
                                                px-3 py-1 rounded-full
                                                whitespace-nowrap
                                            "
                                >
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TOOLS */}
                <div className="mt-32">
                    <h2 className="text-white text-center text-3xl mb-12">
                        เครื่องมือสำหรับการพัฒนา
                    </h2>

                    <div className="
                                    grid
                                    grid-cols-2
                                    sm:grid-cols-3
                                    md:grid-cols-4
                                    lg:grid-cols-6
                                    gap-10
                                    place-items-start
                                ">
                        {TOOLS.map((item, index) => (
                            <div
                                key={index}
                                className="
                                            group
                                            relative
                                            flex flex-col items-center
                                            transition-all duration-300 ease-out
                                            hover:-translate-y-2 hover:scale-110
                                        "
                            >
                                <div className="w-24 h-24 flex items-center justify-center">
                                    {Object.values(item).find(
                                        (val) => typeof val === 'object'
                                    )}
                                </div>

                                <div
                                    className="
                                                pointer-events-none
                                                absolute
                                                -bottom-7
                                                opacity-0
                                                group-hover:opacity-100
                                                transition-opacity duration-200
                                                bg-white text-black text-xs
                                                px-3 py-1 rounded-full
                                                whitespace-nowrap
                                            "
                                >
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DATABASES */}
                <div className="mt-32">
                    <h2 className="text-white text-center text-3xl mb-12">
                        ฐานข้อมูล
                    </h2>

                    <div className="
                                    grid
                                    grid-cols-2
                                    sm:grid-cols-3
                                    md:grid-cols-4
                                    lg:grid-cols-6
                                    gap-10
                                    place-items-start
                                "
                    >
                        {DATABASES.map((item, index) => (
                            <div
                                key={index}
                                className="
                                            group
                                            relative
                                            flex flex-col items-center
                                            transition-all duration-300 ease-out
                                            hover:-translate-y-2 hover:scale-110
                                        "
                            >
                                <div className="w-24 h-24 flex items-center justify-center">
                                    {Object.values(item).find(
                                        (val) => typeof val === 'object'
                                    )}
                                </div>

                                <div
                                    className="
                                                pointer-events-none
                                                absolute
                                                -bottom-7
                                                opacity-0
                                                group-hover:opacity-100
                                                transition-opacity duration-200
                                                bg-white text-black text-xs
                                                px-3 py-1 rounded-full
                                                whitespace-nowrap
                                            "
                                >
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CLOUDS */}
                <div className="mt-32">
                    <h2 className="text-white text-center text-3xl mb-12">
                        คลาวด์
                    </h2>

                    <div className="
                                    grid
                                    grid-cols-2
                                    sm:grid-cols-3
                                    md:grid-cols-4
                                    lg:grid-cols-6
                                    gap-10
                                    place-items-start
                                "
                    >
                        {CLOUDS.map((item, index) => (
                            <div
                                key={index}
                                className="
                                            group
                                            relative
                                            flex flex-col items-center
                                            transition-all duration-300 ease-out
                                            hover:-translate-y-2 hover:scale-110
                                        "
                            >
                                <div className="w-24 h-24 flex items-center justify-center">
                                    {Object.values(item).find(
                                        (val) => typeof val === 'object'
                                    )}
                                </div>

                                <div
                                    className="
                                                pointer-events-none
                                                absolute
                                                -bottom-7
                                                opacity-0
                                                group-hover:opacity-100
                                                transition-opacity duration-200
                                                bg-white text-black text-xs
                                                px-3 py-1 rounded-full
                                                whitespace-nowrap
                                            "
                                >
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
