import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import { getVisibleExpenses } from "../selectors/selectors";




function ExpenseList() {
    
	const expenses = useSelector((state) => (state.expenses.expenses));
	const filters = useSelector((state) => (state.filters))

	const expensesFiltered = getVisibleExpenses(expenses, filters)
	// console.log(	)
	return (
		<div>
			<h1>Expenses</h1>
			{
				expensesFiltered.map((expense) => {
					return <ExpenseListItem key={expense.id} {...expense} />
				})
			}		
			
		</div> 
		
    );
}

export default ExpenseList;