import { useState } from 'react'
import { Header } from './components/Header'
import './App.css'
import { Skillslist } from './components/SkillsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header firstName={"Marcos"} />
      <Skillslist skills={["css", "html", "javascript", "java"]} />
    </div>
  )
}

export default App
