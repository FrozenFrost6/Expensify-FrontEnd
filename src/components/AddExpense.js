import { useDispatch } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../slices/expensesSlice";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router";

function AddExpense() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleExpenseFormSubmit(expense) {
        dispatch(addExpense({...expense, id: uuidv4()}))
        navigate('/')
    };

    
    return ( 
        <div>
            <ExpenseForm onSubmit={handleExpenseFormSubmit}></ExpenseForm>
        </div>
     );
}

export default AddExpense;