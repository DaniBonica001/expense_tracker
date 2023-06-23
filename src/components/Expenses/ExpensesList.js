import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

function ExpensesList({filteredItems}) {  

    if(filteredItems.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }
  
  
    return ( <ul className="expenses-list"> 
        {filteredItems.map((item) => <ExpenseItem key={item.id} item={item} />)}
    </ul>);
}

export default ExpensesList;