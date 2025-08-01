import Player from "./components/Player.jsx";
function App() {
 
  return <>
  <div id="game-container">
<ol id="players">
<Player playername="player 1" playersymbol="o"/>
<Player playername="player 2" playersymbol="x"/>

</ol>

  </div>
  </>
}

export default App
