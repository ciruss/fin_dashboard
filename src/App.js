import React, { useState } from 'react';

function App() {
  const [activeIncome, setActiveIncome] = useState(0);
  const [passiveIncome, setPassiveIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  // create steps: 1) insert incomes 2) insert expenses 3) show tables, graphs

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h3>Incomes:</h3>
        <label htmlFor="activeIncomes">Active incomes</label>
        <input
          type="number"
          name="activeIncomes"
          onChange={e => setActiveIncome(e.target.value)}
        />
        <label htmlFor="passiveIncomes">Passive incomes</label>
        <input
          type="number"
          name="passiveIncomes"
          onChange={e => setPassiveIncome(e.target.value)}
        />
      </div>
      <div>
        <h3>Expenses:</h3>
        <label htmlFor="expenses">Enter your expenses</label>
        <input
          id="expenses"
          type="number"
          name="expenses"
          onChange={e => setExpenses(e.target.value)}
        />
      </div>
      <br />
      <p>Your last months income: {activeIncome + passiveIncome - expenses}</p>
    </div>
  );
}

export default App;
