import React from 'react'

function Contact() {
    return (
        <section id="contact">
            <div className='bg-white rounded-3xl pt-30 pb-30 relative'>
                <img className='absolute top-1 left-1/4 -translate-x-1/2 -translate-y-1/2 w-100 -rotate-25' src="8.png" alt="8" />
                <img className='absolute top-110 right-0 -translate-x-1/2 w-105 rotate-20' src="donisaur.png" alt="donisaur" />
                <h1 className="text-[10rem] font-bold text-center"
                    style={{ WebkitTextStroke: "4px black", color: "transparent" }}
                > CONTACT ME
                </h1>
                <p className='text-black text-center px-50 text-[1rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque officia, at eius quod, amet quibusdam similique iusto quidem, culpa nulla possimus. Dignissimos at ducimus dolorum necessitatibus dolorem tenetur incidunt corrupti?</p>
            </div>
        </section>
    )
}

export default Contact