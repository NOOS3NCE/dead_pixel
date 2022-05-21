import React from "react";

const Contact = ({innerRef}) => {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div ref={innerRef} className={'rounded-lg bg-[#23242799] md:m-9 p-4 font-mono text-[16px] text-[black] shadow-lg flex justify-center'}>
                <div className={'flex flex-col'}>
                    <h1 className={'text-[48px] p-4 text-pink-400'}>CONTACT(ME)</h1>
                <form className={'flex flex-col mb-10'}>
                    <input className={'p-2 m-2 w-[400px] '} name={'name'} placeholder={'Name'}/>
                    <input className={'p-2 m-2 w-[400px]'} name={'email'} placeholder={'Email'}/>
                    <textarea className={'p-2 m-2 w-[400px]'} name={'message'} placeholder={'Message'} rows={4}/>
                    <button className={'mx-2 bg-pink-600 rounded px-6 py-4 mt-10 text-white'} onClick={onSubmit}>send(it)</button>
                </form>
                </div>
            </div>
        </>
    )
}

export default Contact