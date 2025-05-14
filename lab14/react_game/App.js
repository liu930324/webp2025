import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import './App.css';
import './styles.css';

class OXGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(9).fill(null) }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) return;

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{ squares }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const status = winner ? `贏家是: ${winner}` : `下一步: ${this.state.xIsNext ? 'X' : 'O'}`;

        const moves = history.map((step, move) => {
            const desc = move ? `回到 #${move} 步` : '遊戲開始';
            return (
                <li key={move}>
                    <Button variant="outline" onClick={() => this.jumpTo(move)}>{desc}</Button>
                </li>
            );
        });

        return (
            <Card className="w-full max-w-xl mx-auto my-8">
                <CardContent>
                    <h1 className="text-3xl mb-4">React 的 OX遊戲</h1>
                    <div className="status mb-4">{status}</div>
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                    <ol className="mt-4 space-y-2">{moves}</ol>
                </CardContent>
            </Card>
        );
    }
}

function Board({ squares, onClick }) {
    const renderSquare = (i) => (
        <motion.button
            className="square"
            whileTap={{ scale: 0.8 }}
            onClick={() => onClick(i)}
        >
            {squares[i]}
        </motion.button>
    );

    return (
        <div className="board">
            <div className="board-row">{[0, 1, 2].map(renderSquare)}</div>
            <div className="board-row">{[3, 4, 5].map(renderSquare)}</div>
            <div className="board-row">{[6, 7, 8].map(renderSquare)}</div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default OXGame;
