import React, { useContext } from 'react'
import { GlobalContext } from '../../context/global.context';

import './IncomeExpense.styles.css';

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item),0)
    .toFixed(2);

  return (
    <div className='incomeExpense-container' >
        <div>
            <h4>
                Income
            </h4>
            <span className='money plus' >{income}</span>
        </div>
        <div className='divider' ></div>
        <div >
            <h4>
                Expense
            </h4>
            <span className='money minus' >{Math.abs(expense).toFixed(2)}</span>
        </div>
    </div>
  )
}

export default IncomeExpense
