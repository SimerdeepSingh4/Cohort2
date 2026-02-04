import React from 'react'

const View1 = () => {
    return (
        <div className='w-full p-6 flex flex-col  md:flex-row gap-4'>
            <div className='w-full md:w-[50%]'>
                <img className='w-full rounded-xl' src="https://assets-global.website-files.com/63cffb7c16ab3347fc9734c8/63d2cb2934d35c4b4c5b51da_studio-hero-p-1600.webp" alt="" />
            </div>
            <div className='md:w-[50%] bg-[#292929] p-6 md:p-12 flex md:justify-between flex-col gap-12 rounded-xl'>
                <p className='text-white uppercase font-[font1] text-xl'>
                    Studio
                </p>
                <div className='flex flex-col gap-3 md:gap-6'>
                    <h1 className='font-[font1] font-extralight text-4xl md:text-[3.7rem] text-[#F4F2ED] leading-normal uppercase'>How We Help Fashion Brands Stand Out</h1>
                    <p className='font-[font2] text-2xl md:text-[1rem] md:w-[60%] font-thin text-[rgba(244,242,237,0.6)] leading-[1.7]'>
                        We help fashion brands stand out with our expertise in branding,
                        marketing, and creative solutions that captivate audiences and
                        differentiate brands.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default View1