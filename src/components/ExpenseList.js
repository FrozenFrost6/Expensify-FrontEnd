import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import { getExpensesTotal, getVisibleExpenses } from "../selectors/selectors";
import { INRFormatter } from "../formatters/CurrencyFormatter";
import ExpensesSummary from "./ExpensesSummary";




function ExpenseList() {
    
	const expenses = useSelector((state) => (state.expenses.expenses));
	const filters = useSelector((state) => (state.filters));

	const expensesFiltered = getVisibleExpenses(expenses, filters);
	const expensesTotal = getExpensesTotal(expensesFiltered);

	return (
		<div>
			<h1>Expenses</h1>
			<ExpensesSummary expensesCount={expensesFiltered.length} expensesTotal={expensesTotal}/>

			{
				expensesFiltered.map((expense) => {
					return <ExpenseListItem key={expense.expenseId} {...expense} />
				})
			}		
			
		</div> 
		
    );
}

export default ExpenseList;