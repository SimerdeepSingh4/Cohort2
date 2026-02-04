import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const params = useParams()
  console.log(params);
  return (
    <div>
    <h1 className='capitalize text-5xl underline font-semibold absolute top-1/2 left-1/2 -translate-1/2'>
      {params.courseId} Course Detail Page
    </h1></div>
  )
}

export default CourseDetail