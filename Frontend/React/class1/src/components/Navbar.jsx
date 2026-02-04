import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'
const Navbar = (props) => {
  const name = useContext(UserDataContext)
  return (
    <div className='bg-emerald-600 h-30 w-full'>
      <h1 className='text-xl'>This is Navbar</h1>
      <h2>this is {name}</h2>
    </div>
  )
}

export default Navbar