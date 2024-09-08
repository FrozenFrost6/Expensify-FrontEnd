import { INRFormatter } from "../formatters/CurrencyFormatter";

function ExpensesSummary({expensesCount=0, expensesTotal=0}) {
    
    return ( 
        <div>
            <h3>{expensesCount} {expensesCount === 1 ? 'expense' : 'expenses'} totalling to: {INRFormatter.format(expensesTotal)}</h3>
        </div>
     );
}

export default ExpensesSummary;