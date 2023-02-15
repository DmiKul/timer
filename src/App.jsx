import { useState } from 'react'
import Buttons from './components/buttons/Buttons'
import Time from './components/time/Time'
import Button from './components/UI/button/Button'

function App() {
  return (
    <div className="App">
      <Time></Time>
      <Buttons></Buttons>
    </div>
  )
}

export default App
