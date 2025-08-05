import Player from "./components/Player.jsx";
import GameBoard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";
import { useState } from "react";
function App() {
   const [gameTurns,setGameTurns]= useState([]);
 const [activePlayer,setActivePlayer]= useState('X');
 function handleActivePlayer(rowIndex,colIndex){
  setActivePlayer((curPlayer)=>
    curPlayer==='X'?'O':'X');
  setGameTurns((prevTurns)=>{
let currentPlayer='X';
if(prevTurns.length>0 && prevTurns[0].player==='X'){
  currentPlayer='O';
}
const updatesTurns=[{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTurns];


return updatesTurns;

  });
 }
  return <>
  <div id="game-container">
<ol id="players" className="highlight-player">
<Player initialName="player 1" playersymbol="X" isActive={activePlayer==='X'}/>
<Player initialName="player 2" playersymbol="O" isActive={activePlayer==='O'}/>
</ol>
<GameBoard onSelect={handleActivePlayer} symbol={activePlayer}/>
  </div>
  <Log/>
  </>
}

export default App
