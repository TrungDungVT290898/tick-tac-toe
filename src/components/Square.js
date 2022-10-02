import React from 'react'

function Square ({ id, value, handleClick }) {
  return (
    <button
      id={id}
      className={'square'}
      onClick={() => {
        handleClick(id)
      }}
    >
      {value}
    </button>
  )
}

export default Square
