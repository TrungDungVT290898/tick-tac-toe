import React, { useState, useEffect } from 'react'
import Board from './Board'
import History from './History'
let isStartup = true
let currentHistory = null
function Game () {
  const startHistory = [
    {
      id: 'his-0',
      content: 'Start Game',
      square: []
    }
  ]
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [winner, setWinner] = useState(null)
  const [histories, setHistories] = useState(startHistory)
  //Declaring a Winner
  useEffect(() => {
    if (!currentHistory && !isStartup) {
      setHistories([
        ...histories,
        {
          id: `his-${histories.length}`,
          content: `Go to move #${histories.length}`,
          square: squares.slice()
        }
      ])
    }

    const newWinner = calculateWinner(squares)

    setWinner(newWinner)
  }, [squares])

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  //Handle player
  const handleClick = i => {
    const newSquares = squares.slice()

    if (winner || newSquares[i]) {
      return
    }
    if (currentHistory) {
      let his = histories.find(s => s.id === currentHistory)
      if (his) {
        setHistories(histories.slice(0, histories.indexOf(his) + 1))
      }
    }
    newSquares[i] = xIsNext ? 'X' : 'O'
    isStartup = false
    currentHistory = null
    setSquares(newSquares)
    setXIsNext(prevState => !prevState)
  }

  //Restart game
  const handlRestart = () => {
    setXIsNext(true)
    setSquares(Array(9).fill(null))
    setWinner(null)
    setHistories(startHistory)
    isStartup = true
    currentHistory = null
  }
  const handleHistoryClick = i => {
    currentHistory = `${i}`
    setSquares(histories.find(s => s.id == i).square)
  }
  return (
    <div className='main'>
      <h2 className='result'>Winner is: {winner ? winner : 'N/N'}</h2>
      <div className='game'>
        <span className='player'>Next player is: {xIsNext ? 'X' : 'O'}</span>
        <div style={{ display: 'flex' }}>
          <Board squares={squares} handleClick={handleClick} />
          <History
            handleHistoryClick={handleHistoryClick}
            histories={histories}
          />
        </div>
      </div>
      <button onClick={handlRestart} className='restart-btn'>
        Restart
      </button>
    </div>
  )
}

export default Game
