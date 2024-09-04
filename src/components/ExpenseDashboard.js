import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";


function ExpenseDashboard() {
    return ( 
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
     );
}

export default ExpenseDashboard;