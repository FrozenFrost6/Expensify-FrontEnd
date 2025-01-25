import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/styles.scss'

import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'

import { Provider } from "react-redux";
import { getVisibleExpenses } from "./selectors/selectors";
import { addExpense, removeExpense , addExpenseType, removeExpenseType, editExpenseType} from "./slices/expensesSlice";
import store from "./stores/store";
import { v4 as uuidv4} from 'uuid';
import { setTextFilter } from './slices/filtersSlice';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';








// store.dispatch(addExpense({
// 	id: uuidv4(),
// 	type: 'Food',
// 	description: "Foodaholic egg biriyani",
// 	amount: 280,
// 	owedTo: 'anvesh',
// 	createdAt: 30
// }))

// store.dispatch(addExpense({
// 	id: uuidv4(),
// 	type: 'Food',
// 	description: "Foodaholic paneer biriyani ",
// 	amount: 310,
// 	owedTo: '',
// 	createdAt: 25
// }))

// store.dispatch(addExpense({
// 	id: uuidv4(),
// 	type: 'Food',
// 	description: "Flowerdrum veg fried rice ",
// 	amount: 315,
// 	owedTo: 'anvesh',
// 	createdAt: 45
// }))


store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses.expenses, state.filters)
	// console.log(visibleExpenses)
	console.log(state)
})

// console.log(store.getState())
// store.dispatch(setTextFilter('foodaholic'))
// store.dispatch(addExpenseType('Fasduel'));
// store.dispatch(removeExpenseType('fuel'));
// store.dispatch(editExpenseType({sourceType: 'fasduel', destType: 'fuel'}))




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <AppRouter></AppRouter>
      </Provider>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

