import { useState } from "react";
export default function Player({initialName ,playersymbol ,isActive}){
    const[isEdited,setIsEdited]=useState(false);
    const[playerName,setIsNamed]=useState(initialName);

 function handleEditing(){
    setIsEdited((edited)=>!edited);

 }
 function handleNameChange(event){
     setIsNamed(event.target.value);
 }
 
return(
    <li className={isActive?"active":undefined}>
  <span className="player">
    {isEdited ? (
        <input type="text" value={playerName} onChange={handleNameChange} required/>
    ):
  <span className="player-name">{playerName}</span>
    }
 <span className="player-symbol">{playersymbol}</span>
 </span>
 <button onClick={handleEditing}>{isEdited ? "save" : "Edit"}</button>
 </li>
);



}