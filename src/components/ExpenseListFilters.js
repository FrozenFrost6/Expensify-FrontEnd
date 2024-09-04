import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import {
  setSortByAmountFilter,
  setSortByDateFilter,
  setTextFilter,
  setStartDateFilter,
  setEndDateFilter,
  setGroupByFilter,
} from "../slices/filtersSlice";
import ExpenseTypeSelector from "./ExpenseTypeSelect";

function ExpenseListFilters() {
  const dispatch = useDispatch();
  const [focusedInput, setFocusedInput] = useState(null);
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
  });
  const [selectedType, setSelectedType] = useState("");



  function handleTextInputFilterChange(e) {
    dispatch(setTextFilter(e.target.value));
  }

  function handleSortByOptionSelected(e) {
    const sortBy = e.target.value;
    if (sortBy === "amount") {
      dispatch(setSortByAmountFilter());
    } else if (sortBy === "date") {
      dispatch(setSortByDateFilter());
    }
  }

  function handleDateRangeChange({ startDate, endDate }) {
    setDates({ startDate, endDate });
    dispatch(setStartDateFilter(startDate ? startDate.valueOf() : null));
    dispatch(setEndDateFilter(endDate ? endDate.valueOf() : null));
  }


  function handleExpenseTypeChange(value) {
    setSelectedType(value);
    dispatch(setGroupByFilter(value));

  }

  return (
    <div>
      <input
        type="text"
        onChange={handleTextInputFilterChange}
        placeholder="Search by text"
      />

      <select onChange={handleSortByOptionSelected} defaultValue={"date"}>
        <option value={"date"}>Date</option>
        <option value={"amount"}>Amount</option>
      </select>

      <ExpenseTypeSelector 
        value={selectedType} 
        onChangeType={handleExpenseTypeChange} 
        allowReset={true}
      />

      <div>
        <DateRangePicker
          startDate={dates.startDate} // momentPropTypes.momentObj or null,
          startDateId="start_date_id" // PropTypes.string.isRequired,
          endDate={dates.endDate} // momentPropTypes.momentObj or null,
          endDateId="end_date_id" // PropTypes.string.isRequired,
          onDatesChange={handleDateRangeChange} // PropTypes.func.isRequired,
          focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false} // Allows all dates to be selectable
        />
      </div>
    </div>
  );
}

export default ExpenseListFilters;
