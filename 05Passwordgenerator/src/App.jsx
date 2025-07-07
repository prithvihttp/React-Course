import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [generateClicked, setGenerateClicked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!generateClicked) return;

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_?/><\"";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
    setGenerateClicked(false); // Reset trigger
  }, [generateClicked, length, numberAllowed, charAllowed]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md mx-auto text-center shadow-md rounded-lg px-8 py-6 text-orange-500 bg-gray-700">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>

        <div className="mb-4">
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
          <p>Password Length: {length}</p>
        </div>

        <div className="mb-2">
          <label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <span className="ml-2">Include Numbers</span>
          </label>
        </div>

        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <span className="ml-2">Include Symbols</span>
          </label>
        </div>

        <button
          onClick={() => setGenerateClicked(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
        >
          Generate Password
        </button>

        {password && (
          <>
            <div className="mt-4 bg-gray-800 p-3 rounded text-white break-all">
              <p><strong>Password:</strong> {password}</p>
            </div>
            <button
              onClick={copyToClipboard}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              {copied ? "Copied!" : "Copy Password"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
