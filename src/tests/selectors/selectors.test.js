import moment from "moment";
import { getExpensesTotal, getVisibleExpenses } from "../../selectors/selectors";


const expenses = [
    {
        id: 1,
        type: 'Food',
        description: "Foodaholic egg fried rice",
        amount: 325,
        owedTo: 'anvesh',
        createdAt: moment("1995-12-20").valueOf()
    },
    {
        id: 2,
        type: 'Food',
        description: "Foodaholic Shanghai paneer",
        amount: 370,
        owedTo: 'anvesh',
        createdAt: moment("1995-12-30").valueOf()
    },
    {
        id: 1,
        type: 'Food',
        description: "flowerdrum spring rolls",
        amount: 285,
        owedTo: 'anvesh',
        createdAt: moment("1995-12-27").valueOf()
    },
]



// getVisibleExpenses tests

test("Should filter by value", () => {
    const filters =  {
        text: 'foodaholic',
        groupBy: '',
        sortBy: 'date', // or amount
        startDate: moment("1995-12-20").valueOf(),
        endDate: moment("1996-12-25").valueOf()
    }

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]])
});

test("Should filter by date", () => {
    const filters =  {
        text: '',
        groupBy: '',
        sortBy: 'date', // or amount
        startDate: moment("1995-12-20").valueOf(),
        endDate: moment("1996-12-25").valueOf()
    }

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2] ,expenses[1]])
})


test("Should filter by amount", () => {
    const filters =  {
        text: '',
        groupBy: '',
        sortBy: 'amount', // or amount
        startDate: moment("1995-12-20").valueOf(),
        endDate: moment("1996-12-25").valueOf()
    }

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0] ,expenses[1]]);
});

test("Should filter by start date", () => {
    const filters =  {
        text: '',
        groupBy: '',
        sortBy: 'date', // or amount
        startDate: moment("1995-12-22").valueOf(),
        endDate: moment("1996-12-25").valueOf()
    }

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1]] );
});


test("Should filter by end date", () => {
    const filters =  {
        text: '',
        groupBy: '',
        sortBy: 'date', // or amount
        startDate: moment("1995-12-20"),
        endDate: moment("1995-12-28")
    }

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[2] ] );
});


// getExpensesTotal tests

test("Should return 0 for empty expenses array", () => {
    const emptyExpenses = [];
    const result = getExpensesTotal(emptyExpenses);
    expect(result).toEqual(0);
});


test("Should return 0 for null object", () => {
    const emptyExpenses = null;
    const result = getExpensesTotal(emptyExpenses);
    expect(result).toEqual(0);
});


test("Should return 0 for undefined object", () => {
    const emptyExpenses = undefined;
    const result = getExpensesTotal(emptyExpenses);
    expect(result).toEqual(0);
});


test("Should return the correct total for expenses", () => {
    const result = getExpensesTotal(expenses);
    expect(result).toEqual(980);
});


