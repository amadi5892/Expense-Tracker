import React from 'react'

const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'} >
        <p>{transaction.item}</p><p>{sign}${Math.abs(transaction.amount)}</p><button className='delete-btn' >x</button>
    </li>
  )
}

export default Transaction
