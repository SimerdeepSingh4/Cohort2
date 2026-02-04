import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-8 py-4 bg-pink-900 flex justify-between items-center mb-10'>
        <div>
            <Link to={'/'}>Logo</Link>
        </div>
        <div className='flex gap-4 p-3'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/courses'}>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar