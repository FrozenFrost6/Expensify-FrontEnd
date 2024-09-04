import moment from "moment";
import { useState } from "react";
import { SingleDatePicker } from "react-dates";
import { useSelector } from "react-redux";
import ExpenseTypeSelector from "./ExpenseTypeSelect";


function ExpenseForm({ onSubmit, expense}) {
    const expenseTypes = useSelector((state) => state.expenses.expenseTypes);
    const [type, setType] = useState(expense ? expense.type : '');
    const [description, setDescription] = useState(expense ? expense.description : '');
    const [amount, setAmount] = useState(expense ? expense.amount : '');
    const [owedTo, setOwedTo] = useState(expense ? expense.owedTo : '');
    const [date, setDate] = useState(expense ? moment(expense.createdAt) : moment());
    const [focused, setFocused] = useState(false);
    const buttonText = expense ? 'Edit expense' : 'Add expense';

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API or update state
        const formData = {
            type,
            description,
            amount: parseFloat(amount),
            owedTo,
            createdAt: date.valueOf()
        };

        onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <input 
                required
                type="text" 
                placeholder="Type" 
                autoFocus 
                value={type} 
                onChange={(e) => setType(e.target.value)} 
            />  */}
            <ExpenseTypeSelector 
                value={type}
                onChangeType={setType}
            /> 
            <br /><br />
            
            <textarea 
                placeholder="Description" 
                required
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
            /> 
            <br /><br />
            
            <input 
                type="number"
                required 
                placeholder="Amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
            />
            <br /><br />
            
            <input 
                type="text" 
                placeholder="Owed to" 
                value={owedTo} 
                onChange={(e) => setOwedTo(e.target.value)}
            />
            <br /><br />

            <SingleDatePicker
                date={date} 
                onDateChange={newDate => setDate(newDate)} 
                focused={focused} 
                onFocusChange={({ focused }) => setFocused(focused)} 
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
            
            <button type="submit">{buttonText}</button>
        </form>
    );
}


export default ExpenseForm;