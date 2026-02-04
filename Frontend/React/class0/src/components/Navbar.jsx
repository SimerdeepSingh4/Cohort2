import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full p-6 pb-0 flex justify-between items-center'>
            <p className='text-[#F4F2ED] uppercase font-extralight text-2xl font-[font1]'>
                alvy
            </p>
            <div className='flex gap-4 font-[font3]'>
                <button className="hidden md:flex items-center justify-center border-none cursor-pointer p-3 text-white bg-[#1e1e1e] rounded-xl  ">PROJECTS</button>
                <button className="hidden md:flex items-center justify-center border-none cursor-pointer p-3 text-white bg-[#1e1e1e] rounded-xl ">SERVICES</button>
                <button className="hidden md:flex items-center justify-center border-none cursor-pointer p-3 text-white bg-[#1e1e1e] rounded-xl ">STUDIO</button>
                <button className="hidden md:flex items-center justify-center border-none cursor-pointer p-3 text-white bg-[#1e1e1e] rounded-xl ">BLOG</button>
                <button className="hidden md:flex items-center justify-center border-none cursor-pointer p-3 text-white bg-[#1e1e1e] rounded-xl "> PAGES</button>
                <button className="hidden md:flex items-center justify-center border-none cursor-pointer p-3 text-white bg-[#1e1e1e] rounded-xl ">CART &nbsp;<div className="bg-[#cebd63] font-[font3] text-[#1A1A1A] flex items-center justify-center py-1 px-2 rounded-[50%]">0</div></button>
                <button className="bg-[#cebd63] py-3.5 px-5.25 cursor-pointer font-normal text-[#1A1A1A] uppercase border-none outline-none rounded-lg hover:bg-[#aec172]">GET IN TOUCH</button>
            </div>
        </div>
    )
}

export default Navbar