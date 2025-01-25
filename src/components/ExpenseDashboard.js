import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import { addExpense, clearExpenses } from "../slices/expensesSlice";
import { apiConfig } from "../config/apiConfig";

function ExpenseDashboard() {
    const dispatch = useDispatch();
    const authHeader = useSelector(state => state.auth.authHeader);
    const expenses = useSelector(state => state.expenses.expenses);
    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get(apiConfig.apiPaths.expenses, {
                    headers: {
                        Authorization: authHeader
                    }
                });

                // Clear existing expenses before adding fetched expenses

                dispatch(clearExpenses());

                
                
                // Add each fetched expense to the store
                response.data.forEach(expense => {
                    dispatch(addExpense(expense));
                });


            } catch (error) {
                console.error("There was an error fetching the expenses!", error);
            }
        };

        // Only call fetchExpenses once on component mount, if necessary
        if (authHeader) {
            fetchExpenses();
        }
        
    }, [dispatch, authHeader]);

    return ( 
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
}

export default ExpenseDashboard;