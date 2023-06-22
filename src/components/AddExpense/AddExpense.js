import Card from "../UI/Card";
import { useForm } from "react-hook-form";


import "./ExpenseForm.css";

function AddExpense() {
  const {register, handleSubmit,reset} = useForm({
    defaultValues: {
      description: "",
      price: "",
      date: "",
    },
  });

  const onSubmit = (data) => {
    console.log("submit");
    console.log(data);
    reset();
    
    
  };

  return (
    <Card className="new-expense">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              {...register("description")}
              type="text"
              placeholder="Description of the item"
            />
          </div>

          <div className="new-expense__control">
            <label>Price</label>
            <input
              {...register("price")}
              type="number"
              min="0.01"
              step="0.01"
              placeholder="Price of the item"
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              {...register("date")}
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              placeholder="Date"
            />
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </Card>
  );
}

export default AddExpense;
