import React from 'react'
import './IncomeExpense.styles.css';

const IncomeExpense = () => {
  return (
    <div className='incomeExpense-container' >
        <div>
            <h4>
                Income
            </h4>
            <span className='money plus' >+$0.00</span>
        </div>
        <div className='divider' ></div>
        <div >
            <h4>
                Expense
            </h4>
            <span className='money minus' >-$0.00</span>
        </div>
    </div>
  )
}

export default IncomeExpense
