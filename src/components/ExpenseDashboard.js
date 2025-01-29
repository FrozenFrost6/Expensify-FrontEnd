import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import { fetchExpenses } from "../slices/expensesSlice";


function ExpenseDashboard() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchExpenses());
    }, [dispatch]);

    return ( 
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
}

export default ExpenseDashboard;