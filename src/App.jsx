import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="div">
    <User username="Catelle" age={20}/>
   </div>
       
  )
}

export default App
