import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './nav'
import About from './About'

function App() {
  const [count, setCount] = useState(0)
  const [a, setA] = useState(1)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" className='rotate'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className='rotate'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Corrected: use a single arrow function to call both functions sequentially */}
        <button onClick={() => { setA(1); setCount((count) => count + a); }}>
          normal Click
        </button>
        <button onClick={() => { setA(10); setCount((count) => count + a); }}>
          strong Click
        </button>
        <button onClick={() => { setA(100); setCount((count) => count + a); }}>
          AAAAAA Click
        </button>
        {/* Corrected: use a single arrow function to call both functions sequentially */}
        <button onClick={() => { setA(10); setCount((count) => count * a); }}>
          insane clicking
        </button>
        <p>
          count is {count}
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HM
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
