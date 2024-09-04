import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../slices/expensesSlice';
import filtersReducer from '../slices/filtersSlice';

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    filters: filtersReducer
  }
});

export default store;
