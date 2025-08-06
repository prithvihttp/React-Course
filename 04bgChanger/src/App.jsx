import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('grey');

  return (
    <div className="w-screen h-screen duration-200" style={{background: color}}>
      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl bottom-12 inset-x-0">
        <button
          onClick={() => setcolor('red')}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{ backgroundColor: 'red' }}>
          Red
        </button>
        <button onClick={()=> setcolor('green')} className="outline-none px-4 py-1 text-white  shadow-lg rounded-full" style={{backgroundColor: 'green'}}>Green</button>
        <button onClick={()=> setcolor('olive')} className="outline-none px-4 py-1 text-white  shadow-lg rounded-full" style={{backgroundColor: 'olive'}}>Olive</button>
        <button onClick={()=> setcolor('yellow')}className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor: 'yellow'}}>yellow</button>
        <button onClick={()=> setcolor('blue')} className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor: 'blue'}}>Blue</button>
        <button onClick={()=> setcolor('orange')} className="outline-none px-4 py-1 text-white  shadow-lg rounded-full" style={{backgroundColor: 'orange'}}>Orange</button>
      </div>

    </div>
  )
}

export default App
