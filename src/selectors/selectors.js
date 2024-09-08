import moment from "moment";

// src/selectors.js
export const getVisibleExpenses = (expenses, {text, groupBy, sortBy, startDate, endDate}) => {

    startDate = moment(startDate);
    endDate = moment(endDate);

    return expenses.filter((expense) => {
        const startDateMatch = !startDate.isValid() ||  expense.createdAt >= startDate.valueOf();
        const endDateMatch = !endDate.isValid() || expense.createdAt <= endDate.valueOf();
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase());
        const groupByMatch = groupBy === '' || expense.type.toLowerCase() === groupBy.toLowerCase();
        return startDateMatch && endDateMatch && textMatch && groupByMatch;
    }).sort((a, b) => {
        if (sortBy.toLowerCase() === 'date') {
            return a.createdAt - b.createdAt;
        } 
        if (sortBy.toLowerCase() === 'amount') {
            return a.amount - b.amount;
        }
    });
}



export const getExpensesTotal = (expenses) => {
    var total = 0;
    if(expenses) {
        expenses.map((expense) => {
            total += expense.amount;
        });
    }
    return total;
}
  