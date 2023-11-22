import React from 'react';
import logo from './logo.svg';
import './App.css';


function MyButtonc() {
  return (
    <button>Sample Button</button>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Welcome To React</h1>
          <p>~Khush</p>
          <p><MyButton /></p>
        </div>
      </header>
    </div>
  );
}

export default App;
