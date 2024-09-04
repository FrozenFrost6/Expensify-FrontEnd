import { NavLink } from "react-router-dom";
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import HelpPage from '../components/HelpPage';


function Header () {
    return (
      <header>
        <h1>Expensify</h1>
            <NavLink to="/" Component={ExpenseDashboard}>Dashboard</NavLink>
            <NavLink to="/add-expense" Component={AddExpense}>Add Expense</NavLink>
            <NavLink to="/help" Component={HelpPage}>Help</NavLink>
      </header>
    );
} 

export default Header;

