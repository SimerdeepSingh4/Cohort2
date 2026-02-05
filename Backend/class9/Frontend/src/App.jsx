import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [notes, setNotes] = useState([])

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes")
      .then(res => {
        setNotes(res.data.notes)
        console.log(res.data);
      })
  }
  function handleDeleteNote(noteId) {
    axios.delete(`http://localhost:3000/api/notes/${noteId}`)
      .then(res => {
        fetchNotes()
      })

  }
  function handleUpdateNote(noteId) {
    const description = prompt("Enter new description")
    if (description == '') {
      return alert('description cannot be empty')
    } else {
      axios.patch(`http://localhost:3000/api/notes/${noteId}`, {
        description: description
      })
        .then(res => {
          fetchNotes()
        })
    }
  }



  function handleSubmit(e) {
    e.preventDefault()
    const { title, description } = e.target.elements;
    console.log(title.value, description.value);
    axios.post("http://localhost:3000/api/notes/", {
      title: title.value,
      description: description.value
    })
      .then(res => {
        fetchNotes()
      })

  }

  useEffect(() => {
    fetchNotes()

  }, [])



  return (
    <>
      <form className='note-create-form' onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='Enter Title' />
        <input name='description' type="text" placeholder='Enter Description' />
        <button>Create Note</button>
      </form>
      <div className="notes">
        {notes.map((note, idx) => (
          <div key={idx} className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <div className='btns'>
              <button onClick={() => { handleUpdateNote(note._id) }} className='upd-btn'>update</button>
              <button onClick={() => { handleDeleteNote(note._id) }} className='del-btn'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
