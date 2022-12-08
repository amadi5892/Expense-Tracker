import React, { useContext } from 'react'
import { GlobalContext } from '../../context/global.context';

import './TransactionList.styles.css';

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

  return (
    <div>
      <h3>
        History
      </h3>
      <ul className="list">
        {transactions.map(transaction => (
            <li className="minus" >
                <p>{transaction.item}</p><p>${transaction.amount}</p><button className='delete-btn' >x</button>
            </li>
        ))}
        
      </ul>
    </div>
  )
}

export default TransactionList

