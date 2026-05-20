import React from 'react'

const Card = ({props}) => {

  return (
    <div className='w-[300px] h-fit flex flex-col justify-center items-center border border-solid border-white p-[20px] rounded-xl bg-[#333] text-center text-white '>
    <img className='w-30 h-30 object-cover rounded-full ' src={props.profilePic} alt="" />
        <h1 className='text-3xl mb-4'>{props.username}</h1>
        <p className='leading-tight mb-4'>{props.description}</p>
        <button className='bg-red-300 py-[5px] px-[10px] active:scale-95 rounded-xl'>View Profile</button>
      </div>
  )
}

export default Card