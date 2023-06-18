import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({item}) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={item.date}/>
      <div className='expense-item__description'>
        <h2>{item.description}</h2>
        <div className='expense-item__price'>${item.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
