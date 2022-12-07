import React from 'react'

import './TransactionList.styles.css';

const TransactionList = () => {
  return (
    <div>
      <h3>
        History
      </h3>
      <ul className="list">
        <li className="minus" >
            <p>Cash</p><span>-$400</span><button className='delete-btn' >x</button>
        </li>
      </ul>
    </div>
  )
}

export default TransactionList

