import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </div>
      <p className="read-the-docs">
     
      </p>
    </>
  )
}

export default App
