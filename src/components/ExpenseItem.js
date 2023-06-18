import './ExpenseItem.css';

function ExpenseItem({item}) {
  return (
    <div className='expense-item'>
      <div>{item.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{item.description}</h2>
        <div className='expense-item__price'>${item.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
