import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../slices/expensesSlice";

function EditExpense() {
    
    let {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    id = parseInt(id);
    
    const expenses = useSelector((state) => (state.expenses.expenses));

    const expenseToEdit =  expenses.find((expense) =>  expense.expenseId === id);



    function handleExpenseFormEditSubmit(editedExpense) {
        console.log(editedExpense);
        dispatch(editExpense({expenseId: id, updates: editedExpense}));
        navigate('/')
    }

    function handleRemoveClick() {
        dispatch(removeExpense({expenseId:id}))
        navigate('/')
    }

    return ( 
        <div>
            <p>This is edit expense page.</p>
            <ExpenseForm onSubmit={handleExpenseFormEditSubmit} expense={expenseToEdit}></ExpenseForm>
            <button onClick={handleRemoveClick}>Remove</button>
        </div>
        
     );
}

export default EditExpense;