import { useState } from 'react'
import LoveCard from './comps/LoveCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoveCard/>
    </>
  )
}

export default App
