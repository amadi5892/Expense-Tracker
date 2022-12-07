import Header from './components/header.components';
import Balance from './components/Balance/balance.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
