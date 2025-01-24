import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import { addExpense } from "../slices/expensesSlice";

function ExpenseDashboard() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/expenses', {
                    auth: {
                        username: 'anveshch',
                        password: 'pass'
                    }
                });
                response.data.forEach(expense => {
                    dispatch(addExpense(expense));
                });
            } catch (error) {
                console.error("There was an error fetching the expenses!", error);
            }
        };

        fetchExpenses();
    }, [dispatch]);

    return ( 
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
}

export default ExpenseDashboard;