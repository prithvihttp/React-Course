import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className="w-screen h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl bottom-12 inset-x-0">
        <button
          onClick={() => setColor('red')}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{ backgroundColor: 'red' }}
        >
          Red
        </button>

        <button
          onClick={() => setColor('green')}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{ backgroundColor: 'green' }}
        >
          Green
        </button>
        <button
          onClick={() => setColor('blue')}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{ backgroundColor: 'blue' }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor('yellow')}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{ backgroundColor: 'yellow' }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor('black')}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{ backgroundColor: 'black' }}
        >
          Black
        </button>
        <button
          onClick={() => setColor('purple')}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{ backgroundColor: 'purple' }}
        >
          Purple
        </button>
      </div>
    </div>
  );
}

export default App;
