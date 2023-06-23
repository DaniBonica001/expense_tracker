import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";


function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    //console.log(year);
  };

  const filteredItems = expenses.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });
  
  return (
    <Card className='expenses'>
      <ExpenseFilter
        defaultYear={selectedYear}
        onChangeYear={handleYearFilter}
      />
      <ExpensesChart expenses={filteredItems}/>
      <ExpensesList filteredItems={filteredItems}/>
    </Card>
  );
}

export default Expenses;
