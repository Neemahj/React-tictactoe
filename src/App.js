import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const [move, setMove] = useState('X');
  const [position, setPosition] = useState(Array(9).fill(''));
  console.log(position)

  const checkWin = (container) => {
    let combos = {
      horizontal: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ]
    }
  
    
    for(let combo in combos){
      combos[combo].forEach((line) => {
        if( 
          container[line[0]] === '' ||
          container[line[1]] === '' ||
          container[line[2]] === '' 
        ){
          //do nothing
        }else if(
          container[line[0]] === container[line[1]] &&
          container[line[1]] === container[line[2]]
        ){
          alert(`Player ${container[line[0]]} won!`)
        }
      })
    }
  }
    
  const handleClick = (id) => {
    if(position[id] !== ''){
      alert('Position Taken')
      return
    }
  
    let container = [...position]
    if(move === 'X'){
      container[id] = 'X'
      setMove('O')
    }else {
        container[id] = 'O'
        setMove('X')
      }
      setPosition(container)
      // console.log(container)
      checkWin(container);
   if(container.includes("") === false){
    alert('Draw!')
   }
    
  }
    

    const handleReset = () => {
      setPosition(Array(9).fill(''))
    }
    // if(!(position.includes(" "))){
    //   alert("draw")
    // }
  
  
  return (
    <div className="App">    
      <div className="ttt-container">
        <h1 className="header">Tic-Tac-Toe</h1>
        <div className="inner_container">
          <div className="grid-item" onClick = {() => handleClick(0)}>{position[0]}</div>
          <div className="grid-item" onClick = {() => handleClick(1)}>{position[1]}</div>
          <div className="grid-item" onClick = {() => handleClick(2)}>{position[2]}</div>
          <div className="grid-item" onClick = {() => handleClick(3)}>{position[3]}</div>
          <div className="grid-item" onClick = {() => handleClick(4)}>{position[4]}</div>
          <div className="grid-item" onClick = {() => handleClick(5)}>{position[5]}</div>
          <div className="grid-item" onClick = {() => handleClick(6)}>{position[6]}</div>
          <div className="grid-item" onClick = {() => handleClick(7)}>{position[7]}</div>
          <div className="grid-item" onClick = {() => handleClick(8)}>{position[8]}</div>
        </div>
        <div className="footer">
          <button className="reset" onClick = { handleReset}>Reset</button>
        </div>
      </div>
    </div>
  )

}

export default App;
