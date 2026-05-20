import React from 'react'
import Card from './component/Card'
import { useState } from 'react';



const App = () => {
  const users = [
  {
    profilePic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Simerdeep Singh Gandhi",
    description: "I am a fullstack developer"
  },
  {
    profilePic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Simerdeep Singh Gandhi",
    description: "I am a fullstack developer"
  },
  {
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Aarav Mehta",
    description: "I am a frontend developer"
  },
  {
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Priya Sharma",
    description: "I am a backend developer"
  },
  {
    profilePic: "https://images.unsplash.com/photo-1530505580493-3fa88046af67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Rohan Verma",
    description: "I am a UI/UX designer"
  },
  {
    profilePic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Neha Kapoor",
    description: "I am a mobile app developer"
  }
];

const [name, setName] = useState(null)
const [description, setDescription] = useState(null)
const [url, setUrl] = useState(null)

const handleSubmit = (e) => {
  e.preventDefault();
  users.push({
    profilePic: url,
    username: name,
    description: description
  })
  setName(null)
  setDescription(null)
  setUrl(null)
  console.log(users);
}
  return (
    <div className='bg-[#333] p-[20px] flex justify-center items-center h-screen flex-wrap gap-3 shrink-0'>
      {users.map((user, idx) => {
        return <Card key={idx} props={user} />
      })}
      <div >
        <form className='w-[300px] h-fit flex flex-col justify-center items-center border border-solid border-white p-[20px] rounded-xl bg-[#333] text-center text-white gap-2' onSubmit={(e) =>{
          handleSubmit(e)
        }}>
          <input type="text" id="name" placeholder='Enter your name' value={name} onInput={(e)=>{setName(e.target.value)}} />
          <input type="text" id="description" placeholder='Enter your description' onInput={(e) =>{setDescription(e.target.value)}}/>
          <input type="text" id="url" placeholder='Enter your profile pic url'  />
          <button className='bg-red-300 py-[5px] px-[10px] active:scale-95 rounded-xl'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App