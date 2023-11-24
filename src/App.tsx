import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Welcome To React</h1>
          <p>{user.name}</p>
          <img className='pictureR' src={user.imageSRC} alt='Picturee' style={{ width: user.imageSize, height: user.imageSize }}></img>
          <p><MyButtonL /></p>
        </div>
      </header>
    </div>
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
  }

  return (
    <button onClick={alertC}>👍 {count} Likes</button>
  );
}

function MyButtonD() {
  const [count, setCount] = useState(0);

  function alertC() {
    setCount(count + 1);
  }

  return (
    <button onClick={alertC}>👎 {count} Dislikes</button>
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
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Welcome To Lists</h1>
          <ul>{city}</ul>
          <MyButtonL />
          <MyButtonD />
        </div>
      </header>
    </div>
  );
}

export default renderList;
