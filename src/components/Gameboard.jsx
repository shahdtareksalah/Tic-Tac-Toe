import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelect, symbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSquareClick(rowIndex, colIndex) {
    
    if (gameBoard[rowIndex][colIndex] !== null) {
      return;
    }

    
    setGameBoard((prevGameBoard) => {
      const updatedBoard = prevGameBoard.map((row) => [...row]);
      updatedBoard[rowIndex][colIndex] = symbol;
      return updatedBoard;
    });

    
    onSelect(rowIndex, colIndex);
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSquareClick(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
