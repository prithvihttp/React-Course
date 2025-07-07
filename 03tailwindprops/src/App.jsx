// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import  Card from './Components/Card' 

function App() {
  let myObj = {
    username: "Prithvi",
    age: 21
  }


  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card channel='chaiaurcode' someObject={myObj}/>
      <Card channel='Prithvi' />
    </>
  )
}

export default App
