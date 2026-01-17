import React from 'react'

function Footer() {
    return (
        <section>
            <div className='pt-80 pb-10'>
                <div className=''>
                    <p className='text-white text-center text-[1rem]'>© {new Date().getFullYear()} Seminar Portfolio. All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}

export default Footer