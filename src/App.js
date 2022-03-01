import React, {useState} from 'react'
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');

  const generatePassword = (passwordLength, text) => {
    setError('');
    setResult('');
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!=+-*/%&@#$?";
    const result = Array(passwordLength).fill(0).map(() => characters[Math.floor(Math.random() * characters.length)]).join('');
    if(!text) return setError('Please enter text to generate password');
    setResult(result);
    const blob = new Blob([result + ' ' + text + ' password'], {type: "text/plain;charset=utf-8"});
    saveAs(blob, `${text} password.txt`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Password Generator</h2>
        <label htmlFor='password'>Enter text to generate password</label>
        <input  type="text" id="password" onChange={(e) => setFileName(e.target.value)} />
        <button onClick={() => generatePassword(12, fileName)}>Generate</button>
        <h5>{result}</h5>
        <h5>{error}</h5>
      </header>      
    </div>
  );
}

export default App;
