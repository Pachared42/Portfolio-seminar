import React from 'react'

function About() {
    return (
        <section>
            <div className='bg-white rounded-3xl pt-30 pb-30 relative'>
                <img className='absolute top-1 left-1/4 -translate-x-1/2 -translate-y-1/2 w-100 -rotate-25' src="5.png" alt="5" />
                <img className='absolute top-110 right-0 -translate-x-1/2 w-105 rotate-20' src="fox.png" alt="fox" />
                <h1 className="text-[10rem] font-bold text-center"
                    style={{ WebkitTextStroke: "4px black", color: "transparent" }}
                > ABOUT ME
                </h1>
                <p className='text-black text-center px-50 text-[1rem]'>ผมเป็นนักศึกษาระดับปริญญาตรี จากมหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์สุพรรณบุรี มีความหลงใหลในการออกแบบและพัฒนาเว็บไซต์ โดยเฉพาะในสายงาน Front-End Developer พร้อมให้ความสำคัญกับการสร้างสรรค์ผลงานที่สวยงามและตอบโจทย์ผู้ใช้งานอยู่เสมอ
                    ด้วยความมุ่งมั่นในการเรียนรู้และพัฒนาทักษะอย่างต่อเนื่อง ผมตั้งเป้าหมายในการเติบโตสู่การเป็น Lead Front-End Developer โดยเน้นการออกแบบซอฟต์แวร์ที่มีคุณภาพ และประสบการณ์ผู้ใช้ที่ดีเยี่ยมควบคู่กันไป</p>
            </div>
        </section>
    )
}

export default About