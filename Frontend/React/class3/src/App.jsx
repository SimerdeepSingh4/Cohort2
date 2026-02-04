import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/Card';
const App = () => {
  const [users, setUsers] = useState([]) 

  async function getData(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    setUsers(response.data)
  }
    const deleteHandler = (idx) => {
    const copyData = [...users]
    const conf = confirm('Are you sure you want to delete a user?')
    if (conf) {
      copyData.splice(idx, 1)
    } else {
      return
    }
    setUsers(copyData)
  }
  useEffect(() => {
    return () => {
      getData()
    }
  }, [])
  
  return (
    <div className='text-white flex flex-col justify-center m-2 items-center gap-10'>
    {/* <button className='bg-red-500 p-2 rounded-lg w-fit' onClick={getData}>Click me</button> */}
    <div className='flex flex-row flex-wrap gap-5 justify-center items-center'>
      {users.map((elem,idx)=>{
        return <Card idx={idx} elem={elem} deleteHandler={deleteHandler}/>
      })}
    </div>
    </div>
  )
}

export default App