import React from 'react';

import './App.css';
import Game from './Game'
import Rando from './Rando'
import Clicker from './Clicker'
import ClickerV2 from './ClickerV2'

function App() {
  return (
    <div className="App">
      {/* <Game/> */}
      {/* <Rando maxNum= {7}/> */}
      <ClickerV2/>
    </div>
  );
}

export default App;
