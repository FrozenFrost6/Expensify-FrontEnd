// import { configureStore, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4} from 'uuid';

import { getVisibleExpenses } from "../selectors/selectors";
import { addExpense } from "../slices/expensesSlice";
import store from "../stores/store";



function Redux101 () {

	store.subscribe(() => {
		const state = store.getState();
		const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
		console.log(visibleExpenses)
		// console.log(state)
	})

	console.log(store.getState())

	const temp1 = store.dispatch(addExpense({
		id: uuidv4(),
		type: 'Fuel',
		description: "um",
		amount: 10,
		owedTo: 'anvesh',
		createdAt: 30
    }))

	const temp2 = store.dispatch(addExpense({
		id: uuidv4(),
		type: 'Salary',
		description: "maid salary",
		amount: 1000,
		owedTo: 'anvesh',
		createdAt: 25
    }))

	return (
		<p>hgelo</p>
	);
}

export default Redux101;


























	// // sample expense
	// // {
	// // 	id: 'xadassda'
	// // 	type: 'Fuel',
	// // 	description: "uhh",
	// // 	amount: 10,
	// // 	owedTo: 'anvesh',
	// // 	createdAt: 'today'
    // // }


  	// const expensesSlice = createSlice({
	// 	name: 'expenses',
	// 	initialState: { expenses: [] },
	// 	reducers: {
	// 		addExpense: (state, action) => {
	// 			const {
	// 				id = 'not a random id', 
	// 				type = 'Bills',
	// 				description = '',
	// 				amount = 0,
	// 				owedTo = 'Yourself',
	// 				createdAt = 0
	// 			} = action.payload;

	// 			state.expenses.push({
	// 				id,
	// 				type,
	// 				description,
	// 				amount,
	// 				owedTo,
	// 				createdAt
	// 			});
	// 		},
	// 		removeExpense: (state, action) => {
	// 			const { id = '' } = action.payload;
	// 			// Filter out the expense with the given id
	// 			state.expenses = state.expenses.filter(expense => expense.id !== id);
	// 		},
	// 		editExpense: (state, action) => {
	// 			const { id, updates } = action.payload;
		  
	// 			const editExpenseIndex = state.expenses.findIndex(expense => expense.id === id);

	// 			if (editExpenseIndex >= 0) {
	// 				state.expenses[editExpenseIndex] = {
	// 					...state.expenses[editExpenseIndex],
	// 					...updates
	// 				};
	// 			}
	// 		}
	// 	}
  	// });


	// const filtersSlice = createSlice({
	// 	name: 'filters',
	// 	initialState: {
	// 		text: '',
	// 		groupBy: '',
	// 		sortBy: 'date', // or amount
	// 		startDate: undefined,
	// 		endDate: undefined
	// 	},
	// 	reducers: {
	// 		setTextFilter: (state, action) => {
	// 			state.text = action.payload;
	// 		},
	// 		setGroupByFilter: (state, action) => {
	// 			state.groupBy = action.payload;
	// 		},
	// 		setSortByAmountFilter: (state) => {
	// 			state.sortBy = "amount"
	// 		},
	// 		setSortByDateFilter: (state) => {
	// 			state.sortBy = "date"
	// 		},
	// 		setStartDateFilter: (state, action) => {
	// 			state.startDate = action.payload;
	// 		},
	// 		setEndDateFilter: (state, action) => {
	// 			state.endDate = action.payload;
	// 		}

	// 	}

	// });

	// const getVisibleExpenses = (expenses, {text, groupBy, sortBy, startDate, endDate}) => {
	// 	return expenses.expenses.filter((expense) => {
	// 		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
	// 		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
	// 		const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase());
	// 		const groupByMatch = groupBy === '' || expense.type.toLowerCase() === groupBy.toLowerCase();

	// 		return startDateMatch && endDateMatch && textMatch && groupByMatch;
	// 	}).sort((a, b) => {
	// 		if (sortBy.toLowerCase() === 'date') {
	// 			return a.createdAt - b.createdAt;
	// 		} 
	// 		if (sortBy.toLowerCase() === 'amount') {
	// 			return a.amount - b.amount;
	// 		}
	// 	});
	// }


    // const store = configureStore({
	// 	reducer: {
	// 		expenses: expensesSlice.reducer, // This is the reducer from the slice
	// 		filters: filtersSlice.reducer
	// 	},
    // });

    // // Export actions
    // const { addExpense, removeExpense, editExpense } = expensesSlice.actions;
	// const { setTextFilter, setGroupByFilter , setSortByAmountFilter, setSortByDateFilter, setStartDateFilter, setEndDateFilter} = filtersSlice.actions;

    // store.subscribe(() => {
	// 	const state = store.getState();
	// 	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
	// 	console.log(visibleExpenses)
	// 	// console.log(state)
	// })
    

    // const temp1 = store.dispatch(addExpense({
	// 	id: uuidv4(),
	// 	type: 'Fuel',
	// 	description: "um",
	// 	amount: 10,
	// 	owedTo: 'anvesh',
	// 	createdAt: 30
    // }))

	// const temp2 = store.dispatch(addExpense({
	// 	id: uuidv4(),
	// 	type: 'Salary',
	// 	description: "maid salary",
	// 	amount: 1000,
	// 	owedTo: 'anvesh',
	// 	createdAt: 25
    // }))

	// store.dispatch(setSortByAmountFilter());

	// // store.dispatch(removeExpense({id: temp1.payload.id}))
	
	// // store.dispatch(
	// // 	editExpense({
	// // 		id: temp2.payload.id,
	// // 		updates: { amount: 3000, createdAt: 'yesterday' }
	// // 	})
	// // );

	// // store.dispatch(setTextFilter("hello"));
	
	// // store.dispatch(setGroupByFilter("Bills"));
	
	// // store.dispatch(setSortByAmountFilter());
	// // store.dispatch(setSortByDateFilter());

	// // store.dispatch(setStartDateFilter("my bday"));
	// // store.dispatch(setEndDateFilter("my next year bday"))
	// // store.dispatch(setEndDateFilter());