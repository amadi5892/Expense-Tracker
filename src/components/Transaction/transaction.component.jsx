import React, { useContext } from 'react'
import { GlobalContext } from '../../context/global.context';


const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'} >
        <p>{transaction.item}</p><p>{sign}${Math.abs(transaction.amount)}</p><button onClick={() => deleteTransaction(transaction.id)} className='delete-btn' >x</button>
    </li>
  )
}

export default Transaction
