import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    console.log(year);
  };

  const filteredItems = expenses.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  let content = <p>No expenses found</p>;
  
  if (filteredItems.length > 0){
    content = filteredItems.map((item) => <ExpenseItem key={item.id} item={item} />);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        defaultYear={selectedYear}
        onChangeYear={handleYearFilter}
      />
      {content}
    </Card>
  );
}

export default Expenses;
