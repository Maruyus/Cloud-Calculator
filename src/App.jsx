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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1 className="text-5xl font-bold underline">
        Hello world!
      </h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
