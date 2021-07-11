import React from 'react';
import { useSpring, animated } from 'react-spring'
import { BrowserRouter,Switch , Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <h1>AHHHHH</h1>
        <button className="menu-button">Menu</button>
      </header>
    </animated.div>
  );
}

export default App;
