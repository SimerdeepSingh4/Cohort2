import React from 'react'
import Card from './components/Card'

const App = () => {
  const cardData ={
    userName: 'Anubhav',
    role: 'Engineer',
    email: 'anubhav@gmail.com',
    img: 'https://plus.unsplash.com/premium_photo-1767883339990-1a3e9676a9c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
  }
  return (
    <>
      <Card cardData={cardData} />
    </>
  )
}

export default App