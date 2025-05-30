import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Matches from './components/matches'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Matches/>
    </>
  )
}

export default App
