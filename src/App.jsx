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
      <p>
        This is my basic thing in this website, you can click buttn to add count, there are different kinds of clicking you can choose
      </p>
      <div className="card">
        {/* Corrected: use a single arrow function to call both functions sequentially */}
        <button onClick={() => { setA(1); setCount((count) => count + a); }}>
          normal Click
        </button>
        <button onClick={() => { setA(10); setCount((count) => count + a); }}>
          strong Click
        </button>
        <button onClick={() => { setA(10000); setCount((count) => count + a); }}>
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
      </p>
    </>
  )
}

export default App
