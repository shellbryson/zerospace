import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ZeroSpace</h1>
      <div className="card">
        <p>
          Don't let the black dogs catch you
        </p>
      </div>
    </>
  )
}

export default App
