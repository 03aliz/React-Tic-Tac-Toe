import React from 'react';
import TicTacGame from './Containers/TicTacGame/TicTacGame';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Tic Tac Toe</h1>
      </header>
      <TicTacGame />
    </div>
  );
}

export default App;
