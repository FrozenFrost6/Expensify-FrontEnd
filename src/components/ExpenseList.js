import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import { getExpensesTotal, getVisibleExpenses } from "../selectors/selectors";
import { INRFormatter } from "../formatters/CurrencyFormatter";




function ExpenseList() {
    
	const expenses = useSelector((state) => (state.expenses.expenses));
	const filters = useSelector((state) => (state.filters));

	const expensesFiltered = getVisibleExpenses(expenses, filters);
	const expensesTotal = getExpensesTotal(expenses);

	return (
		<div>
			<h1>Expenses</h1>
			<p>{expensesFiltered.length} expenses totalling to: {INRFormatter.format(expensesTotal)}</p>
			{
				expensesFiltered.map((expense) => {
					return <ExpenseListItem key={expense.id} {...expense} />
				})
			}		
			
		</div> 
		
    );
}

export default ExpenseList;