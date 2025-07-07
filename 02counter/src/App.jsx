import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("Clicked", counter);
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      
      <button onClick={addValue}>Add value :{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value :{counter}</button>
      
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
