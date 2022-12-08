import React, { useContext } from 'react'
import { GlobalContext } from '../../context/global.context'


const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    //map throught the amounts
    const amounts = transactions.map(transaction => transaction.amount);
    // get the sum of the amounts that we have mapped through
    const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);

  return (
    <div>
      <h4>Balance</h4>
      <span>${total}</span>
    </div>
  )
}

export default Balance
