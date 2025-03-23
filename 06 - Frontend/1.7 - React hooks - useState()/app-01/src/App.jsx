import { useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  console.log("Nova renderização...")

  return (
    <div className='App'>
      <button onClick={() => setLoading(!loading)}>{loading ? "Loading..." : "Salvar"}</button>
    </div>
  )
}

export default App
