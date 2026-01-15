import { HERO } from '../constants/constants'

function Hero() {
    return (
        <div className="relative pt-30 pb-60 overflow-hidden">
            <div className="relative z-10">
                <h1 className="text-[12rem] font-bold leading-none m-0 text-white">
                    HI, I'M {HERO.name}
                </h1>

                <h2
                    className="text-[8rem] font-bold leading-none m-1 -mt-2"
                    style={{ WebkitTextStroke: "1px white", color: "transparent" }}
                >
                    {HERO.greet3}
                </h2>
            </div>
            <img
                src="image.decorative/unnamed.png"
                alt="a"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-150 z-0"
            />
        </div>
    )
}

export default Hero
