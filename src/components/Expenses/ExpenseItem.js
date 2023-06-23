import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ item }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={item.date} />
        <div className="expense-item__description">
          <h2>{item.description}</h2>
          <div className="expense-item__price">${item.price}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
