import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'
import Header from './components/Header'

function App() {
  const [click, setClick]= useState(false);
  const clickBut= ()=>{
    setClick(true)
}
  const [count, setCount] = useState(0)

  return (
   <div className="div">
    <User username="Catelle" age={20} click={click}/>
    <Header clickBut={clickBut}/>
   </div>
       
  )
}

export default App
