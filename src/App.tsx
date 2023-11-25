import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

let name = "Khush";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </nav>

      <div className="container">
        <h1>Hello {name}!</h1>
      </div>
    </>
  );
}

const arr = [
  {
    "airportid": "SIA",
    "airport": "Sangster Intl",
    "loungeid": "CLUBMBJ",
    "lounge": "Club Mobay",
    "city": "Montego Bay, Jamaica",
    "citylabel": "MOBAY"
  },
  {
    "airportid": "NMIA",
    "airport": "Norman Manley Intl",
    "loungeid": "CLUBKGN",
    "lounge": "Club Kingston",
    "city": "Kingston, Jamaica",
    "citylabel": "KINGSTON"
  }
]

const user = {
  name: "~Khush",
  imageSRC: 'https://plus.unsplash.com/premium_photo-1681400699241-834781696dc6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageSize: 90,
}

function MyButtonL() {
  const [count, setCount] = useState(0);
  function alertC() {
    setCount(count + 1);
    console.log("slert", count)
  }

  useEffect(() => {
    console.log("useeffect", count)
  }, [count]);

  return (
    <button onClick={alertC}>👍 {count} Likes</button>
  );
}

function renderList() {
  const city = arr.map(names =>
    <li
      key={names.loungeid}
    >
      {names.lounge}
    </li>
  )

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Welcome To Lists</h1>
          <ul>{city}</ul>
          <MyButtonL />
        </div>
      </header>
    </div>
  );
}

export default renderList;