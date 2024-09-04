import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    text: '',
    groupBy: '',
    sortBy: 'date', // or amount
    startDate: null,
    endDate: null
  },
  reducers: {
    setTextFilter: (state, action) => {
      state.text = action.payload;
    },
    setGroupByFilter: (state, action) => {
      state.groupBy = action.payload;
    },
    setSortByAmountFilter: (state) => {
      state.sortBy = "amount";
    },
    setSortByDateFilter: (state) => {
      state.sortBy = "date";
    },
    setStartDateFilter: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDateFilter: (state, action) => {
      state.endDate = action.payload;
    }
  }
});

export const { setTextFilter, setGroupByFilter, setSortByAmountFilter, setSortByDateFilter, setStartDateFilter, setEndDateFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
