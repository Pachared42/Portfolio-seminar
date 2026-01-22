import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants/constants";

function Contact() {
    return (
        <section id="contact" className="px-4 md:px-10">
            <div className="relative bg-white rounded-3xl pt-24 pb-24">

                {/* Decorative Images */}
                <img
                    src="image.decorative/8.png"
                    alt="8"
                    className="
            absolute
            top-0 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-55 md:w-[320px] lg:w-100
            -rotate-25
            pointer-events-none
          "
                />

                <img
                    src="image.decorative/donisaur.png"
                    alt="donisaur"
                    className="
            absolute
            top-104 -right-16
            w-65 md:w-90 lg:w-105
            rotate-12
            pointer-events-none
          "
                />

                {/* Title */}
                <h1
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
                </h1>

                {/* Description */}
                <p className="
          mx-auto mt-6
          max-w-3xl
          text-center text-black
          text-sm sm:text-base
          px-4 sm:px-8
        ">
                    หากคุณสนใจร่วมงาน มีคำถามเพิ่มเติม หรืออยากพูดคุยเกี่ยวกับโปรเจกต์ต่างๆ
                    สามารถติดต่อผมได้ผ่านช่องทางโซเชียลมีเดียด้านล่างนี้
                    ผมยินดีรับฟังและตอบกลับทุกการติดต่อ
                </p>

                {/* Social Icons */}
                <div className="mt-10 flex justify-center gap-8">
                    {SOCIAL_MEDIA_LINKS.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                text-3xl sm:text-4xl
                text-black
                hover:text-gray-600
                transition-colors duration-300
              "
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;