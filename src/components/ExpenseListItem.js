


import moment from "moment";
import { useNavigate } from "react-router";
import { INRFormatter } from "../formatters/CurrencyFormatter";

function ExpenseListItem({expenseId, expenseType, description, amount, owedTo, createdAt}) {
    
    const navigate = useNavigate();


    function handleEditClick() {
        navigate(`/edit-expense/${expenseId}`);    
    }

    
    
    return ( 
        <div>
            <h3>{expenseType}</h3>
            <p>{description}</p>
            <div>
                <p>Amount: {INRFormatter.format(amount)}</p>
                <p>Owed to: {owedTo ? owedTo : '-'}</p>
                <p>Date: {moment(createdAt).format('Do MMMM, YYYY, h:mm A')}</p>
            </div>
            {/* <button onClick={handleRemoveClick}>Remove</button> */}
            <button onClick={handleEditClick}>Edit</button>
            
            <hr></hr>
        </div>
    );
}


export default ExpenseListItem;