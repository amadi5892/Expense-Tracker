import Header from './components/header.components';
import Balance from './components/Balance/balance.component';
import IncomeExpense from './components/IncomeExpense/IncomeExpense.component';
import TransactionList from './components/TransactionList/TransactionList.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
