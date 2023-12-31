import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/AddExpense/AddExpense";
import { useState } from "react";

function App() {
  const initialExpenses = [
    {
      id: 1,
      description: "Toilet Paper",
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 2,
      description: "New TV",
      price: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 3,
      description: "Car Insurance",
      price: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 4,
      description: "New Desk (Wooden)",
      price: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
  const [dataExpenses, setDataExpenses] = useState(initialExpenses);
  //console.log(dataExpenses);

  const handleSaveExpense = (expenseData) => {
    const expense = {
      id: (dataExpenses.length + 1),
      ...expenseData,
    };

    setDataExpenses((prevDataExpenses) => {
      return [expense,...prevDataExpenses];
    });    
  };

  return (
    <div>
      <AddExpense onSaveExpense={handleSaveExpense} />
      <Expenses expenses={dataExpenses} />
    </div>
  );
}

export default App;
