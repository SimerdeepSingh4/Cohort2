import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Card from './components/Cards'
import Courses from './pages/Courses'
import RandomCourse from './pages/RandomCourse'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'
const App = () => {

  
  
  return (
    <div className='h-screen w-full bg-black text-white'>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/*' element={<NotFound/>}/>
      <Route path ='/courses/:courseId' element = {<RandomCourse/>}/>
      <Route path ='/courses/:courseId/detail' element = {<CourseDetail/>}/>

    </Routes>
    </div>
  )
}

export default App