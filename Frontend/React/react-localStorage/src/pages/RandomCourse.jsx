import React from 'react'
import { Link, useParams } from 'react-router-dom';

const RandomCourse = () => {
    const params = useParams()
  console.log(params);
  return (
    <div>
    <h1 className='capitalize text-5xl underline font-semibold absolute top-1/2 left-1/2 -translate-1/2'>
      {params.courseId} Course Page
    </h1>
    <Link className='px-3 py-2 bg-red-500 rounded-2xl' to={`/courses/${params.courseId}/detail`}>
    Click to get Details</Link></div>
  )
}

export default RandomCourse