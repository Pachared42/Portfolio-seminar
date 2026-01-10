import { HERO } from '../constants/constants'

function Hero() {
    return (
        <div className="pt-30 pb-60">
            <h1 className='text-[10rem] font-bold font-stretch-50% text-white text-center'>HI, I'M {HERO.name}</h1>
            <p className='text-center text-[5rem]' style={{ WebkitTextStroke: "1px white", color: "transparent" }}>{HERO.greet}</p>
            <img src="a.png" alt="a" className="mx-auto w-100" />
        </div>
    )
}
export default Hero