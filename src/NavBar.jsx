import React from "react";
import deadLogo from "./DEADPIXEL.DEV.svg"

const NavBar = () => {
    return (
        <div className={''}>
            <div className={'flex justify-between align-items-center w-100 shadow-xl sticky-top p-2 px-6'}>
                <img src={deadLogo} alt={"site logo"} />
                <div className={'hidden md:flex justify-between align-items-center'}>
                    <button className={'mx-2 text-white hover:text-[#D836BE] mx-10'}>home</button>
                    <button className={'mx-2 text-white hover:text-[#D836BE] mx-10'}>projects</button>
                    <button className={'mx-2 text-white hover:text-[#D836BE] mx-10'}>about</button>
                </div>
                <button className={'mx-2 bg-pink-600 rounded px-4 py-2 text-white'}>contact(me)</button>
            </div>
            <div className={'linerStroke pb-[1px] h-[1px]'}/>
        </div>
    )
}

export default NavBar