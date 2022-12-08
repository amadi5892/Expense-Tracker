import React, { useContext } from 'react'
import Transaction from '../Transaction/transaction.component';
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
        {transactions.map(transaction => (<Transaction transaction={transaction} />))}
        
      </ul>
    </div>
  )
}

export default TransactionList

