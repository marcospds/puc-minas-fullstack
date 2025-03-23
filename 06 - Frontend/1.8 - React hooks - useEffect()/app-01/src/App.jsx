import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [loading3, setLoading3] = useState(false)

  useEffect(() => {
    console.log("renderizou")
  }, [loading1, loading2])

  return (
    <div className='App'>
      <button onClick={() => setLoading1(!loading1)}>{loading1 ? "Loading..." : "Salvar"}</button>
      <button onClick={() => setLoading2(!loading2)}>{loading2 ? "Loading..." : "Salvar"}</button>
      <button onClick={() => setLoading3(!loading3)}>{loading3 ? "Loading..." : "Salvar"}</button>
    </div>
  )
}

export default App
