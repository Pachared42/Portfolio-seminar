import { ABOUT } from "../constants/constants"

function About() {
    return (
        <section id="about">
            <div className='bg-white rounded-3xl pt-30 pb-30 relative'>
                <img className='absolute top-1 left-1/4 -translate-x-1/2 -translate-y-1/2 w-100 -rotate-25' src="image.decorative/5.png" alt="5" />
                <img className='absolute top-110 right-0 -translate-x-1/2 w-105 rotate-20' src="image.decorative/fox.png" alt="fox" />
                <h1 className="text-[10rem] font-bold text-center"
                    style={{ WebkitTextStroke: "4px black", color: "transparent" }}
                > ABOUT ME
                </h1>
                <div className="absolute top-1 right-30 w-100 h-100 bg-orange-300/30 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-24 w-70 h-70 bg-orange-300/30 rounded-full blur-3xl" />
                <div className='text-black px-50 text-[1rem]'>
                    <p className="pb-4">{ABOUT[0]}</p>
                    <p>{ABOUT[1]}</p>
                </div>
            </div>
        </section>
    )
}

export default About