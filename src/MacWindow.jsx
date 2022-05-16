import React from "react";
import MacButtons from "./Mac Buttons.svg"
import wildorchid from "./wildorchid_screen_shot.png"

const MacWindow = () => {
    return (
        <>
            <div className={'rounded-lg bg-[#232427] md:m-9 p-2 relative font-mono text-[16px] text-[#53FFC1] shadow-lg'}>
                <div className={'absolute top-0 left-0'}>
                    <img className={'m-3'} src={MacButtons} alt={'some buttons'}/>
                </div>
                <div className={'flex flex-row-reverse flex-wrap justify-between align-items-center overflow-hidden p-2 pt-10 md:p-10'}>
                    <img className={'h-[100%] hover:scale-[1.02] transition-all linear duration-300 shadow-lg rounded-lg'} src={wildorchid} alt={'website screen shot'}/>
                    <div className={'flex-column m-2 text-left'}>
                        <h3 className={'text-[24px] text-pink-400'}>wildorchid.one</h3>
                        <h6 className={'mb-10'}>An inventory management system</h6>
                        <p className={'text-white text-left max-w-[600px] mt-10 md:mt-0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed.</p>
                        <button className={'bg-pink-600 rounded px-6 py-4 text-white m-0 mt-10 text-left'}>view(live_site)</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MacWindow