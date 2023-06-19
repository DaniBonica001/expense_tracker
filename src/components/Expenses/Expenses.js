import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </Card>
  );
}

export default Expenses;
