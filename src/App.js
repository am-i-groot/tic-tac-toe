import React, { useState } from "react";
import Board from "./components/Board/Board";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = checkWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <Board board={board} handleClick={handleClick} />
      <h2>{winner ? `Winner: ${winner}` : `Turn: ${isXTurn ? "X" : "O"}`}</h2>
      <button onClick={() => setBoard(Array(9).fill(null))}>Restart</button>
    </div>
  );
};

export default App;
