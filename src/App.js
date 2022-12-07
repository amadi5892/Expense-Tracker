import Header from './components/header.components';
import Balance from './components/Balance/balance.component';
import IncomeExpense from './components/IncomeExpense/IncomeExpense.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
      </div>
    </div>
  );
}

export default App;
