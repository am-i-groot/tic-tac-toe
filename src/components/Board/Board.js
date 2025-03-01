import React from "react";
import Square from "../Square/Square";
import "./Board.css";

const Board = ({ board, handleClick }) => {
    return (
        <div className="board">
            {board.map((cell, index) => (
                <Square key={index} value={cell} onClick={() => handleClick(index)} />
            ))}
        </div>
    );
};

export default Board;
