import { useState } from "react";
export default function Player({playername ,playersymbol}){
    const[isEdited,setIsEdited]=useState(false);
    const[isNamed,setIsNamed]=useState("");

 function handleEditing(){
    setIsEdited((edited)=>!edited);

 }
 function handleNameChange(event){
  setIsNamed(event.target.value);
 }
 
return(
    <li>
  <span className="player">
    {isEdited ? (
        <input type="text" value={isNamed} onChange={handleNameChange}
 />
    ):
  <span className="player-name">{isNamed}</span>
    }
 <span className="player-symbol">{playersymbol}</span>
 </span>
 <button onClick={handleEditing}>{isEdited ? "save" : "Edit"}</button>
 </li>
);



}