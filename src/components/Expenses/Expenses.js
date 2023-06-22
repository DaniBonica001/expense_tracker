import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState('2020');
  const handleYearFilter = (year) =>{
    setSelectedYear(year);
    console.log(year)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter defaultYear={selectedYear} onChangeYear={handleYearFilter}/>
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </Card>
  );
}

export default Expenses;
