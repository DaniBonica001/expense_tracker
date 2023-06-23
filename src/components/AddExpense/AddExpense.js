import Card from "../UI/Card";
import { useForm } from "react-hook-form";

import "./ExpenseForm.css";
import { useState } from "react";

function AddExpense(props) {
  const [isAdding, setIsAdding] = useState(false)
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      description: "",
      price: "",
      date: "",
    },
  });

  const onSubmit = (data) => {
    //console.log("submit");
    //console.log(data);
    const expense = {
      description: data.description,
      price: +data.price,
      date: new Date(data.date),
    };
    props.onSaveExpense(expense);
    reset();
    setIsAdding(false)
  };

  const handleChangeView = (event) =>{
    //console.log(event)
    setIsAdding(true)
  }

  const handleCancel = () =>{
    setIsAdding(false)
  }

  if (isAdding === false){
    return <Card className="new-expense">
      <button type="submit" onClick={handleChangeView}>Add Expense</button>
    </Card>
  }

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
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </Card>
  );
}

export default AddExpense;
