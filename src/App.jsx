import { useState } from 'react'
import Toolbar from './components/Toolbar'
import Home from './components/Home'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toolbar />
      <h1>Vite + React</h1>
      <h1 className="text-5xl font-bold underline">
        Hello world!
      </h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
