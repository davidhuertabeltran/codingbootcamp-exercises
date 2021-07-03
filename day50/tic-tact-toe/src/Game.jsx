import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from './Winner';

function Game() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const copyBoard = [...board];

        //if user click an occupied square or if game is won, return
        if(winner || copyBoard[i]) {
            return;
        }

        // Put and X or O in the clicked square
        copyBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(copyBoard);
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {

    }

    const renderMoves = () => {
        return <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    }

    return (
        <>
            <Board squares={board} onClick={handleClick}/>
            <div className="control-panel">
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;