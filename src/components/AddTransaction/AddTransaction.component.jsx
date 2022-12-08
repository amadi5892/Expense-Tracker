import React, { useState } from 'react';

import './AddTransaction.styles.css';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

  return (
    <div>
      <h3>Add new transaction</h3>
      <label>Text</label>
      <input type='text' value={text} onChange={(e) => (setText(e.target.value))} placeholder='Enter text...' />
      <label>
        Amount <br></br>
        (negative - expense, positive - income)
      </label>
      <input type='number' value={amount} onChange={(e) => (setAmount(e.target.value))} />
      <button className='btn' >Add transaction</button>
    </div>
  )
}

export default AddTransaction