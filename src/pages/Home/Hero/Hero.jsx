import heroImage from '../../../assets/hero.png'
import NavBer from '../../../components/NavBer/NavBer'

function Hero() {

    return (
        <>
            <section className='relative'>
                {/* navber */}
                <div className='absolute top-0 w-full'>
                    <NavBer></NavBer>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/gFJXJTgp/Desktop-1.png)",
                    }}
                >
                    <div className="hero-overlay bg-white/75"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div >
                            <h1 className="mb-5 text-2xl md:text-5xl lg:text-6xl text-black font-bold">Technology Simplified <span className='block md:mt-2'>Delivered.</span></h1>
                            <p className="mb-4 w-9/12 mx-auto text-[var(--text)]">
                                We build smart, reliable, and user-friendly software solutions that help your business grow faster and smarter.
                            </p>
                            <button className="btn px-8 py-6 rounded-full text-white bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] border-0 hover:opacity-90">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
