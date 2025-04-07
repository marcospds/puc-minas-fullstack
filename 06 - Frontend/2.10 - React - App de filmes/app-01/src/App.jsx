import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import './globals.css'

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App
