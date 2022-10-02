import React from 'react'

function History ({ histories, handleHistoryClick }) {
  return (
    <div className='history'>
      <h4>History</h4>
      <ul>
        {histories.map(his => (
          <button
            key={his.id}
            id={his.id}
            onClick={e => handleHistoryClick(e.target.id)}
          >
            {his.content}
          </button>
        ))}
      </ul>
    </div>
  )
}

export default History
