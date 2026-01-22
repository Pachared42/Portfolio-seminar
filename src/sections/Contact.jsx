import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants/constants'

function Contact() {
    return (
        <section id="contact">
            <div className='bg-white rounded-3xl pt-30 pb-30 relative'>
                <img
                    className='absolute top-1 left-1/4 -translate-x-1/2 -translate-y-1/2 w-100 -rotate-25'
                    src="image.decorative/8.png"
                    alt="8"
                />
                <img
                    className='absolute top-110 -right-10 -translate-x-1/2 w-105 rotate-20'
                    src="image.decorative/donisaur.png"
                    alt="donisaur"
                />

                <h1
                    className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[9rem] lx:text-[11rem] font-bold text-center text-transparent [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:3px_black] sm:[-webkit-text-stroke:0.5px_black]"
                >
                    CONTACT ME
                </h1>

                <p className='text-black text-center px-50 text-[1rem]'>
                    หากคุณสนใจร่วมงาน มีคำถามเพิ่มเติม หรืออยากพูดคุยเกี่ยวกับโปรเจกต์ต่างๆ สามารถติดต่อผมได้ผ่านช่องทางโซเชียลมีเดียด้านล่างนี้ ผมยินดีรับฟังและตอบกลับทุกการติดต่อ
                </p>
                <div className="flex justify-center gap-10 mt-10">
                    {SOCIAL_MEDIA_LINKS.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl text-black hover:text-gray-800 transition-colors duration-300 cursor-pointer"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact
