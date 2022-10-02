import React, { useState } from 'react'
import Square from './Square'

export default function Board ({ squares, handleClick }) {
  return (
    <div className='board'>
      <div>
        <div className='board-row'>
          <Square
            key={`square-0`}
            id={0}
            handleClick={handleClick}
            value={squares[0]}
          />
          <Square
            key={`square-1`}
            id={1}
            handleClick={handleClick}
            value={squares[1]}
          />
          <Square
            key={`square-2`}
            id={2}
            handleClick={handleClick}
            value={squares[2]}
          />
        </div>
        <div className='board-row'>
          <Square
            key={`square-3`}
            id={3}
            handleClick={handleClick}
            value={squares[3]}
          />
          <Square
            key={`square-4`}
            id={4}
            handleClick={handleClick}
            value={squares[4]}
          />
          <Square
            key={`square-5`}
            id={5}
            handleClick={handleClick}
            value={squares[5]}
          />
        </div>
        <div className='board-row'>
          <Square
            key={`square-6`}
            id={6}
            handleClick={handleClick}
            value={squares[6]}
          />
          <Square
            key={`square-7`}
            id={7}
            handleClick={handleClick}
            value={squares[7]}
          />
          <Square
            key={`square-8`}
            id={8}
            handleClick={handleClick}
            value={squares[8]}
          />
        </div>
      </div>
    </div>
  )
}
