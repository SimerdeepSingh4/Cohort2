import React from 'react'

const View2 = () => {
    return (
        <div className='w-full p-4 flex flex-col md:flex-row gap-4 '>
            <div className='flex md:gap-10 gap-[0.2rem] justify-around  md:w-[50%]'>
                <div className=' text-center flex flex-col text-[rgba(244,242,237,0.6)] gap-2'>
                    <small className='uppercase font-[font3] font-medium opacity-[0.8] '>
                        Clients
                    </small>
                    <h2 className='font-[font1] text-5xl text-white font-light'>150+</h2>
                </div>
                <div className=' text-center flex flex-col text-[rgba(244,242,237,0.6)] gap-2'>
                    <small className='uppercase font-[font3]  font-medium opacity-[0.8] '>
                        Clients
                    </small>
                    <h2 className='font-[font1] text-5xl text-white font-light'>150+</h2>
                </div>
            </div>
            <div className='flex  md:gap-10 gap-[0.2rem] justify-around md:w-[50%]'>
                <div className=' text-center flex flex-col text-[rgba(244,242,237,0.6)] gap-2'>
                    <small className='uppercase font-[font3]  font-medium opacity-[0.8] '>Happy Clients</small>
                    <h2 className='font-[font1] text-5xl font-light text-white'>100%</h2>
                </div>
                <div className=' text-center flex flex-col text-[rgba(244,242,237,0.6)] gap-2'>
                    <small className='uppercase font-[font3]  font-medium opacity-[0.8] '>
                        Followers
                    </small>
                    <h2 className='font-[font1] text-5xl text-white font-light '>200k</h2>
                </div>
            </div>
        </div>
    )
}

export default View2