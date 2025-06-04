import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router'
import AddANote from './AddANote'
import NotesList from './NotesList'
import EditANote from './EditANote'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <NavLink to="/" style={{margin: "8px"}}>Home</NavLink>
    <NavLink to="/create"style={{margin: "8px"}}>Add A Note</NavLink>
    <NavLink to="/read" style={{margin: "8px"}}>My Notes</NavLink>
    <NavLink to="/edit" style={{margin: "8px"}}>Edit A Note</NavLink>
      <Routes>
        <Route path='/' element={<NotesList/>}/>
        <Route path='/create' element={<AddANote/>}/>
        <Route path='/read' element={<NotesList/>}/>
        <Route path='/edit' element={<EditANote/>}/>
      </Routes>
    </>
  )
}

export default App
