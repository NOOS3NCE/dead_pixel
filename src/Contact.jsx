import React from "react";

const Contact = ({innerRef}) => {
    return (
        <>
            <div ref={innerRef} className={'rounded-lg bg-[#23242799] md:m-9 p-2 font-mono text-[16px] text-[black] shadow-lg flex justify-center'}>
                <div className={'flex flex-col'}>
                    <h1 className={'text-[48px] p-4 text-pink-400'}>CONTACT(ME)</h1>
                <form className={'flex flex-col'}>
                    <input className={'p-2 m-2 w-[400px] '} name={'name'} placeholder={'Name'}/>
                    <input className={'p-2 m-2 w-[400px]'} name={'email'} placeholder={'Email'}/>
                    <input className={'p-2 m-2 w-[400px]'} name={'message'} placeholder={'Message'}/>
                </form>
                </div>
            </div>
        </>
    )
}

export default Contact