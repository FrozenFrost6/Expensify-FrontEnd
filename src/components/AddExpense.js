import { useDispatch } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { useNavigate } from "react-router";

import { addExpense } from "../slices/expensesSlice";

function AddExpense() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function handleExpenseFormSubmit(expense) {
        dispatch(addExpense(expense));
        navigate("/");
    }

    return (
        <div>
            <ExpenseForm onSubmit={handleExpenseFormSubmit} />
        </div>
    );
}

export default AddExpense;