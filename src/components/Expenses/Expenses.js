import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    console.log(year);
  };

  const filteredItems = expenses.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  

  return (
    <Card className="expenses">
      <ExpenseFilter
        defaultYear={selectedYear}
        onChangeYear={handleYearFilter}
      />
      <ExpensesList filteredItems={filteredItems}/>
    </Card>
  );
}

export default Expenses;
