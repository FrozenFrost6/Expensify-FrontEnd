import { useSelector } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { useNavigate } from "react-router";
import axios from "axios";
import { apiConfig } from "../config/apiConfig";

function AddExpense() {
    const navigate = useNavigate();
    const authHeader = useSelector((state) => state.auth.authHeader);

    async function handleExpenseFormSubmit(expense) {
        
        try {
            // expense.createdAt = new Date(expense.createdAt).toISOString().slice(0, 19); // Format to 'yyyy-MM-ddTHH:mm:ss'
            console.log(expense);
            const response = await axios.post(
                apiConfig.apiPaths.expenses, // path
                expense, // data
                {
                    headers: {
                        Authorization: authHeader,
                    },
                }
            );

            // Navigate back to the dashboard
            navigate("/");
        } catch (error) {
            console.error("There was an error sending the expenses!", error);
        }
    }

    return (
        <div>
            <ExpenseForm onSubmit={handleExpenseFormSubmit} />
        </div>
    );
}

export default AddExpense;