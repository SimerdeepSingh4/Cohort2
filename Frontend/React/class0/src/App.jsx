import React from 'react'
import Navbar from './components/Navbar'
import View1 from './components/View1'
import View2 from './components/View2'

const App = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <Navbar/>
      <View1/>
      <View2/>
    </div>
    
  )
}

export default App