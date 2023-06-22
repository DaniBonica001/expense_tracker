import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/AddExpense/AddExpense";
import { useState } from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      description: "Toilet Paper",
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: "e2", 
      description: "New TV", 
      price: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      description: "Car Insurance",
      price: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      description: "New Desk (Wooden)",
      price: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [dataExpenses, setDataExpenses] = useState(expenses);
  console.log(dataExpenses)

  const handleSaveExpense = (expenseData) =>{
    const expense = {
      id: Math.floor(Math.random()*10000000000000),
      ...expenseData      
    }
    console.log(expense);
    console.log(expenses);

    setDataExpenses([...expenses,expense])
  }
  return (
    <div>      
      <AddExpense onSaveExpense={handleSaveExpense}/>
      <Expenses expenses={dataExpenses} />
    </div>
  );
}

export default App;
