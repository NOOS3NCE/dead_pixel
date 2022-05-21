import React from "react";
import headShot from "./profile_picture.png";
import HexBackground from "./hexBackground";
import Diamond from "./Diamond"

const Intro = ({innerRef, contactCallback}) => {
    return (
        <>
            <div ref={innerRef}  className={'flex-col flex lg:flex-row justify-between align-items-center lg:pl-10 lg:pr-10 h-[100vh] relative overflow-hidden z-10 w-[100vw] align-items-center'}>
                <div className={'absolute font-mono text-[20px] text-[#53FFC1] hidden m-0'}>
                    <p>halemikehale@gmail.com</p>
                    <div className={'min-w-[200px] max-h-[1px] bg-[#53FFC1] m-[14px]'}/>
                </div>
                <div id={'introCard'} className={'max-w-[600px] my-20 lg:my-[auto] text-left lg:ml-[100px] font-mono text-[16px] text-white p-2'}>
                    <div className={'p-4 flex-col justify-between align-items-center'}>
                        <p className={'typewriter text-[#D836BE] my-4 max-w-[255px]'}>def introduce(self):</p>
                        <p className={'animation-delay-1200 relative animate-slide_right opacity-0 ml-5 my-4'}>Hello, I'm</p>
                        <p className={'animation-delay-1300 relative animate-slide_right opacity-0 text-[#53FFC1] font-bold ml-5 text-[80px] font-[Geo] font-bold leading-[70px]'}>Michael Cummings</p>
                        <p className={'animation-delay-1400 relative animate-slide_right opacity-0 ml-5 mt-10 text-[16px]'}>I am a front end software engineer, and I am always looking for opportunities to grow personally and professionally. Also I like to make cool shit.</p>
                        <button className={'animation-delay-1500 relative animate-slide_right opacity-0 mx-2 bg-pink-600 rounded px-6 py-4 mt-10 text-white'}onClick={contactCallback}>contact(me)</button>
                    </div>
                </div>
                <div className={'flex flex-col justify-center align-center object-contain relative'}>
                    <img className={'animation-delay-1000 animate-slide_slow_mobile lg:animate-slide_slow opacity-0 absolute bottom-0 lg:bottom-[100px] lg:scale-[2.2] max-w-[280px] z-20 ml-20 lg:ml-0'} src={headShot} alt={"its me"}/>
                    <div  className={'animation-delay-1000 animate-slide_mobile lg:animate-slide opacity-0 absolute bottom-[-25vh] lg:top-[40vh] scale-[.6] lg:scale-[1.2] max-w-[200px] lg:max-w-[800px] z-10'}>
                        <Diamond className={'animate-diamondLogo'}/>
                    </div>
                </div>
                {/*<img style={{'stroke-dasharray': 200}} className={'absolute scale-[3.0] right-0 origin-center rotate-90 opacity-30 z-0'} src={pattern} alt={'cyberpunk grid'}/>*/}
                <div className={'absolute scale-[3.0] right-[5vw] top-[25vh] origin-center rotate-90 opacity-60 z-0'}>
                    <HexBackground className={'animate-hexBackground'} />
                </div>
            </div>
        </>
    )
}

export default Intro