import React from "react";
import headShot from "./portrait-young-handsome-hipster-man-600w-674194966.png";
import diamondLogo from "./Diamond.svg";
import HexBackground from "./hexBackground";
import Diamond from "./Diamond";

const Intro = () => {
    return (
        <>
            <div className={'flex-column md:flex justify-between align-items-center lg:pl-10 lg:pr-10 lg:h-[80vh] relative overflow-hidden z-10 sm:w-[100vw]'}>
                <div className={'absolute font-mono text-[20px] text-[#53FFC1] hidden m-0'}>
                    <p>halemikehale@gmail.com</p>
                    <div className={'min-w-[200px] max-h-[1px] bg-[#53FFC1] m-[14px]'}/>
                </div>
                <div className={'max-w-[600px] height-[100vh] text-left lg:ml-[100px] mt-[5%] font-mono text-[16px] text-white flex-row'}>
                    <div className={'animate-bg_draw shadow-xl p-4'}>
                        <p className={'animation-delay-1500 animate-slide opacity-0 text-[#D836BE] my-4'}>def introduce(self):</p>
                        <p className={'animation-delay-1500 animate-slide opacity-0 ml-5 my-4'}>Hello, I'm</p>
                        <p className={'animation-delay-1500 animate-slide opacity-0 text-[#53FFC1] font-bold ml-5 text-[80px] font-[Impact] leading-[70px]'}>Michael Cummings</p>
                        <p className={'animation-delay-1500 animate-slide opacity-0 ml-5 mt-10 text-[16px]'}>Nunc eget lorem dolor sed. A diam maecenas sed enim. Iaculis at erat pellentesque adipiscing commodo elit. Nunc eget lorem dolor sed. A diam maecenas sed enim. Iaculis at erat pellentesque adipiscing commodo elit. Nunc eget lorem dolor sed. A diam maecenas sed enim. Iaculis at erat pellentesque adipiscing commodo elit.</p>
                        <button className={'animation-delay-1500 animate-slide opacity-0 mx-2 bg-pink-600 rounded px-6 py-4 mt-10 text-white'}>contact(me)</button>
                    </div>
                </div>
                <div className={'static flex flex-column justify-center align-center object-contain relative'}>
                    <img className={'animation-delay-1000 animate-slide_slow opacity-0 absolute bottom-20 lg:bottom-[100px] scale-[1.8] max-w-[280px] z-20'} src={headShot} alt={"its me"}/>
                    <div  className={'animation-delay-1000 animate-slide opacity-0 absolute bottom-0 sm:max-w-[400px] lg:max-w-[800px] z-10'}>
                        <Diamond className={'animate-diamondLogo'}/>
                    </div>
                </div>
                {/*<img style={{'stroke-dasharray': 200}} className={'absolute scale-[3.0] right-0 origin-center rotate-90 opacity-30 z-0'} src={pattern} alt={'cyberpunk grid'}/>*/}
                <div className={'absolute scale-[3.0] right-0 origin-center rotate-90 opacity-60 z-0'}>
                    <HexBackground className={'animate-hexBackground'} />
                </div>
            </div>
        </>
    )
}

export default Intro