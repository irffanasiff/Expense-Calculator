import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      //clean way of updating a state based on previous state
      return [expense, ...prevExpenses];
    });
  };
  // expenses[0]=title <- items[0]
  // expenses[1]=amount <- items[1]
  // expenses[2]=date <- items[2]
  // expenses[3]=id <- items[3]

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
