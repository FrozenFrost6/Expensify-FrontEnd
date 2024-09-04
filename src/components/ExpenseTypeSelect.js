import React from "react";
import { useSelector } from "react-redux";

function ExpenseTypeSelector({ value, onChangeType, allowReset=false }) {
    const expenseTypes = useSelector((state) => state.expenses.expenseTypes);

    return (
        <select 
            required
            value={value} 
            onChange={(e) => onChangeType(e.target.value)}
        >
            <option value="" disabled={!allowReset}>
                {allowReset ? 'All Types' : 'Select Type'} 
            </option>
            {expenseTypes.map((expenseType, index) => (
                <option key={index} value={expenseType}>
                    {expenseType}
                </option>
            ))}
        </select>
    );
}

export default ExpenseTypeSelector;
