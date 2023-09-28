import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import AllPlayer from './components/AllPlayers';
import NavBar from './components/NavBar';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';





export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <NavBar />
        <div>

          <Routes>
            <Route path="/" element={<AllPlayer />} />
            <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
            <Route path="/:id" element={<SinglePlayer />} />
          </Routes>
        </div>
      </div>
    </>
  )
}


