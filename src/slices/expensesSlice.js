import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiConfig from "../config/apiConfig";

// ** Async Thunks **
export const fetchExpenses = createAsyncThunk(
    "expenses/fetchExpenses",
    async (_, { getState, rejectWithValue }) => {
        const authHeader = getState().auth.authHeader;
        try {
            const response = await axios.get(apiConfig.apiPaths.expenses, {
                headers: { Authorization: authHeader }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to fetch expenses");
        }
    }
);

export const addExpense = createAsyncThunk(
    "expenses/addExpense",
    async (expenseData, { getState, rejectWithValue }) => {
        const authHeader = getState().auth.authHeader;
        try {
            const response = await axios.post(apiConfig.apiPaths.expenses, expenseData, {
                headers: { Authorization: authHeader }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to add expense");
        }
    }
);

export const editExpense = createAsyncThunk(
    "expenses/editExpense",
    async (expense, { getState, rejectWithValue }) => {
        const authHeader = getState().auth.authHeader;
        try {
            const response = await axios.put(`${apiConfig.apiPaths.expenses}/${expense.expenseId}`, expense, {
                headers: { Authorization: authHeader }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to edit expense");
        }
    }
);

export const removeExpense = createAsyncThunk(
    "expenses/removeExpense",
    async (expenseId, { getState, rejectWithValue }) => {
        const authHeader = getState().auth.authHeader;
        try {
            await axios.delete(`${apiConfig.apiPaths.expenses}/${expenseId}`, {
                headers: { Authorization: authHeader }
            });
            return expenseId;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to delete expense");
        }
    }
);

// ** Expenses Slice **
const expensesSlice = createSlice({
    name: "expenses",
    initialState: { 
        expenses: [],
        expenseTypes: [
            "Food", "Groceries", "Fuel", "Entertainment", "House maintenance",
            "Product", "Clothes", "Investments", "Health", "Bills",
            "Fees", "Transport", "Other"
        ],
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null
    },
    reducers: {
        clearExpenses: (state) => {
            state.expenses = [];
        }
    },
    extraReducers: (builder) => {
        builder
            // ** Fetch Expenses **
            .addCase(fetchExpenses.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchExpenses.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.expenses = action.payload;
            })
            .addCase(fetchExpenses.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // ** Add Expense **
            .addCase(addExpense.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addExpense.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.expenses.push(action.payload);
            })
            .addCase(addExpense.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // ** Edit Expense **
            .addCase(editExpense.pending, (state) => {
                state.status = "loading";
            })
            .addCase(editExpense.fulfilled, (state, action) => {
                state.status = "succeeded";
                const index = state.expenses.findIndex(expense => expense.expenseId === action.payload.expenseId);
                if (index !== -1) {
                    state.expenses[index] = action.payload;
                }
            })
            .addCase(editExpense.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // ** Remove Expense **
            .addCase(removeExpense.pending, (state) => {
                state.status = "loading";
            })
            .addCase(removeExpense.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.expenses = state.expenses.filter(expense => expense.expenseId !== action.payload);
            })
            .addCase(removeExpense.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    }
});

export const { addExpenseType, removeExpenseType, editExpenseType, clearExpenses } = expensesSlice.actions;
export default expensesSlice.reducer;
